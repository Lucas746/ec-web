import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  EcEtapaAnteproyecto: () => import('../../components/EcEtapaAnteproyecto.vue' /* webpackChunkName: "components/ec-etapa-anteproyecto" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaCodigoFuente: () => import('../../components/EcEtapaCodigoFuente.vue' /* webpackChunkName: "components/ec-etapa-codigo-fuente" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaContenidoWeb: () => import('../../components/EcEtapaContenidoWeb.vue' /* webpackChunkName: "components/ec-etapa-contenido-web" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaHosting: () => import('../../components/EcEtapaHosting.vue' /* webpackChunkName: "components/ec-etapa-hosting" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaModelado: () => import('../../components/EcEtapaModelado.vue' /* webpackChunkName: "components/ec-etapa-modelado" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaObra: () => import('../../components/EcEtapaObra.vue' /* webpackChunkName: "components/ec-etapa-obra" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaProyecto: () => import('../../components/EcEtapaProyecto.vue' /* webpackChunkName: "components/ec-etapa-proyecto" */).then(c => wrapFunctional(c.default || c)),
  EcEtapaRenderizado: () => import('../../components/EcEtapaRenderizado.vue' /* webpackChunkName: "components/ec-etapa-renderizado" */).then(c => wrapFunctional(c.default || c)),
  EcFooter: () => import('../../components/EcFooter.vue' /* webpackChunkName: "components/ec-footer" */).then(c => wrapFunctional(c.default || c)),
  EcHeader: () => import('../../components/EcHeader.vue' /* webpackChunkName: "components/ec-header" */).then(c => wrapFunctional(c.default || c)),
  EcPartner: () => import('../../components/EcPartner.vue' /* webpackChunkName: "components/ec-partner" */).then(c => wrapFunctional(c.default || c)),
  EcPost: () => import('../../components/EcPost.vue' /* webpackChunkName: "components/ec-post" */).then(c => wrapFunctional(c.default || c)),
  EcPostCarousel: () => import('../../components/EcPostCarousel.vue' /* webpackChunkName: "components/ec-post-carousel" */).then(c => wrapFunctional(c.default || c)),
  EcPostImg: () => import('../../components/EcPostImg.vue' /* webpackChunkName: "components/ec-post-img" */).then(c => wrapFunctional(c.default || c)),
  EcProyect: () => import('../../components/EcProyect.vue' /* webpackChunkName: "components/ec-proyect" */).then(c => wrapFunctional(c.default || c)),
  EcProyectImg: () => import('../../components/EcProyectImg.vue' /* webpackChunkName: "components/ec-proyect-img" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
