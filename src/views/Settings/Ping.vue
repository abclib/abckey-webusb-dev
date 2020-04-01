<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="initialize()" color="primary" large block>{{ $t('Initialize') }}</v-btn>
        <br />
        <v-btn @click="buttonProtection()" color="primary" large block>{{ $t('Button') }}</v-btn>
        <br />
        <v-btn @click="passphraseProtection()" color="primary" large block>{{ $t('Passphrase') }}</v-btn>
        <br />
        <v-btn @click="pinProtection()" color="primary" large block>{{ $t('Pin') }}</v-btn>
        <br />
        <v-row align="center">
          <v-col>
            <v-text-field v-model="d_msg" :label="$t('msg')" hide-details />
          </v-col>
          <v-col>
            <v-btn @click="testMsg()" color="primary" large block>{{ $t('Test Msg') }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <!-- Request -->
      <v-col cols="5">
        <v-textarea :label="$t('Request')" :value="d_request" filled readonly auto-grow></v-textarea>
      </v-col>
      <!-- Response  -->
      <v-col cols="5">
        <v-textarea :label="$t('Response')" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Ping',
  data: () => ({
    d_msg: 'ABCKEY',
    d_response: '',
    d_request: ''
  }),
  methods: {
    initialize() {
      this.$usb.cmd('Initialize')
    },
    async testMsg() {
      const proto = {
        message: this.d_msg
      }
      const result = await this.$usb.cmd('Ping', proto)
      this.d_request = `abckey.cmd("Ping", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async buttonProtection() {
      const proto = {
        button_protection: true
      }
      const result = await this.$usb.cmd('Ping', proto)
      this.d_request = `abckey.cmd("Ping", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async pinProtection() {
      const proto = {
        pin_protection: true
      }
      const result = await this.$usb.cmd('Ping', proto)
      this.d_request = `abckey.cmd("Ping", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async passphraseProtection() {
      const proto = {
        passphrase_protection: true
      }
      const result = await this.$usb.cmd('Ping', proto)
      this.d_request = `abckey.cmd("Ping", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Initialize: '复位',
        Button: '按键',
        Passphrase: '密码',
        Pin: 'PIN',
        'Test Msg': '通信',
        msg: '消息'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
