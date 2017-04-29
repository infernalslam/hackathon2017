import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Create from '@/components/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
