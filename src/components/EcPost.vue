<template>
  <nuxt-link :to="`/posts/${post.id}`" style="text-decoration: none !important; color: inherit;">
    <div class="ec-menu--card--post" :style="{ backgroundImage: 'url(' + post.card + ')' }">
      <div>
        <h4>{{ post.shortname }}</h4>
        <p>{{ post.name }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Ecpost',

  props: {
    post: { type: Object, required: true }
  },

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    margin: 0;
}
.ec-menu--card--post {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 2vh;
    width: 280px;
    height: 50vh;
    color: white;
    text-shadow: 1px 1px 2px black;
    box-shadow: 1px 1px 2px black;
    text-decoration: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.ec-menu--card--post:hover {
  filter: brightness(1.2);
  border: 2px solid #fff;
}
.ec--proyect-logo {
  margin-top: 0;
  width: 150px;
}
</style>
