<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <p>Test if the device is alive, device sends back the message in Success response</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="buttonProtection()" color="primary" large block>Button Protection</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn @click="pinProtection(false)" color="primary" large block>Pin Protection</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn @click="passphraseProtection(false)" color="primary" large block>Passphrase Protectionn</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-text-field v-model="d_msg" label="msg" hide-details />
          </v-col>
          <v-col cols="4">
            <v-btn @click="testMsg()" color="primary" large block>Test Msg</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
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
  }
}
</script>

<style lang="scss" scoped></style>
