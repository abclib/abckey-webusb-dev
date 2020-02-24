const __DIR__ = 'bitcoin'

const GetPublicKey = {
  path: 'GetPublicKey',
  meta: {
    title: 'Get PublicKey'
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
  component: () => import(/* webpackChunkName: "Bitcoin" */ `@/views/${__DIR__}/index`),
  redirect: `/${__DIR__}/GetPublicKey`,
  children: [GetPublicKey, GetAddress, SignTransaction]
}
