<template>
  <div>
    <div class="card">
      <div class="ec--card-image-etapa" style="background-color: #55e091;">
        <h4>
          <b-icon
            :icon="post.icon"
            size="is-large"
          />
          &nbsp; {{ post.title }}
        </h4>
      </div>
      <li
        v-for="i in post.items"
        :key="i.items"
      >
        <ul>
          <ec-card-tema :item="i" />
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
import EcCardTema from './EcCardTema.vue'
export default {
  name: 'EcTema',

  components: { EcCardTema },

  props: {
    post: { type: Object, required: true }
  },

  data () {
    return {
      queEsTema: false
    }
  }
}
</script>

<style scoped>
.ec--card-image-etapa{
  height: 100px;
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  align-items: center;
  color: white;
}
.ec--etapa-card-items {
  align-content: flex-end;
  justify-content: flex-end;
  text-align: end;
  display: flex;
}
</style>
