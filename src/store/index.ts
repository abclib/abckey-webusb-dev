/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex, { DispatchOptions } from 'vuex'

// Store functionality
import modules from './modules'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import VuexPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store: any = new Vuex.Store({
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

store.__s = (type: string, msg: any) => {
  if (!type) return store.state
  const _path = type.split('.')
  let _state: any = store.state
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

store.__d = (type: string, msg?: any, opt?: DispatchOptions | undefined) => store.dispatch(type, msg, opt)

store.__g = (type: string) => {
  if (!type) return store.getters
  return store.getters[type]
}

export default store
