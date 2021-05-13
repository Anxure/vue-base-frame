import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from 'ant-design-vue'
import { antd } from '@/plugin/antd'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/common.less'
import '@/assets/style/variables.less'
import './permission' // permission control
createApp(App)
  .use(store)
  .use(antd)
  .use(router)
  .mount('#app')