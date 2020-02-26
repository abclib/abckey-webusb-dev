const __DIR__ = 'bitcoin'

const GetPublicKey = {
  path: 'GetPublicKey',
  meta: {
    title: 'Get Public Key'
  },
  component: () => import(`@/views/${__DIR__}/GetPublicKey`)
}

const GetAddress = {
  path: 'GetAddress',
  meta: {
    title: 'Get Address'
  },
  component: () => import(`@/views/${__DIR__}/GetAddress`)
}

const SignTransaction = {
  path: 'SignTransaction',
  meta: {
    title: 'Sign Transaction'
  },
  component: () => import(`@/views/${__DIR__}/SignTransaction`)
}

export default {
  path: `/${__DIR__}`,
  redirect: `/${__DIR__}/GetPublicKey`,
  component: () => import(/* webpackChunkName: "Bitcoin" */ `@/views/${__DIR__}/index`),
  children: [GetPublicKey, GetAddress, SignTransaction]
}
