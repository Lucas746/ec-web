<template>
  <div>
    <b-carousel-list v-model="test" :data="items" :items-to-show="4">
      <template #item="post">
        <ec-post :post="post" />
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 0
    }
  },

  computed: {
    items () {
      return this.$store.state.posts
    },
    isMobile () {
      return this.$store.isMobile
    }
  },
  methods: {
    info (value) {
      this.test = value
    }
  }
}
</script>

<style scoped>
  .post--carousel-card {
    margin: 2vw;
  }
</style>
