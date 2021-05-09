import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from './router.config'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRouterMap
})
