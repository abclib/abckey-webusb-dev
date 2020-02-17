import Vue from 'vue'

export default {
  async add({ commit }) {
    console.log(Vue.$usb)
    commit('__set', { key: 'productName', val: 1 })
  }
}
