<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-card width="333">
          <v-card-title class="headline">{{ $t(d_title) }}</v-card-title>
          <v-card-text>
            <div class="input">
              <v-btn @click="deletePin()" outlined block large>
                <v-icon v-for="n in d_pin.length" :key="n">mdi-lock</v-icon>
              </v-btn>
              <v-btn class="backspace" @click.stop="deletePin()" color="error" icon>
                <v-icon>mdi-backspace</v-icon>
              </v-btn>
            </div>
            <div class="btns mt-3">
              <v-btn class="btn" v-for="(value, index) in d_btns" :key="index" @click="inputPin(value)" :disabled="d_pin.length > 8" outlined large>
                <v-icon>mdi-key</v-icon>
              </v-btn>
            </div>
            <v-btn class="mt-3" @click="unlock()" color="primary" :disabled="!d_pin.length" large depressed block>{{ $t('Unlock') }}</v-btn>
            <v-btn class="mt-3" @click="cancel()" color="secondary" large depressed block>{{ $t('Cancel') }}</v-btn>
          </v-card-text>
        </v-card>
        <v-overlay :value="d_loading" z-index="99">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Pin',
  data: () => ({
    d_title: 'PIN',
    d_loading: false,
    d_pin: '',
    d_btns: [7, 8, 9, 4, 5, 6, 1, 2, 3]
  }),
  methods: {
    inputPin(value) {
      if (this.d_pin.length > 8) return
      this.d_pin += value
    },
    deletePin() {
      if (window.event.keyCode === 13) return
      if (this.d_pin.length > 0) this.d_pin = this.d_pin.substr(0, this.d_pin.length - 1)
    },
    async unlock() {
      this.d_loading = true
      const msg = await this.$usb.cmd('PinMatrixAck', { pin: this.d_pin })
      if (msg.type === 'PinMatrixRequest') {
        if (msg.data.type === 'PinMatrixRequestType_Current') this.d_title = 'PIN'
        if (msg.data.type === 'PinMatrixRequestType_NewFirst') this.d_title = 'Enter a new PIN'
        if (msg.data.type === 'PinMatrixRequestType_NewSecond') this.d_title = 'Re-enter PIN'
      } else if (msg.type === 'PassphraseRequest') this.$router.push({ path: `/Passphrase` })
      else this.$router.push({ path: `/Loading` })
      this.d_loading = false
    },
    async cancel() {
      this.$router.push({ path: `/Loading` })
    }
  },
  i18n: {
    messages: {
      zhCN: {
        PIN: 'PIN 码',
        Unlock: '解锁',
        Cancel: '取消',
        'Enter a new PIN': '输入一个新PIN码',
        'Re-enter PIN': '再次输入PIN码'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  .backspace {
    position: absolute;
    right: 0px;
    top: 4px;
  }
}

.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 0;
  .btn {
    width: 30%;
    margin: 10px 0;
  }
}
</style>
