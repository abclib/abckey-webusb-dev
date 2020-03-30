import 'vuetify/dist/vuetify.min.css'
import '@/styles/theme.scss'

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {}
    }
  }
})
