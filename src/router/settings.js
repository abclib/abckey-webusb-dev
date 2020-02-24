const __DIR__ = 'settings'

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

const Ping = {
  path: 'Ping',
  meta: {
    title: 'Ping'
  },
  component: () => import(`@/views/${__DIR__}/Ping`)
}

const WipeDevice = {
  path: 'WipeDevice',
  meta: {
    title: 'Wipe Device'
  },
  component: () => import(`@/views/${__DIR__}/WipeDevice`)
}

const ResetDevice = {
  path: 'ResetDevice',
  meta: {
    title: 'Reset Device'
  },
  component: () => import(`@/views/${__DIR__}/ResetDevice`)
}

const BackupDevice = {
  path: 'BackupDevice',
  meta: {
    title: 'Backup Device'
  },
  component: () => import(`@/views/${__DIR__}/BackupDevice`)
}

const RecoveryDevice = {
  path: 'RecoveryDevice',
  meta: {
    title: 'Recovery Device'
  },
  component: () => import(`@/views/${__DIR__}/RecoveryDevice`)
}

export default {
  path: `/${__DIR__}`,
  component: () => import(/* webpackChunkName: "Bitcoin" */ `@/views/${__DIR__}/index`),
  children: [ApplySettings, ChangePin, Ping, WipeDevice, ResetDevice, BackupDevice, RecoveryDevice]
}
