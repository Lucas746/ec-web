<template>
  <section class="section container is-fluid">
    <div class="ec-header-section">
      <h4 style="margin-left: 3vw">
        &nbsp;/ Proyectos
      </h4>
    </div>
    <div class="container">
      <div class="columns is-desktop is-multiline">
        <li
          v-for="p in proyects"
          :key="p.id"
        >
          <ul>
            <div class="column is-3">
              <ec-proyect :proyect="p" />
            </div>
          </ul>
        </li>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Proyects',

  computed: {
    proyects () {
      return this.$store.state.proyects
    }
  }
}
</script>

<style scoped>
</style>
