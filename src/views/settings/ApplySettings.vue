<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <p>Change language and/or label of the device</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="usePassphrase(true)" color="success" large block>Enable Passphrase</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn @click="usePassphrase(false)" color="error" large block>Disabled Passphrase</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-text-field v-model="d_label" label="label" hide-details />
          </v-col>
          <v-col cols="4">
            <v-btn @click="setLabel()" color="primary" large block>Set Label</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-text-field v-model="d_dalay" type="number" label="auto_lock_delay_ms" hide-details />
          </v-col>
          <v-col cols="4">
            <v-btn @click="lockDelay()" color="primary" large block>Auto Lock Delay (ms)</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ApplySettings',
  data: () => ({
    d_label: 'ABCKEY',
    d_dalay: 7000,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async setLabel() {
      const proto = {
        label: this.d_label
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async lockDelay() {
      const proto = {
        auto_lock_delay_ms: this.d_dalay
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async usePassphrase(use_passphrase) {
      const proto = {
        use_passphrase
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
