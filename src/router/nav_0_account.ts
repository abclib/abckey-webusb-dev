const __DIR__ = 'Account'

const Bitcoin = {
  path: 'Bitcoin',
  meta: {
    title: 'Bitcoin'
  },
  component: () => import(`@/views/${__DIR__}/Bitcoin`)
}

const Ethereum = {
  path: 'Ethereum',
  meta: {
    title: 'Ethereum'
  },
  component: () => import(`@/views/${__DIR__}/Ethereum`)
}

export default {
  path: `/${__DIR__}`,
  redirect: `/${__DIR__}/Bitcoin`,
  meta: {
    icon: 'mdi-wallet',
    title: 'Account'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [Bitcoin, Ethereum]
}
