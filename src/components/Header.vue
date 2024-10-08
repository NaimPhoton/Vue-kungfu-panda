<template>
  <div class="header">
    <h1>🎥 {{ dataSelected.title || 'Movie Catalogue' }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    dataSelected() {
      return this.$store.getters.getSelected
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgb(32, 35, 41);
  padding: 1em;
  text-align: center;
  color: white;
}
h1 {
  font-weight: bold;
}
</style>
