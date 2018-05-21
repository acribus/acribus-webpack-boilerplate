import Vue from 'vue'
import Router from 'vue-router'

import Empty from '../Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '{{ name }}'
      },
      component: Empty
    },
  ]
})
