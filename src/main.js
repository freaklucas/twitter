import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './assets/styles/index.css'
import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
