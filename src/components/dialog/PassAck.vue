<template>
  <v-dialog v-model="d_show" max-width="333" persistent scrollable>
    <v-card>
      <v-card-title class="headline"></v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field v-model="d_passphrase" :type="d_eye ? 'text' : 'password'" label="Passphrase" :append-icon="d_eye ? 'mdi-eye' : 'mdi-eye-off'" @click:append="d_eye = !d_eye" outlined hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="init()" color="error" large depressed block>Cancel</v-btn>
            <br />
            <v-btn @click="enterPass()" color="primary" large depressed block>Enter Passphrase</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-overlay :value="d_loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_eye: false,
    d_show: false,
    d_passphrase: '',
    d_loading: false
  }),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    async c_msg(msg) {
      if (msg.type === 'PassphraseRequest') this.d_show = true
      else this.d_show = false
      this.d_loading = false
      this.d_pin = ''
    }
  },
  methods: {
    async enterPass() {
      this.d_loading = true
      await this.$usb.cmd('PassphraseAck', { passphrase: this.d_passphrase })
    },
    async init() {
      await this.$usb.cmd('Initialize')
    }
  }
}
</script>
