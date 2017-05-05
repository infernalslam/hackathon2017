import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Create from '@/components/create'
import User from '@/components/user'
import playlistFeed from '@/components/playlistFeed'
import Youtube from '@/components/youtube'
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
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/playlistFeed',
      name: 'playlistFeed',
      component: playlistFeed
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: Youtube
    }
  ]
})
