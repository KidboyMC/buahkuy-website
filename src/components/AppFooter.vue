<script setup>
    import { whatsappLink } from '@/utils/contact';
    const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="bg-[#98DCC4] border-t-3 border-[#F07F23]">
        <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
            <h3 class="text-4xl text-[#36392D] text-shadow-md font-fredoka font-bold">BuahKuy!</h3>
            <div class="flex items-center space-x-6 mt-4">
                <a href="https://www.instagram.com/buahkuy_id/"><img src="../assets/icons/ig.png" class="w-8 h-8 hover:scale-110 transition-all duration-300"></a>
                <a :href="whatsappLink"><img src="../assets/icons/wa.png" class="w-8 h-8 hover:scale-110 transition-all duration-300"></a>
                <a href="#"><img src="../assets/icons/tt.png" class="w-8 h-8 hover:scale-110 transition-all duration-300"></a>
            </div>
            <div class="mt-8 border-t border-gray-500/30 w-full pt-4">
                <p class="text-center text-sm text-gray-700">
                    © {{ currentYear }} BuahKuy! All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>