<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    // State untuk melacak visibilitas tombol
    const isVisible = ref(false);

    // Fungsi untuk mengecek posisi scroll
    const handleScroll = () => {
    // Tombol akan muncul jika user scroll lebih dari 300px
    if (window.scrollY > 300) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
    };

    // Fungsi untuk scroll ke atas dengan halus
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Ini yang membuat scroll-nya halus
    });
    };

    // Tambahkan & hapus event listener saat komponen aktif/nonaktif
    onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    });
</script>

<template>
    <Transition
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
    >
        <button
        v-if="isVisible"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
        >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
        </button>
    </Transition>
</template>