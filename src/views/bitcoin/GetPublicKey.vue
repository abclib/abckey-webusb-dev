<template>
  <v-container fluid>
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
            <v-select v-model="d_name" :items="['Bitcoin', 'Dogecoin']" label="coin_name" hide-details></v-select>
          </v-col>
          <v-col cols="4">
            <v-select v-model="d_scriptType" :items="['SPENDADDRESS', 'SPENDMULTISIG', 'EXTERNAL', 'SPENDWITNESS', 'SPENDP2SHWITNESS']" label="script_type" hide-details></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <ul>
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">bip-0044.mediawiki</a></li>
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">bip-0045.mediawiki</a></li>
              <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">slip-0044.md</a></li>
            </ul>
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
  name: 'GetPublicKey',
  data: () => ({
    dName: 'Bitcoin',
    dPath: `m/49'/0'/0'`,
    dScriptType: 'SPENDP2SHWITNESS',
    dShowDisplay: false,
    dResponse: '',
    dRequest: ''
  }),
  watch: {
    d_scriptType(val) {
      if (val === 'SPENDMULTISIG') this.d_path = `m/45'/0`
    }
  },
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
        coin_name: this.d_name,
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
