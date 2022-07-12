// 管理所有的自定义指令

/*
**  解决图片错误
*/
export const imgerror = {
  inserted(dom, options) {
    dom.onerror = function() {
      // 当图片出现异常的时候，会将指令配置的默认图片设置为该图片的内容
      dom.src = options.value
    }
  }
}
