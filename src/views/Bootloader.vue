<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-icon size="200" color="info">mdi-tools</v-icon>
        <h1 class="display-1 mt-7">{{ $t('Bootloader') }}</h1>
        <div class="mt-7">
          <v-btn class="mx-2" color="primary" @click="upgrade()"><v-icon left>mdi-transfer-up</v-icon>{{ $t('Upgrade') }}</v-btn>
          <v-btn class="mx-2" color="error" @click="d_reset = 1"><v-icon left>mdi-eraser</v-icon>{{ $t('Reset') }}</v-btn>
        </div>
        <v-overlay :value="d_overlay" z-index="99" opacity=".7"></v-overlay>
      </div>
    </v-layout>

    <v-dialog :value="d_upgrade === 1" max-width="333" overlay-opacity=".9" persistent>
      <v-card>
        <v-card-title class="headline">{{ $t('Updating...') }}</v-card-title>
        <v-card-text>
          <v-progress-linear color="primary" height="9" indeterminate rounded></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog :value="d_reset === 1" max-width="333" overlay-opacity=".9" persistent>
      <v-card>
        <v-card-title class="headline">{{ $t('Factory reset?') }}</v-card-title>
        <v-card-text>{{ $t('You can reset the Device to factory defaults if you need to do so.') }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="d_reset = 2" text>{{ $t('Next') }}</v-btn>
          <v-btn color="success" @click="d_reset = 0" text>{{ $t('Cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog :value="d_reset === 2" max-width="333" overlay-opacity=".9" persistent>
      <v-card>
        <v-card-title class="headline">{{ $t('Warning!') }}</v-card-title>
        <v-card-text>{{ $t('Factory reset will erase all sensitive data, including the seed from the device, as well as the firmware.') }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="wipeDevice()" text>{{ $t('Wipe') }}</v-btn>
          <v-btn color="success" @click="d_reset = 0" text>{{ $t('Cancel') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog :value="d_reset === 3 || d_upgrade === 2" width="initial" overlay-opacity=".9" persistent>
      <v-chip x-large label>
        <span class="px-3 headline">
          <v-icon left>mdi-gesture-tap-button</v-icon>
          <span>{{ $t('Please operate on the device!') }}</span>
        </span>
      </v-chip>
    </v-dialog>
    <v-dialog :value="d_reset === 4 || d_upgrade === 3" width="initial" overlay-opacity=".9" persistent>
      <v-chip x-large label>
        <span class="px-3 headline">
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
  name: 'Connect',
  data: () => ({
    d_overlay: false,
    d_upgrade: 0,
    d_reset: 0
  }),
  computed: {
    c_fw: vm => vm.$store.__s('usb.firmwarePresent')
  },
  methods: {
    async upgrade() {
      this.d_upgrade = 1
      if (this.c_fw) this.d_upgrade = 2
      const msg = await this.$usb.cmd('FirmwareErase', {})
      if (msg.type === 'Failure') return (this.d_upgrade = 3)
      this.d_upgrade = 1
      const { data } = await Axios.get(`/bin/core.bin`, { responseType: 'arraybuffer' })
      if (data) await this.$usb.cmd('FirmwareUpload', { payload: Buffer.from(data) })
      this.d_upgrade = 3
    },
    async wipeDevice() {
      this.d_reset = 3
      await this.$usb.cmd('WipeDevice', {})
      this.d_reset = 4
    }
  },
  created() {
    if (!this.c_fw) this.upgrade()
  },
  i18n: {
    messages: {
      zhCN: {
        Bootloader: '引导程序',
        Upgrade: '升级',
        Reset: '重置',
        Next: '下一步',
        Wipe: '擦除',
        Cancel: '取消',
        'Operation aborted.': '操作已中止',
        'Updating...': '正在更新……',
        'Factory reset?': '恢复出厂设置？',
        'Warning!': '警告！',
        'You can reset the Device to factory defaults if you need to do so.': '您可以根据需要将设备重置为出厂默认设置。',
        'All data will be deleted!': '所有数据将被删除！',
        'Factory reset will erase all sensitive data, including the seed from the device, as well as the firmware.':
          '恢复出厂设置将擦除所有敏感数据，包括设备的种子以及固件。',
        'Please operate on the device!': '请在设备上操作！',
        'Please replug the device!': '请重新插拔设备！'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
