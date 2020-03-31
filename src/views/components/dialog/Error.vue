<template>
  <v-dialog v-model="d_show" max-width="555" persistent scrollable>
    <v-card>
      <v-card-title class="headline">{{ $t('Error') }}</v-card-title>
      <v-card-text class="headline">{{ $t(d_msg) }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="d_show = false">{{ $t('Close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_show: false,
    d_msg: ''
  }),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    c_msg(msg) {
      if (msg.type === 'Failure') {
        this.d_show = true
        this.d_msg = msg.data.message
      }
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Error: '错误',
        Close: '关闭'
      }
    }
  }
}
</script>
