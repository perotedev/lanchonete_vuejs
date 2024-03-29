import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'

import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '@/App.css'

createApp(App).use(router).mount('#app')
