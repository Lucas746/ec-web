<template>
  <div>
    <div class="card-header">
      <button v-show="!queEsTema" class="card-header-icon" aria-label="more options" @click="queEsTema = true">
        <span class="icon">
          <b-icon
            icon="arrow-down-circle"
          />
        </span>
      </button>
      <button v-show="queEsTema" class="card-header-icon" aria-label="more options" @click="queEsTema = false">
        <span class="icon">
          <b-icon
            icon="arrow-up-circle"
          />
        </span>
      </button>
      <p class="card-header-title">
        {{ item.title }}
      </p>
    </div>
    <div v-show="queEsTema" class="card-content">
      <div class="content">
        <p>{{ item.description }}</p>
        <img :src="item.imgurl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcCardTema',

  props: {
    item: { type: Object, required: true }
  },

  data () {
    return {
      queEsTema: false
    }
  }
}
</script>

<style scoped>
</style>
