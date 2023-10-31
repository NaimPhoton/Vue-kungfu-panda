<template>
  <div class="title">
    <div v-for="data in this.$store.state.data" :key="data.id">
      <h3 @click="addToSelected(data)">
        <span v-if="dataSelected.id === data.id" class="yes">{{ data.title }}</span>
        <span v-else>{{ data.title }}</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToSelected(data) {
      this.$store.dispatch('addSelected', data)
    }
  },
  computed: {
    dataSelected() {
      return this.$store.getters.getSelected
    }
  }
}
</script>

<style scoped>
.title {
  width: 30%;
  text-align: start;
}
h3 {
  padding: 5px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
h3:hover {
  padding: 5px;
  background-color: white;
  color: black;
  border-radius: 5px;
}
.yes {
  color: rgb(201, 2, 2);
  font-weight: bold;
}
</style>
