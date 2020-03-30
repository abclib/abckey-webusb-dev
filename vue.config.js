const IS_DEV = process.env.NODE_ENV === 'production' ? false : true

const vueBuild = c => {
  c.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseInlineTagWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: false,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      },
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}

const vueServe = c => {
  c.plugin('html').tap(([options]) => [
    Object.assign(options, {
      minify: false,
      inject: true,
      chunksSortMode: 'none'
    })
  ])
}

const vueConfig = {
  publicPath: IS_DEV ? '/' : '/abckey-webusb-dev/',
  outputDir: 'docs',
  productionSourceMap: true,
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
  chainWebpack: c => (IS_DEV ? vueServe(c) : vueBuild(c))
}

module.exports = vueConfig
