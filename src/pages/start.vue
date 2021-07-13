<template>
  <div class="section container">
    <section>
      <div class="ec-header-section">
        <h4>Cómo empezar?</h4>
      </div>
      <div class="columns is-desktop ec-quest--item-container">
        <div class="column is-4 ec--quest--item">
          <h5 style="font-size: 40px">
            Necesitás un Proyecto?
          </h5>
          <ec-etapa-anteproyecto />
          <ec-etapa-proyecto />
          <ec-etapa-obra />
        </div>
        <div class="column is-4 ec--quest--item">
          <h5 style="font-size: 40px">
            Necesitas Renders?
          </h5>
          <ec-etapa-modelado />
          <ec-etapa-renderizado />
        </div>
        <div class="column is-4 ec--quest--item">
          <h5 style="font-size: 40px">
            Necesitas un sitio web?
          </h5>
          <ec-etapa-contenido-web />
          <ec-etapa-codigo-fuente />
          <ec-etapa-hosting />
        </div>
      </div>
      <div class="columns is-desktop ec-quest--item-container">
        <div class="column is-4 ec--quest--item ec--quest--item-clio" @click="state1=false, state3=true">
          <a @click="isStartModal = true">
            <h6 style="margin: 10px;">
              <b-icon
                icon="rocket-launch"
                size="is-large"
              />
              &nbsp;&nbsp; Comenzar con Estudio Clio
            </h6>
          </a>
        </div>
        <div class="column is-4 ec--quest--item ec--quest--item-wsp" @click="state1=false, state3=true">
          <a href="https://wa.me/542944313745" target="_blank">
            <h6 style="margin: 10px;">
              <b-icon
                icon="whatsapp"
                size="is-large"
              />
              &nbsp;&nbsp; Conectarme por WhatsApp
            </h6>
          </a>
        </div>
        <div class="column is-4 ec--quest--item ec--quest--item-email" @click="state1=false, state4=true">
          <a href="mailto:contacto@estudioclio.com" target="_blank">
            <h6 style="margin: 10px;">
              <b-icon
                icon="email-edit-outline"
                size="is-large"
              />
              &nbsp;&nbsp; Conectarme por eMail
            </h6>
          </a>
        </div>
      </div>
    </section>
    <b-modal
      v-model="isStartModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-modal
    >
      <div class="container is-fluid ec-modal">
        <div class="columns is-desktop ec-quest--item-container">
          <div class="column is-4 ">
            <p style="font-size: 2.7rem; color: white;">
              Disculpá las molestias, el servicio está en mantenimiento, podés comunicarte por:
            </p>
          </div>
          <div class="column is-4 ec--quest--item ec--quest--item-wsp" @click="state1=false, state3=true">
            <a href="https://wa.me/542944313745" target="_blank">
              <h6 style="margin: 10px;">
                <b-icon
                  icon="whatsapp"
                  size="is-large"
                />
                &nbsp;&nbsp; Conectarme por WhatsApp
              </h6>
            </a>
          </div>
          <div class="column is-4 ec--quest--item ec--quest--item-email" @click="state1=false, state4=true">
            <a href="mailto:contacto@estudioclio.com" target="_blank">
              <h6 style="margin: 10px;">
                <b-icon
                  icon="email-edit-outline"
                  size="is-large"
                />
                &nbsp;&nbsp; Conectarme por eMail
              </h6>
            </a>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import EcEtapaAnteproyecto from '../components/EcEtapaAnteproyecto.vue'
import EcEtapaCodigoFuente from '../components/EcEtapaCodigoFuente.vue'
import EcEtapaContenidoWeb from '../components/EcEtapaContenidoWeb.vue'
import EcEtapaHosting from '../components/EcEtapaHosting.vue'
import EcEtapaModelado from '../components/EcEtapaModelado.vue'
import EcEtapaObra from '../components/EcEtapaObra.vue'
import EcEtapaProyecto from '../components/EcEtapaProyecto.vue'
import EcEtapaRenderizado from '../components/EcEtapaRenderizado.vue'
export default {
  name: 'Start',

  components: { EcEtapaAnteproyecto, EcEtapaProyecto, EcEtapaObra, EcEtapaModelado, EcEtapaRenderizado, EcEtapaContenidoWeb, EcEtapaCodigoFuente, EcEtapaHosting },

  data () {
    return {
      queEsAnteproyecto: false,
      queNecesitoAnteproyecto: false,
      isStartModal: false,
      anteproyectoSelected: this.$store.state.selectAnteproyecto
    }
  }
}
</script>

<style scoped>
.ec--start-nav {
  justify-content: flex-end !important;
  justify-items: end !important;
  text-align: end !important;
  margin: 2vh 10vw 4vh 2vh;
}
.ec--icon-view {
  margin: 2.5vh;
}
.ec-quest--item-container{
  margin-top: 6vh;
}
.ec--quest--item {
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 1vh;
  padding: 2vw;
  text-decoration: none;
  max-width: 89vw;
  min-height: 140px;
}
.ec--quest--item-clio:hover {
  cursor: pointer;
  background-image: url("@/assets/menu-4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ec--quest--item-vill:hover {
  cursor: pointer;
  background-image: url("@/assets/img-contact-canal/vill.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ec--quest--item-wsp:hover {
  cursor: pointer;
  background-image: url("@/assets/img-contact-canal/whatsapp.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ec--quest--item-email:hover {
  cursor: pointer;
  background-image: url("@/assets/img-contact-canal/mail.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.ec--start-form {
  display: block;
  margin: 10vh;
  justify-content: center;
  justify-items: center;
  text-align: center;
}
.ec--start-form-items{
  display: block;
  max-width: 250px;
  margin-top: 7vh;
}
.ec--start-form-item-container {
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
}
.ec--button-comenzar-con-clio {
  display: flex;
  margin-top: 30px;
  align-content: flex-end !important;
  align-items: flex-end !important;
  text-align: end !important;
}
@media screen and (min-width: 601px) {
  h6 {
    font-family: 'Staatliches';
    font-size: 4rem;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  .ec--start-info {
    margin: 1vh;
    font-size: 3rem;
}
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h6 {
    font-family: 'Staatliches';
    font-size: 3rem;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  .ec--start-info {
    margin: 1vw;
    font-size: 2rem;
  }
  .ec--quest--item-clio {
    cursor: pointer;
    background-image: url("@/assets/menu-4-small.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec--quest--item-vill {
    cursor: pointer;
    background-image: url("@/assets/img-contact-canal/vill.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec--quest--item-wsp {
    cursor: pointer;
    background-image: url("@/assets/img-contact-canal/whatsapp.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec--quest--item-email {
    cursor: pointer;
    background-image: url("@/assets/img-contact-canal/mail.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

</style>
