import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)
app.config.globalProperties.$axios = axios
app.provide('$axios', axios)
// 组合式api使用axios的两种方法，1325 袁磊
axios.defaults.baseURL="http://localhost:3000/"
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')








// 2024 @ NII
