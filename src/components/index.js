// 该文件负责所有的公共的组件的全局注册
import PageTools from './PageTools/index.vue'
import UploadExcel from './UploadExcel/index.vue'
import ImageUpload from './ImageUpload'
import Print from 'vue-print-nb'
import ScreenFull from './ScreenFull'
import ThemePicker from './ThemePicker'
import TagsView from './TagsView'
export default {
  install(Vue) {
    Vue.component('PageTools', PageTools) //  注册全局的通用栏组件对象
    Vue.component('UploadExcel', UploadExcel) // 注册导入excel组件
    Vue.component('ImageUpload', ImageUpload) // 注册导入上传组件
    Vue.component('ScreenFull', ScreenFull) // 注册全屏组件
    Vue.component('ThemePicker', ThemePicker) // 注册颜色组件
    Vue.component('TagsView', TagsView) // 注册多页签组件
    Vue.use(Print) // 注册打印插件
  }
}
