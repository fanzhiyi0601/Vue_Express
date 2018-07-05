import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import HelloWorld from '@/pages/Demos/HelloWorld'
import ChatRoom from '@/pages/Demos/ChatRoom'
import NotFound from '@/pages/404'
import About from '@/pages/About'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Demos/HelloWorld',
      name: 'HelloWorld,',
      component: HelloWorld
    },
    {
      path: '/Demos/ChatRoom',
      name: 'CharRoom,',
      component: ChatRoom
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'Home',
      component: NotFound
    }
  ]
})
