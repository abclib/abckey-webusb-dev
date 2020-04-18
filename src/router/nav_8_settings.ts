const __DIR__ = 'Settings'

const ApplySettings = {
  path: 'ApplySettings',
  meta: {
    title: 'Apply Settings'
  },
  component: () => import(`@/views/${__DIR__}/ApplySettings`)
}

const ChangePin = {
  path: 'ChangePin',
  meta: {
    title: 'Change Pin'
  },
  component: () => import(`@/views/${__DIR__}/ChangePin`)
}

const ResetDevice = {
  path: 'ResetDevice',
  meta: {
    title: 'Reset Device'
  },
  component: () => import(`@/views/${__DIR__}/ResetDevice`)
}

const RecoveryDevice = {
  path: 'RecoveryDevice',
  meta: {
    title: 'Recovery Device'
  },
  component: () => import(`@/views/${__DIR__}/RecoveryDevice`)
}

const Ping = {
  path: 'Ping',
  meta: {
    title: 'Ping'
  },
  component: () => import(`@/views/${__DIR__}/Ping`)
}

export default {
  path: `/${__DIR__}`,
  meta: {
    icon: 'mdi-cog-outline',
    title: 'Device Settings'
  },
  component: () => import(`@/views/${__DIR__}/index`),
  children: [ApplySettings, ChangePin, ResetDevice, RecoveryDevice, Ping]
}
