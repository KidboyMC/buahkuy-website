<script setup>
    const baseUrl = import.meta.env.BASE_URL;

    defineProps({
        product: {
            type: Object,
            required: true
        }
    });

    defineEmits(['view-product']);
</script>

<template>
    <div @click="$emit('view-product', product)" class="bg-[#F8F8F8] rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
        <img :src="`${baseUrl}${product.image}`" :alt="product.name" loading="lazy" class="w-40 h-40 object-contain mb-4">
        <div class="flex-grow flex flex-col w-full">
            <h3 class="text-lg font-extrabold min-h-14 flex items-center justify-center">{{ product.name }}</h3>
            <p class="text-md font-bold text-green-600 mb-4">{{ product.price }}</p>
        </div>

        <button class="w-full bg-[#FF7A00] text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors mt-auto">
            Order Now
        </button>
    </div>
</template>