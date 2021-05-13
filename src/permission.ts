import router from '@/router/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach((to, from, next) => {
  console.log('%cpermission.ts line:6 object', 'color: #007acc;', to, from)
  NProgress.start() // start progress bar
  next()
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
