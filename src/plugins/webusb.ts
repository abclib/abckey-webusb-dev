import Vue from 'vue'
import Router from '@/router'
import Store from '@/store'
import Usb from '@abckey/webusb'

const webusb = new Usb({
  debug: true
})

webusb.onAdd(e => {
  Store.__s('usb.usbVendorId', e ? e.vendorId : 0)
  Store.__s('usb.usbProductId', e ? e.productId : 0)
  Store.__s('usb.usbSerialNumber', e ? e.serialNumber : 0)
  Store.__s('usb.usbManufacturer', e ? e.manufacturerName : '')
  Store.__s('usb.usbProduct', e ? e.productName : '')
})

webusb.onErr(e => {
  Store.__s('usb.err', e)
})

webusb.onMsg(e => {
  const msg = JSON.parse(JSON.stringify(e))
  Store.__s('usb.msg', msg)
  if (msg.type === 'Features') {
    Store.__s('usb.label', msg.data.label || msg.data.vendor)
    Store.__s('usb.firmwarePresent', msg.data.firmware_present)
  } else if (msg.type === 'PinMatrixRequest') Router.push({ path: `/Pin` })
  else if (msg.type === 'PassphraseRequest') Router.push({ path: `/Passphrase` })
})

Vue.prototype.$usb = webusb
