import Vue from 'vue'
import Router from 'vue-router'

import List from '@/components/List'
import Detail from '@/components/Detail'
import Join from '@/components/Join'
import Good from '@/components/Good'
import Leader from '@/components/Leader'
import Mine from '@/components/Mine'
import Login from '@/components/Login'

import Profile from '@/components/Profile'
import MAC from '@/components/Bind'
import MyComp from '@/components/MyComp'
import MyTrain from '@/components/MyTrain'
import ChangePassword from '@/components/ChangePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/List/Detail',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join,
      props: true
    },
    {
      path: '/Good',
      name: 'Good',
      component: Good
    },
    {
      path: '/Leader',
      name: 'Leader',
      component: Leader
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      children: [
        {
          path: 'Profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'MAC',
          name: 'MAC',
          component: MAC
        },
        {
          path: 'MyComp',
          name: 'MyComp',
          component: MyComp
        },
        {
          path: 'MyTrain',
          name: 'MyTrain',
          component: MyTrain
        },
        {
          path: 'ChangePassword',
          name: 'ChangePassword',
          component: ChangePassword
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
