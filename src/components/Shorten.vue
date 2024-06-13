<template>
    <div class="card w-96 h-50 bg-secondary shadow-xl">
        <div class="card-body items-center text-center">
            <p>Enter your long URL below to generate a shortened link. It's quick, easy, and free.
                <span class="text-error">
                    Links will last for 24 hours.
                </span>
            </p>
            <div class="card-actions flex-nowrap mt-1">
                <input type="text" placeholder="Long link here" class="input input-bordered w-4/6 max-w-xs"
                    v-model="longLink" />
                <button class="btn btn-accent w-2/6" @click="handleClick">Shorten</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient'


const emit = defineEmits(['change']),
    longLink = ref(''),
    linkError = ref(false),
    newLink = ref(''),
    handleClick = async () => {
        if (longLink.value.length <= 0) { return linkError.value = true }
        linkError.value = false
        const { data, error } = await supabase
            .from('links')
            .insert([
                { 'long_link': longLink.value },
            ])
            .select()
        console.log(data[0].id)
        emit('change', data[0].id)
    }
</script>

<style scoped>
/*  */
</style>