import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const originalPush: any = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const files = require.context('.', true, /\.ts$/)
const modules: Array<RouteConfig> = []
files.keys().forEach(k => {
  if (k === './index.ts') return
  modules.push(files(k).default)
})

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Connect'
  },
  {
    path: '/Connect',
    meta: {
      icon: 'mdi-usb',
      title: 'Connect'
    },
    component: () => import(/* webpackChunkName: "Connect" */ '@/views/Connect.vue')
  },
  {
    path: '/Loading',
    meta: {
      icon: 'mdi-reload',
      title: 'Loading'
    },
    component: () => import(/* webpackChunkName: "Loading" */ '@/views/Loading.vue')
  },
  {
    path: '/Bootloader',
    meta: {
      icon: 'mdi-tools',
      title: 'Bootloader'
    },
    component: () => import(/* webpackChunkName: "Bootloader" */ '@/views/Bootloader.vue')
  },
  {
    path: '/Pin',
    meta: {
      icon: 'mdi-key',
      title: 'PIN'
    },
    component: () => import(/* webpackChunkName: "Pin" */ '@/views/Pin.vue')
  },
  {
    path: '/Passphrase',
    meta: {
      icon: 'mdi-form-textbox-password',
      title: 'Passphrase'
    },
    component: () => import(/* webpackChunkName: "Passphrase" */ '@/views/Passphrase.vue')
  },
  ...modules
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    to || from
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  to || from
  next()
})

router.afterEach(to => {
  to || 1
  window.scrollTo(0, 0)
})

export default router
