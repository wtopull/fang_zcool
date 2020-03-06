import Vue from 'vue'
import VueRouter from 'vue-router'
import Current from '../views/current/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'current',
    component: Current
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import(/* webpackChunkName: "discover" */ '../views/discover/index.vue')
  },
  {
    path: '/designer',
    name: 'designer',
    component: () => import(/* webpackChunkName: "designer" */ '../views/designer/index.vue')
  },
  {
    path: '/job',
    name: 'job',
    component: () => import(/* webpackChunkName: "job" */ '../views/job/index.vue')
  },
  {
    path: '/special',
    name: 'special',
    component: () => import(/* webpackChunkName: "special" */ '../views/special/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
