<script setup>
    import { whatsappLink } from '../utils/contact.js'
    const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
    });

    const emit = defineEmits(['close']);
</script>

<template>
    <div @click.self="$emit('close')" class="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <img :src="product.image" :alt="product.name" class="w-48 h-48 object-contain mx-auto mb-4">
            <h2 class="text-2xl font-semibold text-center font-fredoka">{{ product.name }}</h2>
            <p class="text-xl font-bold text-green-600 text-center my-2">{{ product.price }}</p>
            <p class="text-gray-600 text-center text-sm mb-6">{{ product.description }}</p>
            <a :href="whatsappLink" target="_blank" class="block w-full bg-green-500 text-white font-bold text-center py-3 px-4 rounded-full hover:bg-green-600 transition-colors">Pesan via WhatsApp</a>
        </div>
    </div>
</template>