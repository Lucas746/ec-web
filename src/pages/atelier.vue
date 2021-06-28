<template>
  <section class="section container is-fluid">
    <div class="ec-header-section">
      <h4 style="margin-left: 3vw">
        &nbsp;/ Atelier
      </h4>
    </div>
    <div class="columns is-desktop is-multiline">
      <li
        v-for="q in posts"
        :key="q.id"
      >
        <ul>
          <div class="column">
            <ec-post :post="q" />
          </div>
        </ul>
      </li>
    </div>
  </section>
</template>

<script>
import EcPost from '@/components/EcPost.vue'

export default {
  name: 'Atelier',

  components: { EcPost },

  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>

<style scoped>
</style>
