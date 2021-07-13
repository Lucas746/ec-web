import createApp from './app.js'

import storageService from './service.storage.js'
import functionsService from './service.functions.js'
import analyticsService from './service.analytics.js'

const appConfig = {"apiKey":"AIzaSyBEehMR_C7HavV1_JFqYp7_5JdVdJvIYD0","authDomain":"estudio-clio.firebaseapp.com","databaseURL":"https:\u002F\u002Festudio-clio.firebaseio.com","projectId":"estudio-clio","storageBucket":"estudio-clio.appspot.com","messagingSenderId":"1062284388630","appId":"1:1062284388630:web:2cf4a4d6965ff6f45ac837","measurementId":"G-NC92HV93XR"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      storageService(session, firebase, ctx, inject),
    functionsService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      storageService(session, firebase, ctx, inject),
      functionsService(session, firebase, ctx, inject),
      analyticsService(session, firebase, ctx, inject),

    ]
  }

  const [
    storage,
    functions,
    analytics
  ] = await Promise.all(servicePromises)

  const fire = {
    storage: storage,
    functions: functions,
    analytics: analytics
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}