import('../public/css/style.css')
import('../public/js/app.js')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/blogStore';

const app = createApp(App)

app.use(router)

app.use(store); 

app.mount('#app');