/**
 * Vue i18n
 *
 * @library
 *
 * http://kazupon.github.io/vue-i18n/en/
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Store from '@/store'
import messages from './messages'

Vue.use(VueI18n)

const sysLang = window.navigator.language.split('-').join('')

if (!Store.__s('app.language')) Store.__s('app.language', sysLang)

export default new VueI18n({
  locale: Store.__s('app.language'),
  fallbackLocale: 'enUS',
  silentTranslationWarn: true,
  messages
})
