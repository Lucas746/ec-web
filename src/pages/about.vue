<template>
  <div>
    <section class="section container">
      <div class="ec-header-section">
        <h4>Estudio</h4>
      </div>
      <div class="columns is-desktop section--about">
        <div class="column is-4">
          <div class="card card--ec-about">
            <div class="card-image">
              <figure class="image is-3by4">
                <img src="@/assets/lucas.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    Lucas Martín Hick
                  </p>
                  <p class="subtitle is-4">
                    Arquitecto
                  </p>
                  <a href="https://www.linkedin.com/in/lmhick/" target="_blank">
                    <h6>
                      <b-icon
                        icon="linkedin"
                      />
                      /lmhick
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="card card--ec-about">
            <div class="card-image">
              <figure class="image is-3by4">
                <img src="@/assets/clio.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    Clio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>
        Contacto
      </h4>
      <div class="ec--contact">
        <p>
          <b-icon
            icon="email-edit-outline"
          />
          &nbsp;&nbsp; <a href="mailto:contacto@estudioclio.com" style="text-decoration: none !important; color: inherit;">contacto@estudioclio.com</a>
        </p>
        <p>
          <b-icon
            icon="whatsapp"
          />
          &nbsp;&nbsp; <a href="https://wa.me/542944313745" style="text-decoration: none !important; color: inherit;">+54 294 431 3745</a>
        </p>
      </div>
      <h5>
        Seguí a Estudio Clio
      </h5>
      <div class="ec--follow">
        <p>
          <a href="https://www.facebook.com/estudioclio/" target="_blank" style="text-decoration: none !important; color: inherit;">
            <b-icon
              icon="facebook"
              size="is-large"
              class="ec--icon ec--icon-fb"
            />
          </a>
          <a href="https://www.instagram.com/estudioclio/" target="_blank" style="text-decoration: none !important; color: inherit;">
            <b-icon
              icon="instagram"
              size="is-large"
              class="ec--icon ec--icon-ig"
            />
          </a>
        </p>
      </div>
    </section>
    <section>
      <div class="section ec--colaborators">
        <div class="container">
          <p class="partners-tittle">
            Colaboradores
          </p>
          <div class="columns is-desktop is-multiline section--about">
            <li
              v-for="r in partners"
              :key="r.id"
            >
              <ul>
                <div class="column is-4">
                  <ec-partner :partner="r" />
                </div>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',

  computed: {
    proyects () {
      return this.$store.state.proyects
    },
    partners () {
      return this.$store.state.partners
    }
  }
}
</script>

<style scoped>
.ec--contact {
  position: relative;
  font-size: 2.3rem;
  margin: 0 2vw 0 2vw;
  color: gray;
  text-shadow: 1px 1px 2px black;
}
section h5 {
  position: relative;
  font-family: 'Staatliches';
  font-size: 6rem;
  margin: 7vh 0 0 0;
  color: transparent;
  -webkit-text-stroke: .0125em #fff;
}
section h6 {
  position: relative;
  font-size: 1.4rem;
  margin: 0;
  color: gray;
}
.section--about {
  margin-top: 5vh;
  align-content: space-between;
}
.card--ec-about {
  margin: 0 10% 10% 10%
}
.ec--colaborators {
  margin: 0;
  padding-top: 1vh;
  background-color: #F5F5F5;
  text-shadow: 1px 1px 2px black;
  }
.ec--icon-fb:hover {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  background: #3b5998;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  cursor: pointer;
}
.ec--icon-ig:hover {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  cursor: pointer;
  }
.ec--icon {
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.partners-tittle{
  position: relative;
  font-family: 'Staatliches';
  font-size: 6rem;
  margin: 7vh 0 0 0;
  color: #F5F5F5;
  -webkit-text-stroke: .0125em #101010;
  text-shadow: none;
}
.card--ec-about {
  text-shadow: none;
}
</style>
