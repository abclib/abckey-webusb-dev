/**
 * vue-i18n
 * see more : https://kazupon.github.io/vue-i18n/zh/guide/lazy-loading.html
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Axios from 'axios'

import Store from '@/store'
import messages from './messages/enUS'

Vue.use(VueI18n)

const __LANGS__ = ['enUS']
let __LOCALE__ = Store.__s('app.language')

if (!__LOCALE__) {
  __LOCALE__ = window.navigator.language.split('-').join('')
  Store.__s('app.language', __LOCALE__)
}

const i18n = new VueI18n({
  locale: __LOCALE__,
  fallbackLocale: 'enUS',
  silentTranslationWarn: false,
  messages
})

/**
 * @functin setLang - set the app's language
 * @param {string} lang - the language will be setted
 * @return {string} lang - langguage name
 */
function _set(lang: string): string {
  i18n.locale = lang
  Axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html')?.setAttribute('lang', lang)
  Store.__s('app.language', lang)
  return lang
}

/**
 * @functin loadLangAsync - load language asynchronous
 * @param {string} lang - the language will be loading
 * @return {string} lang - loaded language name
 */
export function setLang(lang: string): Promise<string> {
  if (__LOCALE__ !== __LANGS__) {
    if (!__LANGS__.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/messages/${lang}`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default[lang])
        __LANGS__.push(lang)
        return _set(lang)
      })
    }
    return Promise.resolve(_set(lang))
  }
  return Promise.resolve(lang)
}

setLang(__LOCALE__) // initialization
export default i18n
