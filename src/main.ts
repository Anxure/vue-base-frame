import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/common.less'
createApp(App)
  .use(store)
  .use(Antd)
  .use(router)
  .mount('#app')
