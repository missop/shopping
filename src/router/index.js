import Vue from 'vue'
import Router from 'vue-router'
import blank from '@/components/blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: blank
    }
  ]
})
