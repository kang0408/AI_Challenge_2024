import { createApp } from 'vue';
import App from './App.vue';
import './styles/app.css';
import { createPinia } from 'pinia';
import router from '@routers/index';

createApp(App).use(createPinia()).use(router).mount('#app');
