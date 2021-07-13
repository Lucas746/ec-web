<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="cube-outline"
            size="is-large"
          />
          &nbsp;MODELADO 3D
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsModelado" class="card-header-icon" aria-label="more options" @click="queEsModelado = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsModelado" class="card-header-icon" aria-label="more options" @click="queEsModelado = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsModelado" class="card-content">
        <div class="content">
          <ul>
            <li>Se construye la volumetría del proyecto</li>
            <li>Se diferencia cada material individualmente (esto no condiciona la materialidad final del elemento)</li>
            <li>Se genera una volumetría esquemática del entorno inmediato</li>
            <li>Se genera el equipamiento general para ambientar el proyecto</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoModelado" class="card-header-icon" aria-label="more options" @click="queNecesitoModelado = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoModelado" class="card-header-icon" aria-label="more options" @click="queNecesitoModelado = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoModelado" class="card-content">
        <div class="content">
          <ul>
            <li>Un Anteproyecto</li>
          </ul>
          ó
          <ul>
            <li>Un Proyecto</li>
          </ul>
        </div>
      </div>
      <nuxt-link to="/posts/6" style="text-decoration: none !important; color: inherit;">
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
  name: 'EtapaModelado',

  data () {
    return {
      queEsModelado: false,
      queNecesitoModelado: false
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
background-color: #ADD8E6;
color: white;
}
</style>
