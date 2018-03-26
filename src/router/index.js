import Vue from 'vue'
import Router from 'vue-router'

import List from '@/components/List'
import Detail from '@/components/Detail'
import Join from '@/components/Join'
import Bind from '@/components/Bind'
import Good from '@/components/Good'
import Leader from '@/components/Leader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/List'
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
      path: '/Bind',
      name: 'Bind',
      component: Bind
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
    }
  ]
})
