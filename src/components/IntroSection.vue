<script setup>
    import { ref } from 'vue';
    import { register } from 'swiper/element/bundle';
    
    register();
    const swiperRef = ref(null);
    const isBeginning = ref(true);
    const isEnd = ref(false);
    const onSlideChange = (swiper) => {
        isBeginning.value = swiper.isBeginning;
        isEnd.value = swiper.isEnd;
    };
    
    const swiperBreakpoints = {
      // Aturan untuk layar dengan lebar 640px ke atas
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Aturan untuk layar dengan lebar 1024px ke atas
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    };

    const goNext = () => {
        if (swiperRef.value) {
            swiperRef.value.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.value) {
            swiperRef.value.swiper.slidePrev();
        }
    };
</script>

<template>
    <section class="py-16 shadow-md px-4 mt-10" data-aos="fade-up" data-aos-duration="800">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center text-center justify-items-center">
            <h2 class="text-5xl font-fredoka font-semibold mb-4 text-center">Who are We?</h2>
            <p class="max-w-xl text-gray-600 text-center lg:text-left">BuahKuy! lahir dari semangat buat ngasih kesegaran alami di setiap botol. Semua minuman kami dibuat dari buah segar tanpa pengawet, biar kamu bisa nikmatin rasa asli buah Indonesia.</p>
        </div>
        
        <div class="mt-12 relative group">
            <swiper-container
                ref="swiperRef"
                :slides-per-view="1"
                :space-between="24"
                :breakpoints="swiperBreakpoints"
                :loop="false" @slidechange="onSlideChange($event.detail[0])"
                :pagination="{ clickable: true }"
            >
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image1.png" alt="Orange Juice" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image2.png" alt="Various Smoothies" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image3.png" alt="Avocado Smoothie" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image4.png" alt="Orange Juice 2" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image5.png" alt="Sliced Mango" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image6.png" alt="Lemonade" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
                <swiper-slide class="rounded-lg overflow-hidden">
                    <img src="../assets/img/carousel/image7.png" alt="Avocado Smoothie" class="object-cover w-full h-64 shadow-lg transition-transform duration-300 hover:scale-105">
                </swiper-slide>
            </swiper-container>
            
            <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-10">
                <button @click="goPrev" class="bg-orange-400/70 hover:bg-orange-500 text-gray-800 rounded-full p-2 shadow-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button @click="goNext" class="bg-orange-400/70 hover:bg-orange-500 text-gray-800 rounded-full p-2 shadow-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    </section>
</template>