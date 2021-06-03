import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from './router.config'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // return false
})

export default router;
