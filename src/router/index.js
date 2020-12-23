import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import Second from '@/views/Home/Second'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
  

  
    {
      path: '/',
      name: 'Second',
      component: Second
    },
  ]
})