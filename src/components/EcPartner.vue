<template>
  <div style="width: 180px; margin-left: 40px;">
    <div class="card card--ec-about">
      <div class="card-image">
        <figure class="image is-3by4">
          <img :src="partner.image" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              {{ partner.name }}
            </p>
            <p class="subtitle is-4">
              {{ partner.profession }}
            </p>
            <p class="subtitle is-6">
              {{ partner.socialmedia.nick }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcPartner',

  props: {
    partner: { type: Object, required: true }
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .card--ec-about {
    text-shadow: none;
    width: 250px;
  }
</style>
