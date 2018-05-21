import Vue from 'vue'
import 'acribus-theme/dist/shopee/index.css'


import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'

import acribus from 'acribus'



Vue.use(acribus)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
