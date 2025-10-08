<script setup>
    const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <header class="bg-[#98DCC4] border-b-4 border-[#F07F23] font-fredoka font-bold shadow-md">
        <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-0">
            <a :href="baseUrl" class="flex-shrink-0">
                <img src="../assets/img/roundedLogo.png" class="w-14 h-auto sm:w-16 hover:scale-105 transition-transform duration-300" alt="BuahKuy! Logo">
            </a>
            <div class="flex flex-col items-center sm:items-start">
                <h1 class="text-3xl sm:text-4xl text-[#36392D] text-shadow-md mx-auto">BuahKuy!</h1>
                <p class="text-gray-700 text-sm sm:text-base mt-1 font-medium">Fresh from nature, Made with Love</p>
            </div>
            <div class="hidden sm:block w-12"></div>
        </div>
    </header>
</template>
