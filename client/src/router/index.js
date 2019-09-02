import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import ElevatorPage from '@/components/ElevatorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/elevator',
      name: 'ElevatorPage',
      component: ElevatorPage
    }
  ]
})
