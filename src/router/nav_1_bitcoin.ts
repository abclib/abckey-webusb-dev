const __DIR__ = 'Bitcoin'

const Account = {
  path: 'Account',
  meta: {
    title: 'Account'
  },
  component: () => import(`@/views/${__DIR__}/Account`)
}

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
  meta: {
    icon: 'mdi-bitcoin',
    title: 'Bitcoin'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [Account, GetPublicKey, GetAddress, SignTransaction]
}
