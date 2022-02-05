import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Benvinguda from '../views/Benvinguda.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Benvinguda',
    component: Benvinguda
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
