import Vue from 'vue'
import Store from '@/store'
import Usb from '@abckey/webusb'

const webusb = new Usb({
  debug: true
})

webusb.onAdd(e => {
  syncVuex(e)
})

webusb.onErr(e => {
  syncVuex()
  console.log('onErr', e)
})

webusb.onMsg(e => {
  Store.__s('usb.msg', JSON.parse(JSON.stringify(e)))
  console.log('onMsg', e)
})

function syncVuex(e) {
  Store.__s('usb.vendorId', e ? e.vendorId : 0)
  Store.__s('usb.productId', e ? e.productId : 0)
  Store.__s('usb.manufacturer', e ? e.manufacturerName : '')
  Store.__s('usb.product', e ? e.productName : '')
  Store.__s('usb.serialNumber', e ? e.serialNumber : 0)
}

Vue.prototype.$usb = webusb
