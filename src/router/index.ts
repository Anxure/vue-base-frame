import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes, noMatchRoute } from './router'
import { useGetAllowRoute, useLoopTranformRouter } from '@/hooks/usePermissionState'
import { asyncRoutes } from '@/router/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getStore } from '@/utils/storage'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes]
})
let isAddRouter = false // 判断是是否加过路由，避免重复执行
const whiteRouterList = ['/login']
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach(async (to, from, next) => {
  NProgress.start() // start progress bar
  const hasToken = getStore('admin_token')
  if (hasToken) {
    const menus = useLoopTranformRouter(JSON.parse(getStore('userMenu')!))
    if (isAddRouter) {
      if (to.path === '/login') {
        const userAsyncRouter = useGetAllowRoute(asyncRoutes, menus)
        const { path } = userAsyncRouter[0].children![0]
        next({ path });
        NProgress.done();
      } else {
        next()
      }
    } else {
      const needAddRouter = useGetAllowRoute(asyncRoutes, menus)
      // if (!needAddRouter || needAddRouter.length === 0) {
      //   needAddRouter = await store.dispatch('/user/getMenu', {id: userInfo.id})
      // }
      needAddRouter.push(noMatchRoute)
      needAddRouter.map((item) => router.addRoute(item));
      isAddRouter = true;
      console.log(router.getRoutes(), 'router.getRoutes')
      next({ ...to, replace: true });
    }
  } else {
    isAddRouter = false
    if (whiteRouterList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`);
      NProgress.done();
    }
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default router
