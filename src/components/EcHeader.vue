<template>
  <div>
    <header>
      <div class="ec-header columns is-mobile">
        <div class="column">
          <nuxt-link to="/">
            <!-- <img src="../../assets/logo-ec.png" alt="" class="header__logo"> -->
            <img src="@/assets/icon-ec.png" alt="" class="header__icono">
          </nuxt-link>
        </div>
        <div class="column">
          <div class="header__menu">
            <div class="buttons">
              <b-button
                type="is-primary"
                inverted
                outlined
                icon-right="menu"
                size="is-medium"
                style="margin-top: 3px;"
                @click="isComponentModalActive = true"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-modal
    >
      <div class="container is-fluid ec-modal">
        <div class="ec-menu--card ec-menu--card--proyect">
          <nuxt-link to="/proyects" style="text-decoration: none !important; color: inherit;">
            <div @click="isComponentModalActive = false">
              <h3>Proyectos</h3>
              <p>Conocé nuestros proyectos</p>
            </div>
          </nuxt-link>
        </div>
        <div class="ec-menu--card ec-menu--card--atelier">
          <nuxt-link to="/atelier" style="text-decoration: none !important; color: inherit;">
            <div @click="isComponentModalActive = false">
              <h3>Atelier</h3>
              <p>Qué está pasando?</p>
            </div>
          </nuxt-link>
        </div>
        <div class="ec-menu--card ec-menu--card--about">
          <nuxt-link to="/about" style="text-decoration: none !important; color: inherit;">
            <div @click="isComponentModalActive = false">
              <h3>Estudio</h3>
              <p>Quíenes somos?</p>
            </div>
          </nuxt-link>
        </div>
        <div class="ec-menu--card ec-menu--card--start">
          <nuxt-link to="/start" style="text-decoration: none !important; color: inherit;">
            <div @click="isComponentModalActive = false">
              <h3>Mi Proyecto</h3>
              <p>Cómo empezar?</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isComponentModalActive: false
    }
  }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
header {
    position: fixed;
    z-index: 10;
    height: 6vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.header__logo {
    position: relative;
    width: 30vw;
    height: auto;
    max-width: 100px;
    margin-left: 3vw;
}
.header__icono {
    position: relative;
    display: block;
    width: 5vh;
    height: auto;
    max-width: 45px;
    margin: 0.5vh 0 0 3vw;
}
.header__menu {
    margin: 1vh;
    margin-right: 1vw;
    height: auto;
    display: flex;
    justify-content: flex-end;
}
.ec-header {
    position: fixed;
    width: 100vw;
    align-content: space-between;
}
/* MENU */
.ec-menu--card {
    border: 1px solid #fff;
    border-radius: 5px;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    width: 40vw;
    min-width: 100%;
    height: 20vh;
    color: white;
    text-shadow: 1px 1px 2px black;
    text-decoration: none;
}
.ec-menu--card h3{
    margin: 0;
    padding: 7vh 4vw 0 0;
    font-family: 'Staatliches';
    text-align: right;
    font-size: 5rem;
}
.ec-menu--card p{
    margin: -2vh 0 0 0;
    padding: 0 4vw 0 0;
    text-align: right;
    font-size: 1.5rem;
}
.ec-modal {
    width: 100vw;
    margin: 0;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) {
  .ec-menu--card--proyect:hover {
    background-image: url("@/assets/menu-1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec-menu--card--atelier:hover {
      background-image: url("@/assets/menu-2.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }
  .ec-menu--card--about:hover {
      background-image: url("@/assets/menu-3.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }
  .ec-menu--card--start:hover {
      background-image: url("@/assets/menu-4.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .ec-menu--card--proyect {
    background-image: url("@/assets/menu-1-small.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec-menu--card--atelier {
    background-image: url("@/assets/menu-2-small.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec-menu--card--about {
    background-image: url("@/assets/menu-3-small.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ec-menu--card--start {
    background-image: url("@/assets/menu-4-small.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
