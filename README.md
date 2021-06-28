# ec-app

## Create Nuxt Proyect
```bash
# init nuxt proyect in src folder
$ npm init nuxt-app ec-app/src
$ select:
    * Protect name: 'ec-app'
    * Programming language: 'JavaScript'
    * Package manager: 'Npm'
    * UI framework: 'Buefy'
    * Nuxt.js modules: 'None'
    * Linting tools: 'ESLint'
    * Testing framework: 'None'
    * Rendering mode: 'Universal (SSR / SSG)'
    * Deployment target: 'Server (Node.js hosting)'
    * Deployment tools: 'jsconfig.json'
    * Continuous integration: 'None'
    * Version control system: 'Git'
$ cd ec-app
$ code .
```
## Copy and Build Nuxt Proyect
    > ec-app/src/assets
    > ec-app/src/components
    > ec-app/src/layouts
    > ec-app/src/pages
    > ec-app/src/static
    > ec-app/src/sore
    > ec-app/src/nuxt.config.js
    > ec-app/src/package.json
```bash
$ npm install
$ sudo rm -rf .git
```
## Create Firebase Proyect
```bash
#need previously install firebase tools
$ sudo npm install -g firebase-tools

# init firebase proyect in ec-app folder
$ cd ec-app
$ firebase init  
$ select:
    * Firebase CLI features: 'functions' + 'hosting'
    * Proyect: 'estudio-clio'
    * javascrypt
    * eslint? N
    * npm i? y
```
## Copy and Build Firebase Proyect
    > ec-app/firebase.json
    > ex-app/functions/index.js
    > ex-app/functions/package.json
```bash
# install npm in functions folder
$ cd functions
$ npm install
```

## Deploy ec-app folder in firebase hosting
```bash
$ cd ..
$ firebase deploy
```

### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
