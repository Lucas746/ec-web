<template>
  <div class="section container">
    <section>
      <div class="ec-header-section">
        <h4>Cómo empezar?</h4>
      </div>
      <div class="ec--start-info" style="margin: 8vh;">
        <p>
          <b-icon
            icon="lightbulb-on"
            size="is-large"
          />
          &nbsp;&nbsp; Nos gusta charlar sobre proyectos e intentar aportar algo.
        </p>
        <br>
        <p>
          <b-icon
            icon="hand-heart"
            size="is-large"
          />
          &nbsp;&nbsp; Tu consulta no tiene costo.
        </p>
        <br>
        <p>
          <b-icon
            icon="forum"
            size="is-large"
          />
          &nbsp;&nbsp; Ponete en contacto con nosotros y contanos qué estás pensando.
        </p>
      </div>
      <div class="columns is-desktop ec-quest--item-container">
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
  </div>
</template>

<script>
export default {
  name: 'Start',

  data () {
    return {
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
