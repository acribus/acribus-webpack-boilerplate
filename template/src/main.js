import Vue from 'vue'
import 'acribus-theme/dist/acribus/index.css'

import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'

import acribus, { registerModule } from 'acribus'
import request from './api/request'
import locales from './lang/index'



Vue.use(acribus, {
  locale: locales,
  request
})

acribus.bootstrap(() => {
  // registerModule('sth', null, '/api/sth/')
  // acribus.register('view')
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
