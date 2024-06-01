<template>
  <Nav />
  <main class="w-screen ">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
// import { useHead, useRuntimeConfig } from '@unhead/vue';
import { useHead } from '@unhead/vue';
// import(useRun)

import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue';


const router = useRouter(),
  route = useRoute(),
  runtimeConfig = `https://${window.location.host}`,
  canonical = `${runtimeConfig}${router.resolve(route.name ? { name: route.name } : route).path}`
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
  /* width: 100%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

}
</style>
