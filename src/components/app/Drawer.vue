<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-btn block @click="add()" :color="c_pro ? 'success' : 'error'">
        <v-icon left>mdi-plus</v-icon>
        <span>{{ c_pro ? c_pro : 'Check for devices' }}</span>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn outlined block @click="init()">
        <v-icon left>mdi-refresh</v-icon>
        <span>Initialize</span>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn outlined block @click="getFeatures()">
        <v-icon left>mdi-information-outline</v-icon>
        <span>Get Features</span>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn outlined block @click="clean()">
        <v-icon left>mdi-logout-variant</v-icon>
        <span>Clear Session</span>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-group v-for="nav in d_nav" :key="nav.title" v-model="nav.active" :prepend-icon="nav.icon" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="nav.title"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="snav in nav.snav" :key="snav.title" :to="snav.path">
          <v-list-item-content>
            <v-list-item-title v-text="snav.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    d_nav: [
      {
        icon: 'mdi-wallet',
        title: 'Wallet',
        snav: [
          {
            title: 'Account',
            path: '/Wallet/Account'
          },
          {
            title: 'Receive',
            path: '/Wallet/Receive'
          }
        ]
      },
      {
        icon: 'mdi-alpha-a-circle-outline',
        title: 'Bitcoin',
        snav: [
          {
            title: 'Get Public Key',
            path: '/Bitcoin/GetPublicKey'
          },
          {
            title: 'Get Address',
            path: '/Bitcoin/GetAddress'
          },
          {
            title: 'Sign Transaction',
            path: '/Bitcoin/SignTransaction'
          }
        ]
      },
      {
        icon: 'mdi-alpha-b-circle-outline',
        title: 'Ethereum',
        snav: [
          {
            title: 'Get Public Key',
            path: '/Bitcoin/GetPublicKey'
          },
          {
            title: 'Get Address',
            path: '/Bitcoin/GetAddress'
          }
        ]
      },
      {
        icon: 'mdi-settings-outline',
        title: 'Device Settings',
        snav: [
          {
            title: 'Ping',
            path: '/Settings/Ping'
          },
          {
            title: 'Apply Settings',
            path: '/Settings/ApplySettings'
          },
          {
            title: 'Change Pin',
            path: '/Settings/ChangePin'
          },
          {
            title: 'Wipe Device',
            path: '/Settings/WipeDevice'
          },
          {
            title: 'Recovery Device',
            path: '/Settings/RecoveryDevice'
          },
          {
            title: 'Reset Device',
            path: '/Settings/ResetDevice'
          },
          {
            title: 'Backup Device',
            path: '/Settings/BackupDevice'
          }
        ]
      },
      {
        icon: 'mdi-puzzle-outline',
        title: 'ABC1 Extension',
        snav: [
          {
            title: 'User Set Public Key',
            path: '/abc1/UserSetPublicKey'
          },
          {
            title: 'User Get Mnemonics',
            path: '/abc1/UserGetMnemonics'
          }
        ]
      }
    ]
  }),
  computed: {
    c_pro: vm => vm.$store.__s('usb.product')
  },
  methods: {
    async add() {
      await this.$usb.add()
    },
    async init() {
      await this.$usb.cmd('Initialize')
    },
    async clean() {
      await this.$usb.cmd('ClearSession')
    },
    async getFeatures() {
      await this.$usb.cmd('GetFeatures')
    }
  }
}
</script>

<style lang="scss"></style>
