import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c42d64e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a0851570 = () => interopDefault(import('../pages/atelier.vue' /* webpackChunkName: "pages/atelier" */))
const _bca69526 = () => interopDefault(import('../pages/proyects.vue' /* webpackChunkName: "pages/proyects" */))
const _aa6479a4 = () => interopDefault(import('../pages/start.vue' /* webpackChunkName: "pages/start" */))
const _b042ff6c = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _f1a53d00 = () => interopDefault(import('../pages/proyect-info/_id.vue' /* webpackChunkName: "pages/proyect-info/_id" */))
const _0cd320c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4c42d64e,
    name: "about"
  }, {
    path: "/atelier",
    component: _a0851570,
    name: "atelier"
  }, {
    path: "/proyects",
    component: _bca69526,
    name: "proyects"
  }, {
    path: "/start",
    component: _aa6479a4,
    name: "start"
  }, {
    path: "/posts/:id?",
    component: _b042ff6c,
    name: "posts-id"
  }, {
    path: "/proyect-info/:id?",
    component: _f1a53d00,
    name: "proyect-info-id"
  }, {
    path: "/",
    component: _0cd320c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
