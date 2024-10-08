<template>
  <div class="image">
    <img :src="dataImgUrl" :alt="dataTitle" />
    <h3>{{ dataTitle }} ({{ dataYear }})</h3>
    <h4><strong>Director:</strong> {{ dataDirector }}</h4>
    <h4><strong>Casts:</strong> {{ dataCasts }}</h4>
    <h4><strong>Genre:</strong> {{ dataGenre }}y</h4>
  </div>
</template>

<script>
export default {
  computed: {
    dataSelected() {
      return this.$store.getters.getSelected
    },
    dataDefault() {
      return this.$store.getters.getData
    },
    dataImgUrl() {
      return this.dataSelected.poster || this.dataDefault.poster
    },
    dataTitle() {
      return this.dataSelected.title || this.dataDefault.title
    },
    dataYear() {
      return this.dataSelected.year || this.dataDefault.year
    },
    dataDirector() {
      return this.dataSelected.director || this.dataDefault.director
    },
    dataCasts() {
      return this.dataSelected.casts || this.dataDefault.casts
    },
    dataGenre() {
      return this.dataSelected.genre || this.dataDefault.genre
    }
  }
}
</script>

<style scoped>
.image {
  width: 40%;
  background-color: white;
  border-radius: 5px;
  padding: 1em;
  text-align: center;
  color: black;
}
h3,
strong {
  font-weight: bold;
}
img {
  border-radius: 5px;
}
</style>
