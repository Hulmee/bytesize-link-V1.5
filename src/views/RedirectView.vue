<template>
    <Hero>Redirect Page</Hero>
    <span v-if="!msg" class="loading loading-dots loading-lg text-primary mt-2"></span>
    <div v-else class="stats bg-accent  shadow">
        <div class="stat place-items-center">
            <!-- <div class="stat-value">Redirect Page</div> -->
            <div class="stat-value">{{ msg }}</div>
            <!-- <div class="stat-title">{{ msg }}</div> -->
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, watchEffect } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { supabase } from '@/lib/supabaseClient'
    import Hero from '../components/Hero.vue';

    const router = useRouter(),
        route = useRoute(),
        slug = route.params.slug,
        link = ref(''),
        msg = ref(''),
        shortLink = ref(null)


    const getLinkData = async (id) => {
        const { data, error } = await supabase
            .from('links')
            .select('*')
            .eq('id', id);

        if (error) {
            msg.value = `Error fetching link: ${error}`;
            return;
        }
        if (data && data.length > 0) {
            // Check if the link has expired
            const expiresAt = new Date(data[0].expires_at);
            if (expiresAt > new Date()) {
                link.value = data[0].long_link;
            } else {
                msg.value = `${window.location} has expired`
            }
        } else {
            msg.value = `Link not found for ${window.location}`;
        }
    }

    watchEffect(() => {
        // Redirect if link is not empty and has not expired
        if (link.value) {
            window.location.href = link.value;
        }
    });

    onMounted(() => {
        getLinkData(route.params.slug);
    });
</script>

<style scoped>
    /*  */
</style>