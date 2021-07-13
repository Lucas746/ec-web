<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="web"
            size="is-large"
          />
          &nbsp;HOSTING
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsHosting" class="card-header-icon" aria-label="more options" @click="queEsHosting = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsHosting" class="card-header-icon" aria-label="more options" @click="queEsHosting = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsHosting" class="card-content">
        <div class="content">
          <ul>
            <li>La obtenciòn del dominio de nuestro sitio web <i>(Ej: estudioclio.com)</i></li>
            <li>El alojamiento de mi sitio web en servidores de Google, al costo directo por uso</li>
            <li>El seguimiento de los datos de Google Analytics y Google Ads para campañas de Marketing</li>
            <li>El mantenimiento de las actualizaciones de tu sitio</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoHosting" class="card-header-icon" aria-label="more options" @click="queNecesitoHosting = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoHosting" class="card-header-icon" aria-label="more options" @click="queNecesitoHosting = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoHosting" class="card-content">
        <div class="content">
          <ul>
            <li>Un sitio web construido y listo para deploy <i>(si necesitas un sitio web completo podes seleccionar todos los pasos)</i></li>
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
  name: 'EtapaHosting',

  data () {
    return {
      queEsHosting: false,
      queNecesitoHosting: false
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
background-color: #660e0e;
color: white;
margin-top: 20px;
}
</style>
