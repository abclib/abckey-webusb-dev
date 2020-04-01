<template>
  <v-dialog v-model="d_show" width="initial" overlay-opacity=".7" persistent>
    <v-chip @click="close()" x-large label>
      <span class="px-3 headline">
        <v-icon left>mdi-message-alert</v-icon>
        <span>{{ $t(d_msg) }}</span>
        <v-icon color="red darken-3" right>mdi-close-circle-outline</v-icon>
      </span>
    </v-chip>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_show: false,
    d_msg: ''
  }),
  computed: {
    c_err: vm => vm.$store.__s('usb.err'),
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    c_msg(msg) {
      if (msg.type === 'Failure') {
        this.d_show = true
        this.d_msg = msg.data.message
      }
    },
    c_err(err) {
      if (!err) return
      this.d_show = true
      this.d_msg = err.message
    }
  },
  methods: {
    close() {
      this.$store.__s('usb.err', null)
      this.d_show = false
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Error: '错误',
        Close: '关闭',
        'Unpaired device.': '未配对设备。',
        'No device selected.': '未选择设备。',
        'Unknown message': '未知消息。',
        'The transfer was cancelled.': '传输已取消。',
        'Device not initialized': '设备未初始化。',
        "Cannot read property 'requestDevice' of undefined": '您的浏览器未支持 WebUSB。'
      }
    }
  }
}
</script>
