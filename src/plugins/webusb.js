import Vue from 'vue'
import Store from '@/store'
import Usb from '@abckey/webusb'

const webusb = new Usb({
  debug: true
})

webusb.onConnect(e => {
  syncVuex(e)
})

webusb.onDisconnect(e => {
  syncVuex()
  Store.__s('dialog.buttonAck', false)
  console.log('onDisconnect', e)
})

webusb.onRead(e => {
  if (e.type === 'ButtonRequest') Store.__s('dialog.buttonAck', true)
  if (e.type === 'Success') Store.__s('dialog.buttonAck', false)
  if (e.type === 'Failure') Store.__s('dialog.buttonAck', false)
  console.log('onRead', e)
})

function syncVuex(e) {
  Store.__s('usb.vendorId', e ? e.vendorId : 0)
  Store.__s('usb.productId', e ? e.productId : 0)
  Store.__s('usb.manufacturer', e ? e.manufacturerName : '')
  Store.__s('usb.product', e ? e.productName : '')
  Store.__s('usb.serialNumber', e ? e.serialNumber : 0)
}

Vue.prototype.$usb = webusb
