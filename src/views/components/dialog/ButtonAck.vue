<template>
  <v-dialog v-model="d_show" width="initial" overlay-opacity=".9" persistent>
    <v-card>
      <v-card-title class="headline d-flex justify-center">
        <v-icon size="24">mdi-gesture-tap-button</v-icon>
        <span class="ml-1">{{ $t('Please operate on the device!') }}</span>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_show: false
  }),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    c_msg(msg) {
      if (msg.type === 'ButtonRequest') this.d_show = true
      else this.d_show = false
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Please operate on the device!': '请在设备上操作！'
      }
    }
  }
}
</script>
