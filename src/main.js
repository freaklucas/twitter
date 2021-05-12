import Vue from 'vue'

import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'


import './index.css'
import './assets/styles/index.css'
import '@/assets/css/tailwind.css'

Vue.use(PortalVue)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')