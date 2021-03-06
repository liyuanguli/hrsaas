import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Components from '@/components'
import CheckPermission from '@/mixin/checkPermission'

import * as directives from '@/directives'
import * as filters from '@/filters' // 引入工具类
import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]) // 注册自定义指令
})
// 注册全局的过滤器
Object.keys(filters).forEach(key => {
  // 注册过滤器
  Vue.filter(key, filters[key])
})
// 全局混入检查对象
Vue.mixin(CheckPermission)
Vue.config.productionTip = false
// 注册自定义组件
Vue.use(Components)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
