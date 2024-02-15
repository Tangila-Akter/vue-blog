// import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app=createApp(App);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
