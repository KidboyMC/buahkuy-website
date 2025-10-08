<script setup>
    import AppHeader from './components/AppHeader.vue';
    import IntroSection from './components/IntroSection.vue';
    import MenuSection from './components/MenuSection.vue';
    import FeaturesSection from './components/FeaturesSection.vue';
    import AppFooter from './components/AppFooter.vue';
    import ScrollToTopButton from './components/ScrollToTopButton.vue';
</script>

<template>
    <div class="relative overflow-hidden bg-[#E6F4F1] min-h-screen">
        <div class="relative z-10">
        <AppHeader />
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IntroSection />
            <hr class="border-gray-300/60">
            <MenuSection />
            <hr class="border-gray-300/60">
            <FeaturesSection />
        </main>
        <AppFooter />
        </div>
        <ScrollToTopButton />
    </div>
</template>