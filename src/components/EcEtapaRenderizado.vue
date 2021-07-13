<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="kettle-outline"
            size="is-large"
          />
          &nbsp;RENDERIZADO
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsRenderizado" class="card-header-icon" aria-label="more options" @click="queEsRenderizado = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsRenderizado" class="card-header-icon" aria-label="more options" @click="queEsRenderizado = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsRenderizado" class="card-content">
        <div class="content">
          Para el acabado final de las imagenes tendremos 3 etapas: <br>
          1. Configuración:
          <ul>
            <li>Cantidad de imágenes y posicionamiento de los observadores</li>
            <li>Momentos del día e iluminación de cada imágen</li>
            <li>Detalles de ambientación precisos de cada imagen</li>
            <li>Definición y configuración específica de cada material</li>
          </ul>
          2. Renderizado:
          <ul>
            <li>Consiste en el calculo que hace el programa de acuerdo a la configuración de luces y materiales realizada para generar los reflejos necesarios para construir la imagen</li>
          </ul>
          3. Post-Proceso:
          <ul>
            <li>Ambientación del entorno general para imagenes generales de larga distancia</li>
            <li>Correcciónes de color</li>
            <li>Desenfoques de movimiento y distancia</li>
            <li>Corrección y agregado de luces para imágenes nocturnas</li>
            <li>Corrección y agregado de reflejos</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoRenderizado" class="card-header-icon" aria-label="more options" @click="queNecesitoRenderizado = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoRenderizado" class="card-header-icon" aria-label="more options" @click="queNecesitoRenderizado = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoRenderizado" class="card-content">
        <div class="content">
          Para realizar el trabajo de renderizado necesito tener previamente:
          <ul>
            <li>Una volumetrìa construida</li>
            <li>El entorno inmediato construido</li>
            <li>La resolución material de cada elemento que compone la volumetría</li>
          </ul>
        </div>
      </div>
      <nuxt-link to="/posts/4" style="text-decoration: none !important; color: inherit;">
        <div class="card-header">
          <p class="card-header-title">
            Quiero aprender sobre este proceso
          </p>
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <b-icon
                icon="school"
              />
            </span>
          </button>
        </div>
      </nuxt-link>
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
  name: 'EtapaRenderizado',

  data () {
    return {
      queEsRenderizado: false,
      queNecesitoRenderizado: false
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
background-color: #4682B4;
color: white;
margin-top: 20px;
}
</style>
