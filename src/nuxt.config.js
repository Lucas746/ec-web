// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Estudio Clio',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-ec.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'XXXXXXXXXXXX_XXXXXXX_XXXXXX_XXXXXXXXXXX',
          authDomain: 'xxx.firebaseapp.com',
          databaseURL: 'https://xxx.firebaseio.com',
          projectId: 'xxx',
          storageBucket: 'xxx.appspot.com',
          messagingSenderId: 'xxxxxxxxxxxxx',
          appId: 'X:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXX',
          measurementId: 'X-XXXXXXXXXX'
        },
        services: {
          functions: true,
          storage: true,
          analytics: true
        }
      }
    ],
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'XXX'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
