<template>
  <v-dialog v-model="d_show" max-width="555" persistent scrollable>
    <v-card>
      <v-card-title class="headline">
        <v-icon>mdi-gesture-tap-button</v-icon>
        <span>ButtonAck</span>
      </v-card-title>
      <v-card-text class="headline">Confirm the action on your device!</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_show: true
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
  methods: {}
}
</script>
