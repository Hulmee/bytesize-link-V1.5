<template>
    <section class="w-screen pt-3">
        <Hero>
            Byte Size Link
        </Hero>
        <Shorten @change="e => { handleChange(e) }" />
        <div v-if="link.id" class="w-96 mt-10">
            <div class="mockup-browser border bg-base-300">
                <div class="mockup-browser-toolbar">
                    <div class="input"><span>{{ link.long_link }}</span></div>
                </div>
                <div class="flex flex-col items-center justify-center px-2 py-8 bg-base-200">
                    <h3>New Link</h3>
                    <div class="flex  m-1">

                        <p class="mx-1"> <span>{{ baseURL }}</span><span>{{ link.id }}</span></p>
                        <kbd @click="handleCopy" class="kbd kbd-sm mx-1">Copy</kbd>
                    </div>
                    <!--                     
                    <small>created: <span>{{ new Date(link.created_at).toLocaleString('en-AU', {
                        day: 'numeric', weekday: 'short', month: 'short',
                        year: 'numeric', hour: 'numeric', minute: 'numeric'
                            }) }}</span></small>
                     -->
                    <small>Expires: <span>{{ new Date(link.expires_at).toLocaleString('en-AU', {
                        day: 'numeric', weekday: 'short', month: 'short',
                        year: 'numeric', hour: 'numeric', minute: 'numeric'
                    }) }}</span></small>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

import { ref, computed } from 'vue';
import { useSeoMeta } from '@unhead/vue';


import { supabase } from '@/lib/supabaseClient'

import Shorten from "../components/Shorten.vue"
import Hero from '../components/Hero.vue';

const route = useRoute(),
    runtimeConfig = `https://${window.location.host}`,
    canonical = new URL(route.fullPath, runtimeConfig).href
useSeoMeta({
    title: 'Byte Size Link',
    description: 'Shorten long URLs instantly & manage them easily! Ellery Hulme\'s link shortener, built with Vue.js & Supabase, offers a simple & lightweight solution.',
    ogTitle: 'Efficient Link Shortening with Ellery Hulme',
    ogDescription: 'Discover our lightweight link shortener, created by Ellery Hulme, leveraging Vue.js and Supabase for a seamless experience.',
    ogUrl: canonical,
    twitterCard: 'summary',
    keywords: 'link shortener, Vue.js, Supabase, DaisyUI, Tailwind CSS, efficient link shortening, custom CSS, SCSS, Ellery Hulme',
    author: 'Ellery Hulme',
    robots: 'index, follow',
})


const link = ref([]),
    msg = ref(''),
    host = window.location.host,
    baseURL = window.location.href,
    shortURL = ref(''),
    getLink = async (id) => {
        const { data, error } = await supabase
            .from('links')
            .select('*')
            .eq('id', id)
        console.log(data);
        if (error) {
            msg.value = `Error fetching link: ${error}`
            return;
        }
        if (data && data.length > 0) {
            link.value = data[0];
            shortURL.value = `${host}/${link.value.id}`

        } else {
            msg.value = `Link not found for ${window.location}${id}`
        }
    },
    formattedLink = computed(() => {
        // Check if link starts with "https://"
        if (link.value && !link.value.long_link.startsWith("https://")) {
            return "https://" + link.value.long_link;
        } else {
            return link.value.long_link;
        }
    }),
    handleChange = (lLink) => {
        getLink(lLink)
        // alert('short clicked ' + lLink)
    },
    handleCopy = () => {
        if (shortURL.value) {

            alert(`url ${shortURL.value} has been coppied`)
            navigator.clipboard.writeText(shortURL.value);
        }
    }
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