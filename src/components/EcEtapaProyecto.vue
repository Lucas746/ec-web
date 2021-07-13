<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="folder-plus-outline"
            size="is-large"
          />
          &nbsp;PROYECTO
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsProyecto" class="card-header-icon" aria-label="more options" @click="queEsProyecto = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsProyecto" class="card-header-icon" aria-label="more options" @click="queEsProyecto = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsProyecto" class="card-content">
        <div class="content">
          <ul>
            <li>Las resoluciones estructurales y constructivas al detalle</li>
            <li>La documentación necesaria para la materialización de la obra</li>
            <li>La documentación necesaria para las presentaciones Municipales y que correspondan</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoProyecto" class="card-header-icon" aria-label="more options" @click="queNecesitoProyecto = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoProyecto" class="card-header-icon" aria-label="more options" @click="queNecesitoProyecto = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoProyecto" class="card-content">
        <div class="content">
          <ul>
            <li>Un Anteproyecto</li>
          </ul>
          ó
          <ul>
            <li>Una obra construida de la cual requiera documentación</li>
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
  name: 'EtapaAnteproyecto',

  data () {
    return {
      queEsProyecto: false,
      queNecesitoProyecto: false
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
background-color: #55e091;
color: white;
margin-top: 20px;
}
</style>
