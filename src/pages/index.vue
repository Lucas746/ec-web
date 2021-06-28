<template>
  <main>
    <section class="ec-main">
      <div class="section__img section__img--renders">
        <div class="section__ref">
          <p class="section__ref--desc">
            Visualizacion Arquitectónica
          </p>
          <h1>
            RENDERS
          </h1>
          <div class="div-botton">
            <nuxt-link to="/proyects" style="text-decoration: none !important; color: inherit;" class="section__ref--button">
              <p>Conocé nuestros proyectos</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section__desc">
        <p>
          <b-icon
            icon="tooltip-image-outline"
            size="is-large"
          />
        </p>
        <p class="section__desc--tittle">
          Necesitás mostrar tu proyecto?
        </p>
        <p class="section__desc--p">
          Te ayudamos con el <i>modelo 3D</i> para que puedas acompañar tu entrega con <i>imágenes fotorrealistas</i>
        </p>
        <div class="section__desc--button">
          <router-link to="/start" style="text-decoration: none !important; color: inherit;">
            <b-button class="is-medium">
              Cómo empezar?
            </b-button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="ec-main">
      <div class="section__img section__img--proyecto">
        <div class="section__ref">
          <p class="section__ref--desc">
            Diseño Arquitectónico
          </p>
          <h2>
            PROYECTO
          </h2>
          <div class="div-botton">
            <nuxt-link to="/proyects" style="text-decoration: none !important; color: inherit;" class="section__ref--button">
              <p>Conocé nuestros proyectos</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section__desc">
        <p>
          <b-icon
            icon="lightbulb-on-outline"
            size="is-large"
          />
        </p>
        <p class="section__desc--tittle">
          Necesitás un proyecto?
        </p>
        <p class="section__desc--p">
          Te acompañamos en el proceso de diseño para darle forma y <i>materializar tus ideas</i>
        </p>
        <div class="section__desc--button">
          <router-link to="/start" style="text-decoration: none !important; color: inherit;">
            <b-button class="is-medium">
              Cómo empezar?
            </b-button>
          </router-link>
        </div>
      </div>
    </section>
    <section>
      <div class="section__desc--atelier">
        <p>
          <b-icon
            icon="puzzle-edit"
            size="is-large"
          />
        </p>
        <p class="section__desc--tittle">
          Atelier
        </p>
        <p class="section__desc--p">
          Un <i>espacio de taller</i> donde compartimos <i>métodos, ideas y ejercicios</i> que surgen en la cotidianeidad del estudio
        </p>
        <div class="section__desc--button">
          <router-link to="/atelier" style="text-decoration: none !important; color: inherit;">
            <b-button class="is-medium">
              Qué está pasando?
            </b-button>
          </router-link>
        </div>
        <div class="container ec--carousel-atelier">
          <ec-post-carousel />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import EcPostCarousel from '~/components/EcPostCarousel.vue'
export default {
  name: 'HomePage',

  components: {
    EcPostCarousel
  }
}
</script>

<style>
    html {
        width: 100vw;
        min-width: 320px;
        max-width: 100vw;
    }
    .menu--botton-ctext {
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .menu--botton {
        display: flex;
        align-items: center;
    }
    .ec-main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: top;
        width: 100vw;
        text-align: right;
    }
    .section__img {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: row-reverse;
        width: 100vw;
        height: 96vh;
        margin: 0 auto;
        margin-top: 4vh;
    }
    .section__img--renders {
        background-image: url("@/assets/landing-1.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .section__img--proyecto {
        background-image: url("@/assets/landing-2.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .section__ref {
        position: absolute;
        z-index: 2;
        width: 60vw;
        margin-right: 5vw;
        margin-top: 55vh;
        color: #FFF;
        text-shadow: 1px 1px 2px black;
    }
    .section__ref--desc {
        font-size: 2rem;
        margin: 0;
    }
    .div-botton {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
    }
    .section__ref--button {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0.75vh;
        border: 1px solid #FFF;
        border-radius: 3px;
        text-decoration: none;
        color: #FFF;
        font-size: 1.5vh;
    }
    .section__ref--button:hover {
        filter: brightness(1.2);
        border: 2px solid #fff;
    }
    .section__desc {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10vh 0 10vh 0;
        color: white;
        text-shadow: 1px 1px 2px black;
        text-align: center;
    }
    .section__desc--atelier {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding-top: 10vh;
        background-color: #F5F5F5;
        color: #101010;
        text-align: center;
    }
    .section__desc--icon {
        margin: 4vh 0 1vh 0;
        font-size: 6rem;
    }
    .section__desc--tittle {
        position: relative;
        margin: 0 10vw 4vh 10vw;
        font-family: 'Staatliches';
        font-size: 6rem;
    }
    .section__desc--p {
        margin: 1vh 15vw 6vh 15vw;
        font-size: 2rem;
    }
    .section__desc--button {
        margin-bottom: 6vh;
        font-size: 1.5rem;
    }
    .ec--carousel-atelier {
      margin-bottom: 6vh;
    }
</style>
