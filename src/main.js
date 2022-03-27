const { createApp } = require('vue');
import App from './App.vue';
import createRouter from './router';

createApp(App).use(createRouter()).mount('#app');
