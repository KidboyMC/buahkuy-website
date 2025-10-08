<script setup>
    import { ref } from 'vue';
    import ProductCard from './ProductCard.vue';
    import ProductModal from './ProductModal.vue';
    import productData from '../data/products.json';

    const products = ref(productData);
    const selectedProduct = ref(null);
    function openModal(product) {
        selectedProduct.value = product;
    }

    function closeModal() {
        selectedProduct.value = null;
    }
</script>

<template>
    <section class="py-16" data-aos="zoom-in" data-aos-duration="800">
        <div class="text-center">
            <h2 class="text-5xl font-fredoka font-semibold mb-4">Menu</h2>
            <p class="max-w-xl mx-auto text-gray-600">Setiap varian BuahKuy! diolah dari buah segar pilihan dengan rasa yang unik & menyegarkan — semua diracik tanpa bahan kimia tambahan.</p>
        </div>

        <div class="mt-12">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ProductCard 
                v-for="product in products" 
                :key="product.id" 
                :product="product"
                @view-product="openModal" 
                />
            </div>

            <Transition
                enter-from-class="opacity-0"
                enter-active-class="transition-opacity duration-300 ease-out"
                enter-to-class="opacity-100"
                leave-from-class="opacity-100"
                leave-active-class="transition-opacity duration-200 ease-in"
                leave-to-class="opacity-0"
            >

            <ProductModal 
                v-if="selectedProduct" 
                :product="selectedProduct"
                @close="closeModal"
            />
            </Transition>
        </div>
    </section>
</template>