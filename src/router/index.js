import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import vLogin from '../components/login/v-login'


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: vLogin
    }
    // ,
    // {
    //   path: '/contacts',
    //   name: 'contacts',
    //   component: vAllContacts
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: vContactUserInfo,
    //   props: true
    // },
    // {
    //   path: '/chats',
    //   name: 'chats',
    //   component: vUsersListChats
    // },
    // {
    //   path: '/chat',
    //   name: 'chat',
    //   component: vUserChat
    // }
  ]
})

export default router
