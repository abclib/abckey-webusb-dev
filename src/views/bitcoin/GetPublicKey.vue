<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="getPbk()" color="primary" large block>Get Public Key</v-btn>
          </v-col>
          <v-col>
            <v-checkbox v-model="d_showDisplay" label="show_display"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field v-model="d_path" label="path" hide-details />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="d_scriptType"
              :items="[
                { text: 'SPENDADDRESS', value: 0 },
                { text: 'SPENDMULTISIG', value: 1 },
                { text: 'EXTERNAL', value: 2 },
                { text: 'SPENDWITNESS', value: 3 },
                { text: 'SPENDP2SHWITNESS', value: 4 }
              ]"
              label="script_type"
              hide-details
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <ul>
            <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki</a></li>
            <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki</a></li>
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
  name: 'GetPublicKey',
  data: () => ({
    d_path: `m/49'/0'/0'/0/0`,
    d_scriptType: 0,
    d_showDisplay: false,
    d_response: '',
    d_request: ''
  }),
  computed: {
    c_addressN() {
      let address_n = []
      let path = this.d_path.match(/\/[0-9]+('|H)?/g)
      for (let item of path) {
        let id = parseInt(item.match(/[0-9]+/g)[0])
        if (item.match(/('|H)/g)) id = (id | 0x80000000) >>> 0
        address_n.push(id)
      }
      return address_n
    }
  },
  methods: {
    async getPbk() {
      if (!this.c_addressN) return (this.d_response = 'path error')
      const proto = {
        address_n: this.c_addressN,
        script_type: this.d_scriptType,
        show_display: this.d_showDisplay
      }
      const result = await this.$usb.cmd('GetPublicKey', proto)
      result.data.node.chain_code = Buffer.from(result.data.node.chain_code, 'base64').toString('hex')
      result.data.node.public_key = Buffer.from(result.data.node.public_key, 'base64').toString('hex')
      this.d_request = `abckey.cmd("GetPublicKey", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
