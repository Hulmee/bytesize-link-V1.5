<template>
    <section class="w-screen pt-3">

        <Shorten />
        <div v-if="!link.id" class="card w-96 h-50 bg-info-content shadow-xl mt-10">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary-content">New Link!!</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

import Shorten from "../components/Shorten.vue"

const link = ref([])
</script>

<style scoped>
section {
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
</style>