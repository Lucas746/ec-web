<template>
  <div>
    <div class="container is-fluid">
      <section class="section">
        <div class="ec-header-section">
          <nuxt-link to="/atelier" class="ec-header-section-arrow">
            <b-button
              type="is-primary"
              inverted
              outlined
              icon-right="chevron-left"
              size="is-large"
              class="ec--icon-view"
              style="margin-top: 2vh;"
            />
            <h5>&nbsp;/ Atelier /</h5>
          </nuxt-link>
          <h4>&nbsp; {{ post.shortname }}</h4>
        </div>
      </section>
      <section v-if="!post.isecpostcard">
        <div class="section__img--post" :style="{ backgroundImage: 'url(' + post.images[0].url + ')' }" @click="switchGallery(true)" />
      </section>
      <section v-show="!post.isecpostcard" class="section ec--proy-desc">
        <div class="columns">
          <div class="column is-4">
            <div class="ec--container--proyect-desc">
              <h3>{{ post.name }}</h3>
              <p><i>Autor: {{ post.author }}</i></p>
              <p>Año: {{ post.year }}</p>
              <br>
              <p>{{ post.description }}</p>
            </div>
          </div>
          <div v-if="post.logo" class="column is-4 ec--proy-desc--card--logo">
            <img :src="post.logo" alt="Logo del post" class="ec--proyect-logo">
          </div>
        </div>
      </section>
      <section v-show="!post.isecpostcard" class="section">
        <div v-show="!post.isecpostinfo" class="columns is-desktop">
          <div class="column" @click="switchGallery(true)">
            <li
              v-for="j in post.images"
              :key="j.id"
            >
              <ul>
                <ec-post-img :image="j" />
              </ul>
            </li>
          </div>
        </div>
      </section>
      <section v-show="!post.isecpostinfo" class="section container" style="width: 80vw; max-width: 600px">
        <b-carousel
          v-model="imagevalue"
          :autoplay="true"
          with-carousel-list
          :indicator="false"
          :overlay="gallery"
        >
          <b-carousel-item v-for="(j) in images" :key="j.id">
            <figure class="image">
              <b-image
                :src="j.url"
                alt="Imagen del post"
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
              <h5>{{ post.shortname }}</h5>
              <p>{{ post.name }}</p>
              <p><i>Autor: {{ post.author }}</i></p>
            </div>
          </template>
        </b-carousel>
      </section>
      <section v-show="post.isecpostinfo" class="section">
        <div class="columns is-desktop">
          <div class="column">
            <li
              v-for="t in post.temas"
              :key="t.temas"
            >
              <ul>
                <ec-tema :post="t" />
              </ul>
            </li>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import EcPostImg from '~/components/EcPostImg.vue'

export default {

  name: 'PostInfo',

  components: { EcPostImg },

  data () {
    return {
      gallery: false,
      imagevalue: 0,
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
    post () {
      return this.$store.state.posts[`${this.$route.params.id}`]
    },
    images () {
      return this.$store.state.posts[`${this.$route.params.id}`].images
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
.section__img--post {
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
.section__img--post:hover {
  cursor: pointer;
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
