import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const files = require.context('.', true, /\.js$/)
const modules = []
files.keys().forEach(key => {
  if (key === './index.js') return
  modules.push(files(key).default)
})

const routes = [
  {
    path: '/',
    redirect: '/GetPublicKey'
  },
  {
    meta: {
      title: 'GetPublicKey'
    },
    path: '/GetPublicKey',
    component: () => import(/* webpackChunkName: "GetPublicKey" */ '@/views/GetPublicKey')
  },
  {
    meta: {
      title: 'GetAddress'
    },
    path: '/GetAddress',
    component: () => import(/* webpackChunkName: "GetAddress" */ '@/views/GetAddress')
  },
  {
    meta: {
      title: 'Settings'
    },
    path: '/Settings',
    component: () => import(/* webpackChunkName: "Settings" */ '@/views/Settings')
  },
  ...modules
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  return { y: 0 }
}

const router = new Router({
  base: process.env.BASE_URL,
  path: '/',
  routes,
  scrollBehavior,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
