<template>
  <v-dialog v-model="d_show" max-width="333" persistent scrollable>
    <v-card>
      <v-card-title class="headline">Failure</v-card-title>
      <v-card-text class="headline">{{ this.d_msg }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="d_show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_msg: null,
    d_show: false
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
  methods: {}
}
</script>
