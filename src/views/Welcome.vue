<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-icon size="200" color="info">mdi-shield-alert</v-icon>
        <h1 class="display-1 mt-7">{{ $t('Welcome to ABCKEY') }}</h1>
        <p class="text--secondary mt-3">{{ $t('To be safe, we did not install firmware at the factory.') }}</p>
        <div class="mt-7">
          <v-btn class="mx-2" color="primary" @click="install()"><v-icon left>mdi-download</v-icon>{{ $t('Install Firmware') }}</v-btn>
        </div>
      </div>
    </v-layout>

    <v-dialog :value="d_install === 1" max-width="333" overlay-opacity=".9" persistent>
      <v-card>
        <v-card-title class="headline">{{ $t('Updating...') }}</v-card-title>
        <v-card-text>
          <v-progress-linear color="primary" height="9" indeterminate rounded></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog :value="d_install === 2" width="initial" overlay-opacity=".9" persistent>
      <v-chip x-large label>
        <span class="px-3 headline d-flex align-center">
          <v-icon left>mdi-power-plug-off</v-icon>
          <span>{{ $t('Please replug the device!') }}</span>
        </span>
      </v-chip>
    </v-dialog>
  </v-container>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Welcome',
  data: () => ({
    d_install: 0
  }),
  methods: {
    async install() {
      this.d_install = 1
      const msg = await this.$usb.cmd('FirmwareErase', {})
      if (msg.type === 'Failure') return (this.d_install = 2)
      const { data } = await Axios.get(`/bin/core.bin`, { responseType: 'arraybuffer' })
      if (data) await this.$usb.cmd('FirmwareUpload', { payload: Buffer.from(data) })
      this.d_install = 2
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Welcome to ABCKEY': '欢迎使用 ABCKEY',
        'Install Firmware': '安装固件',
        'To be safe, we did not install firmware at the factory.': '为了安全，我们在出厂时未安装固件。',
        'Updating...': '正在更新……',
        'Please replug the device!': '请重新插拔设备！'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
