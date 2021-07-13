import proyects from './proyects.json'
import posts from './posts.json'
import partners from './partners.json'

export const state = () => ({
  proyects,
  posts,
  partners,
  selectAnteproyecto: false,
  selectProyecto: false,
  selectModelado: false,
  selectRenderizado: false,
  selectContenido: false,
  selectCodigo: false,
  selectHosting: false
})
