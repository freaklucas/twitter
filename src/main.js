import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './index.css'
import './assets/styles/index.css'
import '@/assets/css/tailwind.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')