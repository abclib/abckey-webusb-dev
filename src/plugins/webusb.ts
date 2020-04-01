import Vue from 'vue'
import Router from '@/router'
import Store from '@/store'
import Usb from '@abckey/webusb'

function syncVuex(e: any) {
  Store.__s('usb.usbVendorId', e ? e.vendorId : 0)
  Store.__s('usb.usbProductId', e ? e.productId : 0)
  Store.__s('usb.usbManufacturer', e ? e.manufacturerName : '')
  Store.__s('usb.usbProduct', e ? e.productName : '')
  Store.__s('usb.usbSerialNumber', e ? e.serialNumber : 0)
  Store.__s('usb.label', e ? e.label : 0)
  Store.__s('usb.msg', e ? e.data : null)
}

const webusb = new Usb({
  debug: true
})

webusb.onAdd(e => {
  syncVuex(e)
})

webusb.onErr(e => {
  Store.__s('usb.err', e)
  Router.push('/Connect')
})

webusb.onMsg(e => {
  const msg = JSON.parse(JSON.stringify(e))
  syncVuex(msg)
  if (msg.type === 'PinMatrixRequest') Router.push({ path: `/Pin` })
  else if (msg.type === 'PassphraseRequest') Router.push({ path: `/Passphrase` })
})

Vue.prototype.$usb = webusb
