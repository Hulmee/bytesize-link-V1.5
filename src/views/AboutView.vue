<template>
    <div class="flex flex-col justify-center items-center   ">
        <Hero>About</Hero>
        <div class="join join-vertical text-center w-3/4">
            <div class="collapse collapse-arrow join-item border border-base-300 bg-secondary">
                <input type="radio" name="my-accordion-4" checked="checked" />
                <div class="collapse-title text-xl font-medium">
                    Our Project
                </div>
                <div class="collapse-content text-left text-accent-content">
                    <p>Welcome to my project, where I've been exploring the world of link shortening. In V1, I went old
                        school with custom CSS/SCSS. But in V1.5, I discovered the DaisyUI component library for
                        Tailwind CSS and took things to the next level.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow join-item border border-base-300 bg-secondary">
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title text-xl font-medium">
                    Our Approach:
                </div>
                <div class="collapse-content text-left text-accent-content">
                    <p>In a sea of link shorteners, I wanted to keep things simple. No complex backend here just Vue.js
                        and Supabase handling the heavy lifting. By focusing on frontend logic and leveraging Supabase
                        for storage, we've created a lightweight, efficient solution.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow join-item border border-base-300 bg-secondary">
                <input type="radio" name="my-accordion-4" />
                <div class="collapse-title text-xl font-medium">
                    Meet the Developer:
                </div>
                <div class="collapse-content text-left text-accent-content">
                    <p>I'm Ellery Hulme, the developer behind this project. With a passion for code and
                        user-friendly design, I'm committed to crafting solutions that make a difference.

                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import Hero from '../components/Hero.vue';
import { useSeoMeta } from '@unhead/vue';

const route = useRoute(),
    runtimeConfig = `https://${window.location.host}`,
    ogURLref = new URL(route.fullPath, runtimeConfig).href
console.log(ogURLref);

useSeoMeta({
    title: 'About - Byte Size Link - By Ellery Hulme\'s',
    description: 'Learn about Ellery Hulme\'s journey from custom CSS/SCSS to using DaisyUI with Tailwind CSS for efficient link shortening.',
    ogTitle: 'About Ellery Hulme\'s Link Shortening Project',
    ogDescription: 'Discover the evolution of our link shortener from custom CSS/SCSS to using DaisyUI with Tailwind CSS. Meet Ellery Hulme, the developer committed to clean code and user-friendly design.',
    ogUrl: ogURLref,

    twitterCard: 'summary',
    keywords: 'about link shortener, Vue.js, Supabase, DaisyUI, Tailwind CSS, developer story, custom CSS, SCSS, Ellery Hulme',
    author: 'Ellery Hulme',
    robots: 'index, follow',

})
</script>

<style scoped>
/*  */
</style>