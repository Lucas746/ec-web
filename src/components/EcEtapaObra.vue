<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="bulldozer"
            size="is-large"
          />
          &nbsp;OBRA
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsObra" class="card-header-icon" aria-label="more options" @click="queEsObra = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsObra" class="card-header-icon" aria-label="more options" @click="queEsObra = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsObra" class="card-content">
        <div class="content">
          <ul>
            <li>La planificación del cronograma de ejecución de obra</li>
            <li>Los roles de administración de los recursos y ejecución</li>
            <li>La ejecución propiamente dicha de la misma</li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoObra" class="card-header-icon" aria-label="more options" @click="queNecesitoObra = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoObra" class="card-header-icon" aria-label="more options" @click="queNecesitoObra = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoObra" class="card-content">
        <div class="content">
          <ul>
            <li>Un Proyecto</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtapaObra',

  data () {
    return {
      queEsObra: false,
      queNecesitoObra: false
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
background-color: #2E8B57;
color: white;
margin-top: 20px;
}
</style>
