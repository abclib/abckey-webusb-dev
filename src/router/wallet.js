const __DIR__ = 'wallet'

const Account = {
  path: 'Account',
  meta: {
    title: 'Account'
  },
  component: () => import(`@/views/${__DIR__}/Account`)
}

const Receive = {
  path: 'Receive',
  meta: {
    title: 'Receive'
  },
  component: () => import(`@/views/${__DIR__}/Receive`)
}

export default {
  path: `/${__DIR__}`,
  redirect: `/${__DIR__}/Account`,
  component: () => import(/* webpackChunkName: "wallet" */ `@/views/${__DIR__}/index`),
  children: [Account, Receive]
}
