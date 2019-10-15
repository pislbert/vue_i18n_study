import Vue from 'vue'
import App from './app.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n) // 通过插件的形式挂载


const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    messages: {
      'zh-CN': require('./common/lang/zh'),   // 中文语言包
      'en-US': require('./common/lang/en')    // 英文语言包
    }
})
 //this.$i18n.locale // 通过切换locale的值来实现语言切换
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   i18n,  // 不要忘记
//   components: { App }
// })
new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
