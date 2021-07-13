<template>
  <div>
    <div class="ec-menu--card--proy" :style="{ backgroundImage: 'url(' + image.url + ')' }" />
  </div>
</template>

<script>
export default {
  name: 'Ecproyect',

  props: {
    image: { type: Object, required: true }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        margin: 0;
    }
    .ec-menu--card--proy {
        display: flex;
        flex-direction: row-reverse;
        align-items: right;
        position: relative;
        border: 1px solid #fff;
        border-radius: 5px;
        margin: 0 0 5vh 0;
        width: 100%;
        height: 80vh;
        color: white;
        text-shadow: 1px 1px 2px black;
        box-shadow: 1px 1px 2px black;
        font-size: 3vh;
        text-decoration: none;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .ec-menu--card--proy:hover {
        cursor: pointer;
    }
</style>
