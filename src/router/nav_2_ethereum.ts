const __DIR__ = 'Ethereum'

const Account = {
  path: 'Account',
  meta: {
    title: 'Account'
  },
  component: () => import(`@/views/${__DIR__}/Account`)
}

const PublicKey = {
  path: 'PublicKey',
  meta: {
    title: 'PublicKey'
  },
  component: () => import(`@/views/${__DIR__}/PublicKey`)
}

const Address = {
  path: 'Address',
  meta: {
    title: 'Address'
  },
  component: () => import(`@/views/${__DIR__}/Address`)
}

const Transaction = {
  path: 'Transaction',
  meta: {
    title: 'Transaction'
  },
  component: () => import(`@/views/${__DIR__}/Transaction`)
}

export default {
  path: `/${__DIR__}`,
  redirect: `/${__DIR__}/GetPublicKey`,
  meta: {
    icon: 'mdi-ethereum',
    title: 'Ethereum'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [Account, PublicKey, Address, Transaction]
}
