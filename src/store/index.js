/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import modules from './modules'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import VuexPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  actions,
  getters,
  mutations,
  state,
  strict: true,
  plugins: [
    VuexPersistedState({
      paths: ['app.language']
    })
  ]
})

store.__s = (type, msg) => {
  if (!type) return store.state
  let _path = type.split('.')
  let _state = store.state
  for (let i = 0; i < _path.length; i++) {
    if (_state[_path[i]] !== undefined) _state = _state[_path[i]]
    else _state = undefined
  }
  if (msg !== undefined && _path.length === 2) {
    store.commit({
      type: _path[0] + '/__set',
      key: _path[1],
      val: msg
    })
  }
  return _state
}

store.__d = (type, msg) => store.dispatch(type, msg)

store.__g = type => {
  if (!type) return store.getters
  return store.getters[type]
}

export default store
