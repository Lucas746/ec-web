module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/ec-etapa-anteproyecto","2":"components/ec-etapa-codigo-fuente","3":"components/ec-etapa-contenido-web","4":"components/ec-etapa-hosting","5":"components/ec-etapa-modelado","6":"components/ec-etapa-obra","7":"components/ec-etapa-proyecto","8":"components/ec-etapa-renderizado","9":"components/ec-partner","10":"components/ec-post","11":"components/ec-post-carousel","12":"components/ec-post-img","13":"components/ec-proyect","14":"components/ec-proyect-img","15":"pages/about","16":"pages/atelier","17":"pages/index","18":"pages/posts/_id","19":"pages/proyect-info/_id","20":"pages/proyects","21":"pages/start"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-ec.3feab34.png";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"shortname\":\"CCCUNLP\",\"name\":\"Centro Cultural de Convenciones Universidad Nacional de La Plata\",\"author\":\"Estudio Clio\",\"year\":\"2016\",\"description\":\"Es un proyecto de intervención urbana, coronado con un edificio de gran escala que alberga un Centro de congresos y convenciones para la UNLP. Este programa presenta la dificultad de vincular actividades dinámicas que requieren una especialidad voluminosa y de gran escala como son el auditorio, sala de exposiciones y SUM, con programas sistemáticos como lo son las aulas, administración y alojamiento. Esta diversidad se ve reforzada a la hora de resolver la jerarquía de los diferentes accesos, necesitando tres niveles distintos desde lo publico, semi-público y privado.\",\"map\":\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5494.9413341543195!2d-57.94768001211267!3d-34.90623227183012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622265879242!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fetiq_cccunlp.png?alt=media&token=34be14f8-3713-41ce-af5c-9dcf28d286ee\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_card.jpg?alt=media&token=0159e823-2dcb-4f64-8c1c-422fb932c016\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_001.jpg?alt=media&token=a46a4d01-70c6-45c9-9de1-4461ef5f8196\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_002.jpg?alt=media&token=e9135a7b-33f3-4904-9920-04bccd090f7e\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_003.jpg?alt=media&token=bb247e62-2235-43f9-9aec-5bfa65c0fcdd\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_004.jpg?alt=media&token=e6b0762b-bbe7-4fca-b5bc-ed2c503fbf50\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_005.jpg?alt=media&token=c33bd785-02a5-4043-8b2f-daead93af422\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_006.jpg?alt=media&token=3fb8bdb1-7199-4f33-9d7d-b07a15971d6a\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_007.jpg?alt=media&token=8a0cb358-833f-40ce-ad39-66d55d8f1bf0\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_008.jpg?alt=media&token=e028580e-827f-4b73-84c9-6b9c382c2f11\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_009.jpg?alt=media&token=252c54f7-7bec-43b5-9c9f-a3164f68f66d\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_010.jpg?alt=media&token=e6d9d17d-980c-4633-94d2-7fc2b7935605\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_011.jpg?alt=media&token=d0e7baf4-78a6-4518-ab62-2696cf3465bb\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_012.jpg?alt=media&token=15987056-3fbb-410b-a4ff-16752c00e871\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_013.jpg?alt=media&token=f1e3c6d8-250b-443a-83ab-51f92b104948\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_014.jpg?alt=media&token=1fd89fce-85e7-4a8e-baa9-b2b29b08d90b\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_015.jpg?alt=media&token=6aefe7d1-dfdc-4c4e-8f02-bec7bf666213\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_016.jpg?alt=media&token=c9732df6-5769-4d5d-8842-468e9984eaa5\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_017.jpg?alt=media&token=8e0e7b7c-d96b-4e32-9430-6e88475d7bc1\",\"id\":\"16\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_018.jpg?alt=media&token=98e2c1f4-aeb1-4fd5-903e-4add2c2cf7a1\",\"id\":\"17\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_019.jpg?alt=media&token=e382183f-c88d-41e2-ab8a-6495e9aedf52\",\"id\":\"18\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_020.jpg?alt=media&token=01c13214-b84d-4861-bf95-45eaf4ec918c\",\"id\":\"19\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_021.jpg?alt=media&token=c34e683b-14fd-4970-9975-fea7e316511a\",\"id\":\"20\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_022.jpg?alt=media&token=bdedc417-e09b-49ba-aa0c-fbad446641a7\",\"id\":\"21\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_023.jpg?alt=media&token=3a6ef467-b9a2-4699-bf4b-78eb2168c269\",\"id\":\"22\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_024.jpg?alt=media&token=11bd9095-91d6-45c4-a759-eb6f87a4f8ab\",\"id\":\"23\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_025.jpg?alt=media&token=8238f01b-050d-40a1-9acd-8c145b89e807\",\"id\":\"24\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_026.jpg?alt=media&token=f7ad8f1f-27b8-4947-b327-0bfe253f9d83\",\"id\":\"25\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_027.jpg?alt=media&token=172a3aee-1eb0-4efd-b548-ede2d4377a9b\",\"id\":\"26\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_028.jpg?alt=media&token=c66e3e03-29a7-49c6-bc77-11b5a490c155\",\"id\":\"27\"}],\"planes\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_001.jpg?alt=media&token=651ffb00-d252-4adb-91ec-69a0648c7664\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_002.jpg?alt=media&token=38ee3f2f-ddc4-4f83-a162-5487e3563e56\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_003.jpg?alt=media&token=586966c5-fef8-4e29-892f-b81c769e9d13\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_004.jpg?alt=media&token=5dc9c82c-d83d-4bdb-805c-b9d03e5127d4\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_005.jpg?alt=media&token=6e9812db-9368-4cae-a8ef-dfc979c81993\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_006.jpg?alt=media&token=55130b07-3fc0-4557-89c3-d6a187a513fb\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_007.jpg?alt=media&token=7dedfeac-7c43-43de-9c39-282e6bc3a59b\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_008.jpg?alt=media&token=69e80831-8081-46c0-953e-d45a74387008\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_009.jpg?alt=media&token=85464bea-0bb5-4043-b1fc-9e0b99a53faa\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_010.jpg?alt=media&token=a584cad2-d8cc-4c58-b94c-026f7ca630d5\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcccunlp%2Fcccunlp_planes_011.jpg?alt=media&token=dca74747-5735-4401-9993-669d7cf420c8\",\"id\":\"10\"}]},{\"id\":\"1\",\"shortname\":\"HOME\",\"name\":\"House Of Multiple Enviroment\",\"author\":\"Estudio Clio ft. Agusvill\",\"year\":\"2020\",\"description\":\"H.o.m.e. es un ejercicio proyectual de vivienda mínima desarrollado en conjunto con @agusvill. Tomamos como regla distribuir siempre el espacio en tres jerarquías rectoras, es decir, en un cuadrado compuesto por nueve módulos iguales, 4 tendrán cierta jerarquía, tres otra y dos otra diferente. Esta regla será utilizada al momento de realizar la distribución principal como así también las que surjan en el armado. Para conocer mas sobre este proceso podes visitar nuestro atelier.\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7185.872203991993!2d-72.34328550003053!3d-40.68211186955593!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266002528!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fetiq_home.png?alt=media&token=897d39fd-1fd1-4d24-a54b-7dcbe19c1c4b\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_card.jpg?alt=media&token=a70e6394-53b2-4acb-a8ce-f7e9db6d948f\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_001.jpg?alt=media&token=c0ffc157-829b-42f7-8b51-a2d9a5db32b4\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_002.jpg?alt=media&token=2071ccc1-8822-44ce-81b6-f70eaf1e1c93\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_003.jpg?alt=media&token=1b09aefe-7366-464e-b051-c4da81060242\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_004.jpg?alt=media&token=3d112d6d-d10d-44dc-8171-ed7befac7dba\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_005.jpg?alt=media&token=232c5c2b-1df5-423a-bbae-f574d9001407\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_006.jpg?alt=media&token=87b24819-5cde-434d-affb-0df9eafd10d9\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_007.jpg?alt=media&token=6f0ad410-a7d7-4a7f-84c1-ea6d48db3ffc\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_008.jpg?alt=media&token=8268cff9-7d83-43d8-a2de-6b9f4b8222d9\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_009.jpg?alt=media&token=242ea838-786e-483f-b581-39a75a7fdb09\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_010.jpg?alt=media&token=e4aefa71-ea05-4f74-a249-fc5c927f03d1\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_011.jpg?alt=media&token=959fb05f-bb88-4d26-864c-4d9cf0d3b967\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_012.jpg?alt=media&token=c57022a1-a7fa-4623-83e2-fe2a9f0138cc\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_013.jpg?alt=media&token=685673a9-a39e-495b-8288-b92747d15b58\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_014.jpg?alt=media&token=3779005a-72fc-4291-a37f-5107c12569a8\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_015.jpg?alt=media&token=4df63275-320d-45fb-9971-199e648ca68b\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_016.jpg?alt=media&token=edc5c9ce-c785-4a89-ae9e-ba9d4e6fc8c5\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_017.jpg?alt=media&token=5f04a7a7-4430-4fbe-95eb-49ff46074105\",\"id\":\"16\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_018.jpg?alt=media&token=3869bc7e-4ce2-49b2-9fed-706d198426ea\",\"id\":\"17\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_019.jpg?alt=media&token=d4878c7d-3f57-4dca-a1fb-8986954c53ac\",\"id\":\"18\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_020.jpg?alt=media&token=da0be99f-0aa1-4aa9-822e-ce316b02e40d\",\"id\":\"19\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_021.jpg?alt=media&token=208cb1ad-8235-45b8-9833-f7c7bdb58a1b\",\"id\":\"20\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_022.jpg?alt=media&token=e635f3ed-07be-47c8-a51d-a7aa40b6e1fa\",\"id\":\"21\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fhome%2Fhome_023.jpg?alt=media&token=0e01c23e-cde4-4443-bc88-9ef507590e16\",\"id\":\"22\"}]},{\"id\":\"2\",\"shortname\":\"CAUCE\",\"name\":\"CAUCE Ex Molino Río de la Plata\",\"author\":\"Arq. MIRET HERRERA Carla\",\"year\":\"2020\",\"description\":\"Es el proyecto de final de carrera de la flamante arquitecta Carla Miret, quien nos encargó el trabajo de ambientación y tratado del entorno como la materialización y renderizado de las imágenes para la visualización fotorrealista del proyecto.\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4043.377513752754!2d-64.1744680833356!3d-31.415517820702075!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266155681!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fetiq_cauce.png?alt=media&token=d4290237-3fe7-4081-b637-c41bef2f31ba\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_card.jpg?alt=media&token=20cdb743-281e-48f5-9a14-5060784d8555\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_001.jpg?alt=media&token=a5745c53-7def-4699-b1cc-881881cb499d\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_002.jpg?alt=media&token=ed91050d-1214-4995-a6d3-c7caf9c1f0c4\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_003.jpg?alt=media&token=56ec5119-04bc-44aa-8ffa-24dff063acae\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_004.jpg?alt=media&token=95895dac-2277-406c-933a-3fa9fa618d66\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_005.jpg?alt=media&token=26938f48-87da-48d2-89d9-2d5a958fd484\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_006.jpg?alt=media&token=b587d16b-0b8d-4d92-bc49-349d131944c5\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_007.jpg?alt=media&token=665dabea-1fd1-4a5d-8458-52968624958f\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_008.jpg?alt=media&token=9dda0ba5-823b-4e09-8770-216b2df62e5b\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_009.jpg?alt=media&token=81d01664-5a69-4852-9b66-5128cc8c9f15\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_010.jpg?alt=media&token=fc18a0be-d4ea-4ad6-8068-6cbd2fd7638d\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_011.jpg?alt=media&token=ff71c100-9884-46e3-9988-b464fab63718\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_012.jpg?alt=media&token=b584d69c-7f10-4253-a551-b9957f3f2527\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Fcauce%2Fcauce_013.jpg?alt=media&token=0c539b40-9d9a-4422-bcc9-bbecbfaa5a18\",\"id\":\"12\"}]},{\"id\":\"3\",\"shortname\":\"TANGO\",\"name\":\"Casa Tango\",\"author\":\"Estudio Clio\",\"year\":\"2021\",\"description\":\"Es un trabajo de ante-proyecto, en la que el cliente presentó un esquema de armado. El trabajo de estudio Clio en primera instancia consistió en una reinterpretación tanto de la misma como del programa para lograr una síntesis formal y espacial. En segunda instancia se presento como propuesta la materialización de la vivienda incluyendo todos los detalles y mobiliario visibles más la visualización de dicha propuesta a través de los renders.\",\"map\":\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21926.113302187783!2d-58.07854022882101!3d-35.106167311082146!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1622266228638!5m2!1ses-419!2sar\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Fetiq_tango.png?alt=media&token=7b133354-3e4a-43cc-8ed9-2a21de3eb0c0\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_card.jpg?alt=media&token=2fba3593-89b0-473d-bc98-d80408587a09\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_001.jpg?alt=media&token=84913752-f8e9-4654-b2ef-448f681c586a\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_002.jpg?alt=media&token=e927421a-6573-4e0d-b7cc-2d0c35c13479\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_003.jpg?alt=media&token=f7d4ab17-1166-4e32-b90d-0fd7dbd3a96e\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_004.jpg?alt=media&token=4ffd9201-f93a-4d5c-a223-168f6dec4e71\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_005.jpg?alt=media&token=edcbffdf-7e32-48a7-8c5c-2a0b5c474a60\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_006.jpg?alt=media&token=391666ac-ae44-4e1d-bf50-0b4544eb5c50\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_007.jpg?alt=media&token=68097e27-cd98-4fe6-89e1-dbb3cfd4014d\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_008.jpg?alt=media&token=70421c38-1440-42fb-8af7-17eca883fbad\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_009.jpg?alt=media&token=6aeff0a8-d2b5-4841-ab70-8152d1d39cec\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_010.jpg?alt=media&token=0f3f5a45-0935-4aca-98b6-50722defea1d\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_011.jpg?alt=media&token=918d3dfc-f5be-410d-92d2-7d776bd7f542\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_012.jpg?alt=media&token=b5fd588b-0d52-45d0-9ad0-00a868a2cf2b\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/proyects%2Ftango%2Ftango_013.jpg?alt=media&token=879b3bb6-ece7-4c35-b024-2754e2b9ac86\",\"id\":\"12\"}]}]");

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"isecpostcard\":false,\"shortname\":\"ACAPULCO\",\"name\":\"Silla Acapulco\",\"author\":\"Estudio Clio\",\"year\":\"2014\",\"description\":\"El diseño esta en los detalles, por lo que nos parece importante muchas veces estar en el armado artesanal a medida del mobiliario para encargos de re-ambientación de espacios. La clásica silla Acapulco armada completamente a mano por el estudio, desde el doblado y soldado de la estructura de hierro, hasta la costura de los cordones de PVC\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Fetiq_acapulco.png?alt=media&token=32842367-0259-4b6a-a878-4d22ccce72e9\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_card.jpg?alt=media&token=ba0245c3-de2e-42ae-8751-41e79b8fc70c\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_001.jpg?alt=media&token=c8455398-fa18-4a31-835b-a404b5268f27\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_002.jpg?alt=media&token=c0a2ba97-4157-4de2-b563-83572f14d718\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_003.jpg?alt=media&token=ad0d2390-17ed-48bf-acc7-847423b8832a\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Facapulco%2Facapulco_004.jpg?alt=media&token=9e1d020e-0158-4b18-9e28-0556d4f37c58\",\"id\":\"3\"}]},{\"id\":\"1\",\"isecpostcard\":true,\"shortname\":\"4-3-2\",\"name\":\"Ejercicio proyectual de jerarquía espacial\",\"author\":\"Estudio Clio ft. Agusvill\",\"year\":\"2020\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_card.jpg?alt=media&token=e9ae9d2c-d4c6-480e-924e-f552e318cd04\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_001.jpg?alt=media&token=88c89d90-4ae0-4491-bd75-5d6206f46ef4\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_002.jpg?alt=media&token=4bc575c8-68b3-40b1-a3ce-062e024f874b\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_003.jpg?alt=media&token=a4208d59-d8d0-4fe9-b0ce-623b0099cd70\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_004.jpg?alt=media&token=741b01bd-d8b9-4249-9010-23f352d275f7\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_005.jpg?alt=media&token=650ecaab-eff9-4033-ad47-206864abafac\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_006.jpg?alt=media&token=6f72ffd9-a723-47c0-9a3b-a636e92183c9\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_007.jpg?alt=media&token=6f5e36ca-1411-4e47-a945-f86c77054774\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_008.jpg?alt=media&token=f71712d0-875b-4c74-b509-47bb0b667fe1\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_009.jpg?alt=media&token=3dae621a-c5a8-417e-b00a-400e4966b012\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_010.jpg?alt=media&token=8ed4e3ff-c238-4aac-97d0-2af25e3271b1\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_011.jpg?alt=media&token=9e0c3630-9d9c-4a11-a5a1-c08c8deabcdc\",\"id\":\"10\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_012.jpg?alt=media&token=88243bc0-e830-4fb8-be86-f143840a96b7\",\"id\":\"11\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_013.jpg?alt=media&token=fe001adb-f54b-40dc-ba28-1c7b69a1b96f\",\"id\":\"12\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_014.jpg?alt=media&token=834e930a-eee8-455a-878b-582925b1b38e\",\"id\":\"13\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_015.jpg?alt=media&token=9d9d9577-2eb4-4171-ab96-ed0a10f43473\",\"id\":\"14\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_016.jpg?alt=media&token=a159c678-b3a9-42ca-8fc7-c6448c8f6022\",\"id\":\"15\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2F4-3-2%2F4-3-2_017.jpg?alt=media&token=cdfa250b-dc10-4734-b034-fc707d6e946d\",\"id\":\"16\"}]},{\"id\":\"2\",\"isecpostcard\":false,\"shortname\":\"May The 4th\",\"name\":\"May the 4th be with you\",\"author\":\"Estudio Clio\",\"year\":\"2021\",\"description\":\"En el último tiempo extraños seres han estado habitando nuestros proyectos, a pesar de ser sujetos que han recorrido lo largo y ancho del hiperespacio aseguran no haber encontrado la espacialidad y confortabilidad que les da Estudio Clio para encontrarse con la fuerza, por lo que pretenden ir a fondo con la disputa de esos espacios..\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_card.jpg?alt=media&token=01683f37-481b-437b-8e5b-adc98ca19166\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_001.jpg?alt=media&token=35967f01-8a8b-43f8-a8c2-813a746f22e5\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_002.jpg?alt=media&token=0b6d0809-d6ba-4e38-8b98-15bd6c87aa24\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_003.jpg?alt=media&token=b84647fd-c846-4572-9c55-2cb69fcbc5e9\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_004.jpg?alt=media&token=29e83a80-242a-4376-81c9-61bd99a42255\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_005.jpg?alt=media&token=71876ced-a44f-46d3-bd27-7ff49bbccc56\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_006.jpg?alt=media&token=081bdf92-f56a-418b-8cc6-2cb8c758f9af\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_007.jpg?alt=media&token=672e7ad5-7583-449e-b8a0-912ac9e656b1\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_008.jpg?alt=media&token=a88a34a9-593c-4fb7-8cbf-d2253e5666c9\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_009.jpg?alt=media&token=bc723dfa-fe1c-4595-83bf-c8d1dd882335\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fmay-the-4%2Fmay-the-4_010.jpg?alt=media&token=3b2c049d-8949-45c0-b864-2c5164e71290\",\"id\":\"9\"}]},{\"id\":\"3\",\"isecpostcard\":true,\"shortname\":\"RENDER MAQUETA\",\"name\":\"Cómo y por qué hacer un render maqueta\",\"author\":\"Estudio Clio\",\"year\":\"2020\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_card.jpg?alt=media&token=389a1668-190e-4d8a-aae4-7a356d3c149a\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_001.jpg?alt=media&token=4848c126-807f-42e3-81ba-a720ccbff954\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_002.jpg?alt=media&token=20293533-b7e8-490f-bcb8-bf4e20a54a40\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_003.jpg?alt=media&token=dcef89bc-4518-4aa6-a738-c5b781c9ddee\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_004.jpg?alt=media&token=e6c46ace-42e8-4d01-bc2c-5b676b63b778\",\"id\":\"3\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_005.jpg?alt=media&token=fe0a96e6-7710-44a6-a1ec-f60aba9c4dae\",\"id\":\"4\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_006.jpg?alt=media&token=3d0277bf-6ba3-4440-8cba-1ae150e33919\",\"id\":\"5\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_007.jpg?alt=media&token=2c542834-d70c-490c-980a-84e94e772659\",\"id\":\"6\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_008.jpg?alt=media&token=37d1dfe7-5d14-4af4-83fc-ed835d8516f1\",\"id\":\"7\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_009.jpg?alt=media&token=1e466982-62a3-4567-85eb-58b75b2e8dd9\",\"id\":\"8\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_010.jpg?alt=media&token=9842b33a-350c-4687-b0a7-479ff4955dc4\",\"id\":\"9\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Frender-maqueta%2Frender-maqueta_011.jpg?alt=media&token=33d6b1b7-1014-4acd-b2f2-de96c75a9c1a\",\"id\":\"10\"}]},{\"id\":\"4\",\"isecpostcard\":true,\"shortname\":\"BEHRENS\",\"name\":\"Escritorio Nehrens\",\"author\":\"Estudio Clio\",\"year\":\"2017\",\"description\":\"El diseño esta en los detalles, por lo que nos parece importante muchas veces estar en el armado artesanal a medida del mobiliario para encargos de re-ambientación de espacios. El escritorio fue armado a medida para empotrar en una pared aprovechando al máximo el espacio disponible y sin generar interferencias a su alrededor.\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fetiq_behrens.png?alt=media&token=57ec9834-4a7d-433f-b010-7c2ebff6e0ec\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_card.jpg?alt=media&token=c68ce9c8-c9ab-49c1-aeab-98fe59766ce9\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_001.jpg?alt=media&token=a5426749-0e00-494e-9347-b78c32eb7e87\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_002.jpg?alt=media&token=3b588b33-5c33-45a3-a88f-b86d67eea33a\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_003.jpg?alt=media&token=1884e1e9-1ed8-4a29-ae54-46481c3f415e\",\"id\":\"2\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fbehrens%2Fbehrens_004.jpg?alt=media&token=a9800685-052d-4736-8617-7acb1450a678\",\"id\":\"3\"}]},{\"id\":\"5\",\"isecpostcard\":true,\"shortname\":\"KOLLONTAI\",\"name\":\"Mesa Kollontai\",\"author\":\"Estudio Clio\",\"year\":\"2020\",\"description\":\"El diseño esta en los detalles, por lo que nos parece importante muchas veces estar en el armado artesanal a medida del mobiliario para encargos de re-ambientación de espacios. La mesa Kollontai fue encargada exclusivamente por la cliente y construida a su gusto y dimensión para brindar la flexibilidad que requería su espacio.\",\"logo\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fetiq_kollontai.png?alt=media&token=59d25b7a-3bad-4a9e-90e3-24664ca75966\",\"card\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_card.jpg?alt=media&token=2103dbbc-ba8e-4337-82fa-f6c8275ef384\",\"images\":[{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_001.jpg?alt=media&token=9e4283fb-f36e-4a0a-8e59-a8ca908275bb\",\"id\":\"0\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_002.jpg?alt=media&token=cf71540b-21d9-4281-8fef-8f3712ad8af2\",\"id\":\"1\"},{\"url\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/posts%2Fkollontai%2Fkollontai_003.jpg?alt=media&token=99d55f80-691a-48a8-ab7b-f838a363fe04\",\"id\":\"2\"}]}]");

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0\",\"name\":\"Agustin Villarruel\",\"profession\":\"Designer\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fagustin.jpg?alt=media&token=59390c98-474b-4b83-a9bc-f39aa99cb04f\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@agusvill\"}},{\"id\":\"1\",\"name\":\"Mariquena Betcher\",\"profession\":\"Architect student\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fmariquena.jpg?alt=media&token=b0caefc0-d41e-4355-9c81-b9510b66a7fb\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@mariquenabetcher\"}},{\"id\":\"2\",\"name\":\"Lucas Islas\",\"profession\":\"Architect student\",\"image\":\"https://firebasestorage.googleapis.com/v0/b/estudio-clio.appspot.com/o/partners%2Fislas.jpg?alt=media&token=85631fe9-c8a2-49fa-92b5-cb114d184fcd\",\"socialmedia\":{\"url\":\"\",\"nick\":\"@lucasislas\"}}]");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
module.exports = __webpack_require__(28);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_1617f38f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_1617f38f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_1617f38f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_1617f38f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcFooter_vue_vue_type_style_index_0_id_1617f38f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony import */ var _proyects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
var _proyects_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(14, 1);
/* harmony import */ var _posts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
var _posts_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(15, 1);
/* harmony import */ var _partners_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
var _partners_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(16, 1);



const state = () => ({
  proyects: _proyects_json__WEBPACK_IMPORTED_MODULE_0__,
  posts: _posts_json__WEBPACK_IMPORTED_MODULE_1__,
  partners: _partners_json__WEBPACK_IMPORTED_MODULE_2__,
  selectAnteproyecto: false,
  selectProyecto: false,
  selectModelado: false,
  selectRenderizado: false,
  selectContenido: false,
  selectCodigo: false,
  selectHosting: false
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(5);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(4);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _4c42d64e = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 15).then(__webpack_require__.bind(null, 89)));

const _a0851570 = () => interopDefault(__webpack_require__.e(/* import() | pages/atelier */ 16).then(__webpack_require__.bind(null, 90)));

const _bca69526 = () => interopDefault(__webpack_require__.e(/* import() | pages/proyects */ 20).then(__webpack_require__.bind(null, 91)));

const _aa6479a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/start */ 21).then(__webpack_require__.bind(null, 92)));

const _b042ff6c = () => interopDefault(__webpack_require__.e(/* import() | pages/posts/_id */ 18).then(__webpack_require__.bind(null, 93)));

const _f1a53d00 = () => interopDefault(__webpack_require__.e(/* import() | pages/proyect-info/_id */ 19).then(__webpack_require__.bind(null, 94)));

const _0cd320c4 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 17).then(__webpack_require__.bind(null, 95)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
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
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7c2f13b7"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "b9e001aa"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(22);

// EXTERNAL MODULE: ./assets/css/main.scss
var main = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=461be8d8&
var defaultvue_type_template_id_461be8d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ec-header'),_vm._ssrNode(" "),_c('nuxt'),_vm._ssrNode(" "),_c('ec-footer')],2)}
var defaultvue_type_template_id_461be8d8_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=461be8d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_461be8d8_render,
  defaultvue_type_template_id_461be8d8_staticRenderFns,
  false,
  null,
  null,
  "296a3479"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {EcHeader: __webpack_require__(29).default,EcFooter: __webpack_require__(30).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(26), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  EcEtapaAnteproyecto: () => __webpack_require__.e(/* import() | components/ec-etapa-anteproyecto */ 1).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c)),
  EcEtapaCodigoFuente: () => __webpack_require__.e(/* import() | components/ec-etapa-codigo-fuente */ 2).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c)),
  EcEtapaContenidoWeb: () => __webpack_require__.e(/* import() | components/ec-etapa-contenido-web */ 3).then(__webpack_require__.bind(null, 66)).then(c => wrapFunctional(c.default || c)),
  EcEtapaHosting: () => __webpack_require__.e(/* import() | components/ec-etapa-hosting */ 4).then(__webpack_require__.bind(null, 67)).then(c => wrapFunctional(c.default || c)),
  EcEtapaModelado: () => __webpack_require__.e(/* import() | components/ec-etapa-modelado */ 5).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c)),
  EcEtapaObra: () => __webpack_require__.e(/* import() | components/ec-etapa-obra */ 6).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c)),
  EcEtapaProyecto: () => __webpack_require__.e(/* import() | components/ec-etapa-proyecto */ 7).then(__webpack_require__.bind(null, 70)).then(c => wrapFunctional(c.default || c)),
  EcEtapaRenderizado: () => __webpack_require__.e(/* import() | components/ec-etapa-renderizado */ 8).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c)),
  EcFooter: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30)).then(c => wrapFunctional(c.default || c)),
  EcHeader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)).then(c => wrapFunctional(c.default || c)),
  EcPartner: () => __webpack_require__.e(/* import() | components/ec-partner */ 9).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c)),
  EcPost: () => __webpack_require__.e(/* import() | components/ec-post */ 10).then(__webpack_require__.bind(null, 37)).then(c => wrapFunctional(c.default || c)),
  EcPostCarousel: () => __webpack_require__.e(/* import() | components/ec-post-carousel */ 11).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c)),
  EcPostImg: () => __webpack_require__.e(/* import() | components/ec-post-img */ 12).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c)),
  EcProyect: () => __webpack_require__.e(/* import() | components/ec-proyect */ 13).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c)),
  EcProyectImg: () => __webpack_require__.e(/* import() | components/ec-proyect-img */ 14).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/firebase/app.js
async function createApp(config, {
  res
}) {
  const firebaseModule = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 31, 7));
  const firebase = firebaseModule.default;
  /*****************************************************
  * Without "Auth SSR serverLogin Option" -> normal init
  *****************************************************/

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const session = firebase.apps[0];
  return {
    firebase,
    session
  };
}
// CONCATENATED MODULE: ./.nuxt/firebase/service.storage.js
/* harmony default export */ var service_storage = (async function (session) {
  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 32, 7));
  const storageService = session.storage();
  return storageService;
});
// CONCATENATED MODULE: ./.nuxt/firebase/service.functions.js
/* harmony default export */ var service_functions = (async function (session) {
  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 33, 7));
  const functionsService = session.functions();
  return functionsService;
});
// CONCATENATED MODULE: ./.nuxt/firebase/service.analytics.js
/* harmony default export */ var service_analytics = (async function (session, firebase) {
  // Can only be initiated on client side
  if (true) {
    return;
  }

  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 34, 7)); // Only initialize it if the Browser supports it

  const isSupported = await firebase.analytics.isSupported();

  if (!isSupported) {
    console.info('[@nuxtjs/firebase]: Firebase Analytics was not initialized because it is not supported on this browser.');
    return;
  }

  const analyticsService = session.analytics();
  return analyticsService;
});
// CONCATENATED MODULE: ./.nuxt/firebase/index.js




const appConfig = {
  "apiKey": "AIzaSyBEehMR_C7HavV1_JFqYp7_5JdVdJvIYD0",
  "authDomain": "estudio-clio.firebaseapp.com",
  "databaseURL": "https:\u002F\u002Festudio-clio.firebaseio.com",
  "projectId": "estudio-clio",
  "storageBucket": "estudio-clio.appspot.com",
  "messagingSenderId": "1062284388630",
  "appId": "1:1062284388630:web:2cf4a4d6965ff6f45ac837",
  "measurementId": "G-NC92HV93XR"
};
/* harmony default export */ var _nuxt_firebase = (async (ctx, inject) => {
  const {
    firebase,
    session
  } = await createApp(appConfig, ctx);
  let servicePromises = [];

  if (true) {
    servicePromises = [service_storage(session, firebase, ctx, inject), service_functions(session, firebase, ctx, inject)];
  }

  if (false) {}

  const [storage, functions, analytics] = await Promise.all(servicePromises);
  const fire = {
    storage: storage,
    functions: functions,
    analytics: analytics
  };
  inject('fireModule', firebase);
  ctx.$fireModule = firebase;
  inject('fire', fire);
  ctx.$fire = fire;
});

function forceInject(ctx, inject, key, value) {
  inject(key, value);
  const injectKey = '$' + key;
  ctx[injectKey] = value;

  if (typeof window !== "undefined" && window.$nuxt) {
    // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value;
  }
}
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(17);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
  "async": true
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./google-analytics.js (mode: 'client')

 // Source: ./firebase/index.js (mode: 'all')

 // Source: ./buefy.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function _nuxt_createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Estudio Clio",
      "htmlAttrs": {
        "lang": "es"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ficon-ec.png"
      }, {
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@5.8.55\u002Fcss\u002Fmaterialdesignicons.min.css",
        "rel": "preload",
        "as": "style",
        "onload": "this.rel='stylesheet'"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof _nuxt_firebase === 'function') {
    await _nuxt_firebase(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await _nuxt_createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcHeader.vue?vue&type=template&id=6c50ca22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header>","</header>",[_vm._ssrNode("<div class=\"ec-header columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"header__icono",attrs:{"src":__webpack_require__(9),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div class=\"header__menu\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_c('b-button',{staticStyle:{"margin-top":"3px"},attrs:{"type":"is-primary","inverted":"","outlined":"","icon-right":"menu","size":"is-medium"},on:{"click":function($event){_vm.isComponentModalActive = true}}})],1)])])],2)]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":false,"aria-modal":""},model:{value:(_vm.isComponentModalActive),callback:function ($$v) {_vm.isComponentModalActive=$$v},expression:"isComponentModalActive"}},[_c('div',{staticClass:"container is-fluid ec-modal"},[_c('div',{staticClass:"ec-menu--card ec-menu--card--proyect"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/proyects"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Proyectos")]),_vm._v(" "),_c('p',[_vm._v("Conocé nuestros proyectos")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--atelier"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/atelier"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Atelier")]),_vm._v(" "),_c('p',[_vm._v("Qué está pasando?")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--about"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/about"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Estudio")]),_vm._v(" "),_c('p',[_vm._v("Quíenes somos?")])])])],1),_vm._v(" "),_c('div',{staticClass:"ec-menu--card ec-menu--card--start"},[_c('nuxt-link',{staticStyle:{"text-decoration":"none !important","color":"inherit"},attrs:{"to":"/start"}},[_c('div',{on:{"click":function($event){_vm.isComponentModalActive = false}}},[_c('h3',[_vm._v("Mi Proyecto")]),_vm._v(" "),_c('p',[_vm._v("Cómo empezar?")])])])],1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EcHeader.vue?vue&type=template&id=6c50ca22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EcHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      isComponentModalActive: false
    };
  }

});
// CONCATENATED MODULE: ./components/EcHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EcHeadervue_type_script_lang_js_ = (EcHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EcHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EcHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4317a802"
  
)

/* harmony default export */ var EcHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EcFooter.vue?vue&type=template&id=1617f38f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container is-fluid\" data-v-1617f38f>","</div>",[_vm._ssrNode("<div class=\"has-text-centered ec--footer\" data-v-1617f38f>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(9)))+" alt class=\"ec--footer-logo\" data-v-1617f38f> <p data-v-1617f38f>\n        © Copyright 2021 | <strong data-v-1617f38f>Estudio Clio</strong> | Todos los derechos reservados | Diseño web: <a href=\"https://www.linkedin.com/in/lmhick/\" target=\"_blank\" data-v-1617f38f>Lucas Martín Hick</a>.\n      </p> "),_vm._ssrNode("<p class=\"ec--follow\" data-v-1617f38f>","</p>",[_vm._ssrNode("<a href=\"https://www.facebook.com/estudioclio/\" target=\"_blank\" style=\"text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;\" data-v-1617f38f>","</a>",[_c('b-icon',{staticClass:"ec--icon ec--icon-fb",attrs:{"icon":"facebook"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"https://www.instagram.com/estudioclio/\" target=\"_blank\" style=\"text-decoration: none !important; color: inherit; margin: 10px 5px 0 5px;\" data-v-1617f38f>","</a>",[_c('b-icon',{staticClass:"ec--icon ec--icon-ig",attrs:{"icon":"instagram"}})],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EcFooter.vue?vue&type=template&id=1617f38f&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/EcFooter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1617f38f",
  "21e54410"
  
)

/* harmony default export */ var EcFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("firebase/analytics");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map