import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import VueConfetti from 'vue-confetti'

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'floating-vue/dist/style.css'
import './assets/base.css'

const app = createApp(App)
app.use(router)
app.use(FloatingVue)
app.use(VueConfetti)
app.mount('#app')
