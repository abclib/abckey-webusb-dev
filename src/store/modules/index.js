// https://vuex.vuejs.org/en/modules.html

const files = require.context('.', true, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  // Replace ./ and .js
  const path = key.replace(/(\.\/|\.js)/g, '')
  const [namespace, imported] = path.split('/')
  if (!modules[namespace]) {
    modules[namespace] = {
      namespaced: true
    }
  }
  modules[namespace][imported] = files(key).default
})

export default modules
