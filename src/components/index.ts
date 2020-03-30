import Vue from 'vue'
import UpperFirst from 'lodash/upperFirst'
import CamelCase from 'lodash/camelCase'

const files = require.context('.', true, /[A-Z]\w+\.(vue|js)$/)

files.keys().forEach(k => {
  const config = files(k)
  const name = UpperFirst(CamelCase(k.replace(/^\.\//, '').replace(/\.\w+$/, '')))
  Vue.component(name, config.default || config)
})
