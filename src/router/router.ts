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
  },
  {
    path: '/',
    name: 'app',
    redirect: '/login',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]
// export const asyncRoutes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/Home/Index.vue'),
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
//   },
// ]
