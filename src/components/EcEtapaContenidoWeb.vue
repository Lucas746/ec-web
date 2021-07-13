<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="puzzle-outline"
            size="is-large"
          />
          &nbsp;CONTENIDO
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsContenidoWeb" class="card-header-icon" aria-label="more options" @click="queEsContenidoWeb = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsContenidoWeb" class="card-header-icon" aria-label="more options" @click="queEsContenidoWeb = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsContenidoWeb" class="card-content">
        <div class="content">
          <ul>
            <li>La finalidad del sitio web</li>
            <li>La cantidad y ubicación de cada una de las paginas que compongan al sitio</li>
            <li>La definición y optimización de las imagenes</li>
            <li>El diseño de estilos, colores fuentes y todo lo que respecte a el objetivo de visualización</li>
            <li>La definición del método que se optará para construir el codigo fuente del sitio</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoContenidoWeb" class="card-header-icon" aria-label="more options" @click="queNecesitoContenidoWeb = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoContenidoWeb" class="card-header-icon" aria-label="more options" @click="queNecesitoContenidoWeb = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoContenidoWeb" class="card-content">
        <div class="content">
          <ul>
            <li>Tener definido que función quiero que cumpla mi sitio <i>(Landing Page, Web site, App Web)</i></li>
            <li>Tener las imagenes en caso que sea la finalidad mostrar un proyecto propio <i>(si también necesitas renders para mostrar tus proyectos podes seleccionar ambos pasos)</i>.</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Incluir para comenzar con Estudio Clio
        </p>
        <div class="card-header-icon ec--etapa-card-items" aria-label="more options">
          <b-field>
            <b-switch
              :value="false"
              type="is-success"
            />
          </b-field>
        </div>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <b-icon
              icon="rocket"
            />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtapaContenidoWeb',

  data () {
    return {
      queEsContenidoWeb: false,
      queNecesitoContenidoWeb: false
    }
  }
}
</script>

<style scoped>
.ec--card-image-etapa{
height: 100px;
display: flex;
justify-content: center;
justify-items: center;
text-align: center;
align-items: center;
background-color: #F08080;
color: white;
}
</style>
