import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes, asyncRoutes } from './router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes]
})
export default router
