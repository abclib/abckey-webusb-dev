const __DIR__ = 'ABC1'

const UserSetPublickey = {
  path: 'UserSetPublickey',
  meta: {
    title: 'User Set Publickey'
  },
  component: () => import(`@/views/${__DIR__}/UserSetPublickey`)
}

const UserGetMnemonics = {
  path: 'UserGetMnemonics',
  meta: {
    title: 'User Get Mnemonics'
  },
  component: () => import(`@/views/${__DIR__}/UserGetMnemonics`)
}

export default {
  path: `/${__DIR__}`,
  meta: {
    icon: 'mdi-puzzle-outline',
    title: 'ABC1 Extension'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [UserSetPublickey, UserGetMnemonics]
}
