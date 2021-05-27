import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import { antd } from '@/plugin/antd'
import store from './store'
import '@/assets/style/common.less'
import 'ant-design-vue/dist/antd.less';
import '@/assets/style/iconfont.css'
// mock
import '../mock'
// import '@/assets/style/variables.less'
import './permission' // permission control
createApp(App)
  .use(store)
  .use(antd)
  .use(router)
  .mount('#app')
