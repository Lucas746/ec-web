<template>
  <div>
    <div class="container is-fluid">
      <section class="section">
        <div class="ec-header-section">
          <nuxt-link to="/proyects" class="ec-header-section-arrow">
            <b-button
              type="is-primary"
              inverted
              outlined
              icon-right="chevron-left"
              size="is-large"
              class="ec--icon-view"
              style="margin-top: 2vh;"
            />
            <h5>&nbsp;/ Proyectos /</h5>
          </nuxt-link>
          <h4>&nbsp; {{ proyect.shortname }}</h4>
        </div>
      </section>
      <section>
        <div class="section__img--proyect" :style="{ backgroundImage: 'url(' + proyect.images[0].url + ')' }" />
      </section>
      <section class="section ec--proy-desc">
        <div class="columns">
          <div class="column is-4">
            <div class="ec--container--proyect-desc">
              <h3>{{ proyect.name }}</h3>
              <p><i>Autor: {{ proyect.author }}</i></p>
              <p><i>Renders: Estudio Clio</i></p>
              <p>Año: {{ proyect.year }}</p>
              <br>
              <p>{{ proyect.description }}</p>
            </div>
          </div>
          <div class="column is-4 ec--proy-desc--card">
            <iframe
              :src="proyect.map"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </div>
          <div class="column is-4 ec--proy-desc--card--logo">
            <img :src="proyect.logo" alt="Logo del proyecto" class="ec--proyect-logo">
          </div>
        </div>
      </section>
      <section>
        <div id="images" class="ec--select--proy-view-container">
          <div class="buttons" style="justify-content: center;">
            <b-dropdown
              :triggers="['hover']"
            >
              <template #trigger>
                <a href="#images">
                  <b-button
                    type="is-primary"
                    inverted
                    outlined
                    icon-right="image-outline"
                    size="is-large"
                    class="ec--icon-view"
                    @click="isImagenActive = true"
                  />
                </a>
              </template>
              <b-dropdown-item>
                <a href="#images">
                  <p style="font-size: 1.2rem">
                    Imagenes
                  </p>
                </a>
              </b-dropdown-item>
            </b-dropdown>
            <b-dropdown
              v-if="proyect.planes"
              :triggers="['hover']"
            >
              <template #trigger>
                <a href="#plans">
                  <b-button
                    type="is-primary"
                    inverted
                    outlined
                    icon-right="floor-plan"
                    size="is-large"
                    class="ec--icon-view"
                    @click="isImagenActive = false"
                  />
                </a>
              </template>
              <b-dropdown-item>
                <a href="#planes">
                  <p style="font-size: 1.2rem">
                    Planos
                  </p>
                </a>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </section>
      <div v-show="isImagenActive">
        <section class="section ec--section--proyects-img">
          <div class="columns is-desktop">
            <div class="column" @click="switchGallery(true)">
              <li
                v-for="i in proyect.images"
                :key="i.id"
              >
                <ul>
                  <ec-proyect-img :image="i" />
                </ul>
              </li>
            </div>
          </div>
        </section>
        <section class="section container" style="width: 80vw; max-width: 600px">
          <b-carousel
            v-model="imagevalue"
            :autoplay="true"
            with-carousel-list
            :indicator="false"
            :overlay="gallery"
          >
            <b-carousel-item v-for="(i) in images" :key="i.id">
              <figure class="image">
                <b-image
                  :src="i.url"
                  alt="Imagen del proyecto"
                />
              </figure>
            </b-carousel-item>
            <span v-if="gallery" class="modal-close is-large" @click="switchGallery(false)" />
            <template #list="props">
              <b-carousel-list
                v-model="imagevalue"
                :data="images"
                v-bind="al"
                as-indicator
                @switch="props.switch($event, false)"
              />
            </template>
            <template #overlay>
              <div class="has-text-centered has-text-white">
                <h5>{{ proyect.shortname }}</h5>
                <p>{{ proyect.name }}</p>
                <p><i>Autor: {{ proyect.author }}</i></p>
              </div>
            </template>
          </b-carousel>
        </section>
      </div>
      <div v-show="!isImagenActive">
        <section class="section ec--section--proyects-img">
          <div class="columns is-desktop">
            <div class="column" @click="switchGallery(true)">
              <li
                v-for="a in proyect.planes"
                :key="a.id"
              >
                <ul>
                  <ec-proyect-img :image="a" />
                </ul>
              </li>
            </div>
          </div>
        </section>
        <section class="section container" style="width: 80vw; max-width: 600px">
          <b-carousel
            v-model="imagevalue"
            :autoplay="true"
            with-carousel-list
            :indicator="false"
            :overlay="gallery"
          >
            <b-carousel-item v-for="(i) in planes" :key="i.id">
              <figure class="image">
                <b-image
                  :src="i.url"
                  alt="Plano del proyecto"
                />
              </figure>
            </b-carousel-item>
            <span v-if="gallery" class="modal-close is-large" @click="switchGallery(false)" />
            <template #list="props">
              <b-carousel-list
                v-model="imagevalue"
                :data="images"
                v-bind="al"
                as-indicator
                @switch="props.switch($event, false)"
              />
            </template>
            <template #overlay>
              <div class="has-text-centered has-text-white">
                <h5>{{ proyect.shortname }}</h5>
                <p>{{ proyect.name }}</p>
                <p><i>Autor: {{ proyect.author }}</i></p>
              </div>
            </template>
          </b-carousel>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import EcProyectImg from '~/components/EcProyectImg.vue'
export default {

  name: 'ProyectInfo',

  components: { EcProyectImg },

  data () {
    return {
      gallery: false,
      imagevalue: 0,
      isImagenActive: true,
      isPlaneActive: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6
          }
        }
      }
    }
  },

  computed: {
    proyect () {
      return this.$store.state.proyects[`${this.$route.params.id}`]
    },
    images () {
      return this.$store.state.proyects[`${this.$route.params.id}`].images
    },
    planes () {
      return this.$store.state.proyects[`${this.$route.params.id}`].planes
    }
  },

  methods: {
    switchGallery (value) {
      this.gallery = value
      if (value) {
        document.documentElement.classList.add('is-clipped')
      } else {
        document.documentElement.classList.remove('is-clipped')
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}
.section__img--proyect {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 180px;
  margin: 0 0 0 -32px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ec--proy-desc {
  margin-top: 7vh;
  font-size: 1.8rem;
  color: #F5F5F5;
}
.ec--proy-desc h3{
  font-size: 3rem;
}
.ec--proy-desc--card--logo{
  text-align: center;
}
.ec--proyect-logo{
  position: relative;
  justify-items: center;
  margin-top: -3%;
  width: 60%;
  max-width: 280px;
}
.section__ref--button {
  position: relative;
  margin-right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3vh;
  margin-left: 30vw;
  padding: 0.75vh;
  max-width: 150px;
  border: 1px solid #FFF;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  color: #FFF;
  font-size: 1.5vh;
}
.section__ref--button:hover {
  background-color: white;
  color: #101010;
}
.section__ref {
  position: relative;
  z-index: 2;
  width: 60vw;
  margin-right: 5vw;
  margin-top: 65vh;
  color: #FFF;
  text-shadow: 1px 1px 2px black;
}
.ec--icon-view {
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 5px;
}
.ec--select--proy-view-container {
  padding-top: 0;
}
</style>
