import { RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  }
]
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    redirect: '/login',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Index.vue'),
        meta: { title: '我的看板' }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]
