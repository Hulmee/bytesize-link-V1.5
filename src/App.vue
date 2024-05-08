<template>
<Nav/>
  <main class="w-screen ">
    <RouterView />
  </main>
 <Footer/>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue';


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
