const __DIR__ = 'Bitcoin'

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

const AddressMultisig = {
  path: 'AddressMultisig',
  meta: {
    title: 'Address Multisig'
  },
  component: () => import(`@/views/${__DIR__}/AddressMultisig`)
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
  children: [Account, PublicKey, Address, AddressMultisig, SignTransaction]
}
