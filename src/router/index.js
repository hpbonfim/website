import Vue from 'vue'
import Router from 'vue-router'
import Indice from '@/components/Indice'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Indice',
      component: Indice
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
