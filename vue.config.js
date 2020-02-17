var vueServe = require('./vue.serve')
var vueBuild = require('./vue.build')

const IS_DEV = process.env.NODE_ENV === 'production' ? false : true

module.exports = {
  productionSourceMap: IS_DEV,
  integrity: true,
  css: {
    extract: false,
    sourceMap: IS_DEV,
    loaderOptions: {}
  },
  devServer: {
    open: true,
    port: 8888,
    proxy: null
  },
  configureWebpack: {
    externals: {
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios'
    }
  },
  transpileDependencies: ['vuetify'],
  chainWebpack: webpackConfig => {
    IS_DEV ? vueServe(webpackConfig) : vueBuild(webpackConfig)
  }
}
