<template>
  <Nav />
  <main class="w-screen ">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue';

import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue';

const route = useRoute(),
  runtimeConfig = `https://${window.location.host}`,
  canonical = new URL(route.fullPath, runtimeConfig).href

useHead({
  link: [
    { rel: 'canonical', href: canonical },
  ],
})

</script>


<style scoped>
/* flex flex-col justify-center items-center */
main {
  height: 80%;
  /* height: 100dvh; */
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

}
</style>
