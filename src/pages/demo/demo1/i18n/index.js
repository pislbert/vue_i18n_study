import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n) // 通过插件的形式挂载

const messages = {
    'zh': {
        ...require('./common/lang/zh'),   // 中文语言包
    },
    'en': require('./common/lang/en')    // 英文语言包
}

// ...require('bootstrap-datetimepicker/src/js/locales/bootstrap-datetimepicker.zh-CN')

export function getLanguage() {
    const chooseLanguage = Cookies.get('language')
    if (chooseLanguage) return chooseLanguage
  
    // if has not choose language
    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    const locales = Object.keys(messages)
    for (const locale of locales) {
      if (language.indexOf(locale) > -1) {
        return locale
      }
    }
    return 'en'
}


const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    messages
})

export default i18n;