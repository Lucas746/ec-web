<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="pencil-plus-outline"
            size="is-large"
          />
          &nbsp;ANTEPROYECTO
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsAnteproyecto" class="card-header-icon" aria-label="more options" @click="queEsAnteproyecto = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsAnteproyecto" class="card-header-icon" aria-label="more options" @click="queEsAnteproyecto = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsAnteproyecto" class="card-content">
        <div class="content">
          <ul>
            <li>El posicionamiento de nuestro proyecto respecto al sitio</li>
            <li>El programa necesario y su disposición espacial</li>
            <li>La resolución morfológica respecto a las variables mencionadas</li>
            <li>Las resoluciones estructurales y constructivas generales</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoAnteproyecto" class="card-header-icon" aria-label="more options" @click="queNecesitoAnteproyecto = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoAnteproyecto" class="card-header-icon" aria-label="more options" @click="queNecesitoAnteproyecto = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoAnteproyecto" class="card-content">
        <div class="content">
          Para construir un anteproyecto no se necesita más que las ganas de hacerlo, de todas maneras, desde Estudio Clio creemos que para que se trate de un Anteproyecto Arquitectónico deben estar definidos:
          <ul>
            <li>Un sitio</li>
            <li>Un Programa</li>
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
              v-model="select"
              type="is-success"
            />
          </b-field>
        </div>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <b-icon
              v-show="!select"
              icon="rocket"
            />
            <b-icon
              v-show="select"
              icon="rocket"
              style="color: #6ce09d"
            />
          </span>
        </button>
        <button v-show="queNecesitoAnteproyecto" class="card-header-icon" aria-label="more options" @click="queNecesitoAnteproyecto = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
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
      queEsAnteproyecto: false,
      queNecesitoAnteproyecto: false,
      select: this.$store.state.selectAnteproyecto
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
  background-color: #98fbc1;
  color: white;
}
.ec--etapa-card-items {
  align-content: flex-end;
  justify-content: flex-end;
  text-align: end;
  display: flex;
}
</style>
