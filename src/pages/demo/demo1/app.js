import Vue from 'vue'
import App from './app.vue'
import i18n from './i18n'

// Vue.directive('loaded-callback', {
//   inserted: function(el, binding, vnode) {
//     binding.value(el, binding, vnode)
//   }
// })

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

// 不再实验 bootstrap datetimepicker 控件了，在生成组件时各种各样的bug
