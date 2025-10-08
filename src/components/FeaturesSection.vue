<script setup>
    import { ref } from 'vue';
    import featuresData from '../data/features.json'
    
    const features = ref(featuresData);
    const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <section class="py-16 shadow-md px-4 mb-8" data-aos="fade-up" data-aos-duration="800">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center text-center justify-items-center">
            <h2 class="text-5xl font-fredoka font-semibold mb-4 text-center">Why Choose Our Products?</h2>
            <p class="max-w-xl text-gray-600 text-center lg:text-left">BuahKuy! diolah dari buah-buahan pilihan tanpa tambahan pengawet, pewarna, maupun pemanis buatan, sehingga tetap mempertahankan cita rasa alami dan kandungan gizi buah.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="feature in features" :key="feature.title" class="text-center">
                
                <img :src="`${baseUrl}${feature.image}`" :alt="feature.title" loading="lazy" class="rounded-xl object-cover w-full h-48 mb-4 shadow-lg transition-transform duration-300 hover:scale-105">
                
                <h3 class="text-xl font-bold min-h-14 flex items-center justify-center">{{ feature.title }}</h3>
                <p class="text-gray-600 mt-2">{{ feature.description }}</p>
            </div>
        </div>
    </section>
</template>