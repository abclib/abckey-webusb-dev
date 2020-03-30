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
}

const webusb = new Usb({
  debug: true
})

webusb.onAdd(e => {
  syncVuex(e)
})

webusb.onErr(e => {
  Store.__s('usb.err', e.message)
  Router.push('/Connect')
})

webusb.onMsg(e => {
  Store.__s('usb.msg', JSON.parse(JSON.stringify(e)))
  syncVuex(e.data)
})

Vue.prototype.$usb = webusb
