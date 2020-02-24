<template>
  <v-dialog v-model="d_show" max-width="333" persistent scrollable>
    <v-card>
      <v-card-title class="headline">{{ d_title }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-btn @click="deletePin()" outlined large block>
              <v-icon v-for="n in d_pin.length" :key="n">mdi-lock</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="inputPin(7)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(8)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(9)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="inputPin(4)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(5)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(6)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="inputPin(1)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(2)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="inputPin(3)" outlined large>
              <v-icon>mdi-key</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="init()" color="error" large depressed block>Cancel</v-btn>
            <br />
            <v-btn @click="enterPin()" color="primary" large depressed block>Enter PIN</v-btn>
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
    d_title: 'PIN',
    d_show: false,
    d_loading: false,
    d_pin: ''
  }),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    async c_msg(msg) {
      if (msg.type === 'PinMatrixRequest') {
        this.d_show = true
        if (msg.data.type === 'PinMatrixRequestType_Current') this.d_title = 'PIN'
        if (msg.data.type === 'PinMatrixRequestType_NewFirst') this.d_title = 'Enter a new PIN'
        if (msg.data.type === 'PinMatrixRequestType_NewSecond') this.d_title = 'Re-enter PIN'
      } else {
        this.d_show = false
      }
      this.d_loading = false
      this.d_pin = ''
    }
  },
  methods: {
    inputPin(value) {
      if (this.d_pin.length > 8) return
      this.d_pin += value
    },
    deletePin() {
      if (window.event.keyCode === 13) return
      if (this.d_pin.length > 0) this.d_pin = this.d_pin.substr(0, this.d_pin.length - 1)
    },
    async enterPin() {
      this.d_loading = true
      await this.$usb.cmd('PinMatrixAck', { pin: this.d_pin })
    },
    async init() {
      await this.$usb.cmd('Initialize')
    }
  }
}
</script>
