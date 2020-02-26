<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <p>Start recovery workflow asking user for specific words of mnemonic</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-btn @click="recoveryDevice()" color="primary" large block>Recovery Device</v-btn>
          </v-col>
          <v-col cols="4">
            <v-btn @click="checkSeed()" color="success" large block>Check Seed</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-select
              v-model="d_wordCount"
              :items="[
                { text: '12 word', value: 12 },
                { text: '18 word', value: 18 },
                { text: '24 word', value: 24 }
              ]"
              label="word_count"
              hide-details
            ></v-select>
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
  name: 'RecoveryDevice',
  data: () => ({
    d_wordCount: 24,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async recoveryDevice() {
      const proto = {
        word_count: this.d_wordCount,
        passphrase_protection: false,
        pin_protection: false,
        language: 'en-US',
        label: 'ABCKEY',
        enforce_wordlist: false
      }
      const result = await this.$usb.cmd('RecoveryDevice', proto)
      this.d_request = `abckey.cmd("RecoveryDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async checkSeed() {
      const proto = {
        dry_run: true
      }
      const result = await this.$usb.cmd('RecoveryDevice', proto)
      this.d_request = `abckey.cmd("RecoveryDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
