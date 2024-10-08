<template>
  <header>
    <Header></Header>
  </header>

  <div class="content">
    <Image></Image>
    <Title></Title>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Image from './components/Image.vue'
import Title from './components/Titel.vue'

export default {
  name: 'App',
  components: {
    Header,
    Image,
    Title
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.content {
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  height: 100%;
}
</style>
