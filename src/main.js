import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/stylesheet.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')
AOS.init({
    once: true, // Animasi hanya berjalan sekali
    duration: 800, // Durasi animasi dalam milidetik
});