import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/habblet-badges',
    name: 'BadgesHabblet',
    component: () => import(/* webpackChunkName: "badges-habblet" */ '../views/api-badges.vue')
  },
  {
    path: '/habblet-mobs',
    name: 'MobsHabblet',
    component: () => import(/* webpackChunkName: "mobs-habblet" */ '../views/api-mobs.vue')
  },
  {
    path: '/habblet-profile',
    name: 'ProfileHabblet',
    component: () => import(/* webpackChunkName: "profile-habblet" */ '../views/api-profile-habblet.vue')
  },
  {
    path: '/streaming',
    name: 'StreamPage',
    component: () => import(/* webpackChunkName: "streaming" */ '../views/streaming.vue')
  },
  {
    path: '/colors',
    name: 'CoresPage',
    component: () => import(/* webpackChunkName: "colors" */ '../views/cores.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
