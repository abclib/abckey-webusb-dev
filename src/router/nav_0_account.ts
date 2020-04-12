const __DIR__ = 'Account'

const Bitcoin = {
  path: 'Bitcoin',
  meta: {
    title: 'Bitcoin'
  },
  component: () => import(`@/views/${__DIR__}/Bitcoin`)
}

export default {
  path: `/${__DIR__}`,
  redirect: `/${__DIR__}/Bitcoin`,
  meta: {
    icon: 'mdi-wallet',
    title: 'Account'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [Bitcoin]
}
