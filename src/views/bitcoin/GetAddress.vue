<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="getAddr()" color="primary" large block>Get Address</v-btn>
          </v-col>
          <v-col>
            <v-checkbox v-model="d_showDisplay" label="show_display"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-text-field v-model="d_purpose" type="number" label="purpose" hide-details />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="d_coinType" type="number" label="coin_type" hide-details />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="d_account" type="number" label="account" hide-details />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="d_change" type="number" label="change" hide-details />
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="d_addressIndex" type="number" label="address_index" hide-details />
          </v-col>
        </v-row>
        <v-row align="center"> </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <ul>
            <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki</a></li>
            <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">https://github.com/satoshilabs/slips/blob/master/slip-0044.md</a></li>
          </ul>
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
  name: 'GetAddress',
  data: () => ({
    d_purpose: 49,
    d_coinType: 0,
    d_account: 0,
    d_change: 0,
    d_addressIndex: 0,
    d_showDisplay: false,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async getAddr() {
      const proto = {
        address_n: [(this.d_purpose | 0x80000000) >>> 0, (this.d_coinType | 0x80000000) >>> 0, (this.d_account | 0x80000000) >>> 0, this.d_change, this.d_addressIndex],
        script_type: this.d_purpose === 49 ? 4 : 0,
        show_display: this.d_showDisplay
      }
      const result = await this.$usb.cmd('GetAddress', proto)
      this.d_request = `abckey.cmd("GetAddress", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
