import {createRouter,createWebHistory} from 'vue-router'
import Index from './views/Index.vue'
import Catalog from './views/Catalog.vue'
import About from './views/About.vue'
import Delivery from './views/Delivery.vue'
import Contacts from './views/Contacts.vue'
import Order from './views/Order.vue'


const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'index',
      component:Index
    },
    {
      path:'/catalog',
      name:'catalog',
      component:Catalog

    },
    {
      path:'/about',
      name:'about',
      component:About

    },
    {
      path:'/delivery',
      name:'delivery',
      component:Delivery

    },
    {
      path:'/contacts',
      name:'contacts',
      component:Contacts

    },
    {
      path:'/order',
      name:'order',
      component:Order

    },
  ]
})

export default router