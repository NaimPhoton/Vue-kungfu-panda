<script setup>
import Header from './components/Header.vue';
import Image from './components/Image.vue'
import Title from './components/Titel.vue'
</script>

<template>
  <header>
    <Header />
  </header>

  <div class="content">
    <Image />
    <Title />
  </div>
</template>

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
