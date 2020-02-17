import Vue from 'vue'
import UpperFirst from 'lodash/upperFirst'
import CamelCase from 'lodash/camelCase'

const files = require.context('.', true, /\.vue$/)

files.keys().forEach(key => {
  const config = files(key)
  const name = UpperFirst(CamelCase(key.replace(/^\.\//, '').replace(/\.\w+$/, '')))
  Vue.component(name, config.default || config)
})
