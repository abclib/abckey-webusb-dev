<template>
  <v-dialog v-model="d_show" width="initial" overlay-opacity=".9" persistent>
    <v-chip x-large label>
      <span class="px-3 headline d-flex align-center">
        <v-icon left>mdi-gesture-tap-button</v-icon>
        <span>{{ $t('Please operate on the device!') }}</span>
      </span>
    </v-chip>
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
      if (this.$route.path === '/Initialize') return
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
