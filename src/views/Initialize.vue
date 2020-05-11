<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-icon size="200" color="info">mdi-wallet-plus</v-icon>
        <h1 class="display-1 mt-7">{{ $t('Initialize') }}</h1>
        <div class="mt-7">
          <v-btn class="mx-2" color="primary" @click="create()"><v-icon left>mdi-wallet</v-icon>{{ $t('Create') }}</v-btn>
          <v-btn class="mx-2" @click="d_reset = 1"><v-icon left>mdi-backup-restore</v-icon>{{ $t('Recover') }}</v-btn>
        </div>
      </div>
    </v-layout>

    <v-dialog :value="d_create" width="initial" overlay-opacity=".9" persistent>
      <v-card>
        <v-card-title class="headline"> <v-icon left>mdi-gesture-tap-button</v-icon>{{ $t('Please operate on the device!') }}</v-card-title>
        <v-card-text>{{ $t('You need to read and agree to our Terms of Service.') }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" href="#" target="_blank" text>{{ $t('Terms of Service >>') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Initialize',
  data: () => ({
    d_create: 0
  }),
  methods: {
    async create() {
      this.d_create = 1
      const proto = {
        display_random: false,
        strength: 256, // 12word: 128, 18word: 192, 24word: 256,
        passphrase_protection: false,
        pin_protection: false,
        language: 'en-US',
        label: 'ABCKEY',
        skip_backup: true,
        no_backup: false,
        backup_type: 0 //Bip39: 0, Slip39_Basic: 1, Slip39_Advanced: 2
      }
      await this.$usb.resetDevice(proto)
      this.$router.push({ path: `/Loading` })
    },
    async recover() {
      //
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Initialize: '初始化',
        Create: '创建',
        Recover: '恢复',
        'Please operate on the device!': '请在设备上操作！',
        'You need to read and agree to our Terms of Service.': '您需要阅读并同意我们的服务条款。',
        'Terms of Service >>': '服务条款 >>'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog111 {
  z-index: 999 !important;
}
</style>
