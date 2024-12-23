import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import './assets/tailwind.css';
import 'vue3-toastify/dist/index.css'; 
import { Vue3Toastify } from 'vue3-toastify';
import { createPinia } from 'pinia';

const vuetify = createVuetify({ components, directives })
createApp(App).use(router).use(createPinia()).use(vuetify).use(Vue3Toastify).mount('#app')
