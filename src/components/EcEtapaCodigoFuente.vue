<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa">
        <h4>
          <b-icon
            icon="code-braces"
            size="is-large"
          />
          &nbsp;CÓDIGO
        </h4>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué se define en esta instancia?
        </p>
        <button v-show="!queEsCodigoFuente" class="card-header-icon" aria-label="more options" @click="queEsCodigoFuente = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queEsCodigoFuente" class="card-header-icon" aria-label="more options" @click="queEsCodigoFuente = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queEsCodigoFuente" class="card-content">
        <div class="content">
          <ul>
            <li>La construcción del código fuente que permite que el sitio web se vea en cualquier navegador</li>
            <li>La integración de las paginas que componen al sitio</li>
            <li>La interacción del sitio para con los usuarios <i>(Este punto será más o menos profundizado respecto a la necesidad de cada caso)</i></li>
            <li>La integración de nuestro sitio "visible" con un sistema que permita administrarlo <i>(Por ej: cargar imágenes, información, etc..)</i></li>
          </ul>
        </div>
      </div>
      <div class="card-header">
        <p class="card-header-title">
          Qué necesito?
        </p>
        <button v-show="!queNecesitoCodigoFuente" class="card-header-icon" aria-label="more options" @click="queNecesitoCodigoFuente = true">
          <span class="icon">
            <b-icon
              icon="arrow-down-circle"
            />
          </span>
        </button>
        <button v-show="queNecesitoCodigoFuente" class="card-header-icon" aria-label="more options" @click="queNecesitoCodigoFuente = false">
          <span class="icon">
            <b-icon
              icon="arrow-up-circle"
            />
          </span>
        </button>
      </div>
      <div v-show="queNecesitoCodigoFuente" class="card-content">
        <div class="content">
          <ul>
            <li>Tener definido y ordenado todo el contenido que quiero visualizar en mi sitio <i>(si también necesitas generar el contenido para el sitio podes seleccionar ambos pasos)</i></li>
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
  name: 'EtapaCodigoFuente',

  data () {
    return {
      queEsCodigoFuente: false,
      queNecesitoCodigoFuente: false
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
background-color: #a54949;
color: white;
margin-top: 20px;
}
</style>
