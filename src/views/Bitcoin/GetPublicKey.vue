<template>
  <v-container fluid>
    <v-row>
      <!-- Command -->
      <v-col cols="2">
        <v-btn @click="getPbk()" color="primary" large block>Get Public Key</v-btn>
        <br />
        <v-select v-model="d_coinName" :items="['Bitcoin', 'Dogecoin']" label="coin_name" hide-details></v-select>
        <br />
        <v-text-field v-model="d_path" label="path" hide-details />
        <br />
        <v-select
          v-model="d_scriptType"
          :items="['SPENDADDRESS', 'SPENDMULTISIG', 'EXTERNAL', 'SPENDWITNESS', 'SPENDP2SHWITNESS']"
          label="script_type"
          hide-details
        ></v-select>
        <br />
        <v-select v-model="d_showDisplay" :items="[true, false]" label="show_display" hide-details></v-select>
        <br />
        <ul>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">bip-0044.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">bip-0045.mediawiki</a></li>
          <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">slip-0044.md</a></li>
        </ul>
      </v-col>
      <!-- Request -->
      <v-col cols="5">
        <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
      </v-col>
      <!-- Response  -->
      <v-col cols="5">
        <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GetPublicKey',
  data: () => ({
    d_coinName: 'Bitcoin',
    d_path: `m/49'/0'/0'`,
    d_scriptType: 'SPENDP2SHWITNESS',
    d_showDisplay: false,
    d_response: '',
    d_request: ''
  }),
  watch: {
    d_scriptType(val) {
      if (val === 'SPENDMULTISIG') this.d_path = `m/45'/0`
    },
    d_coinName(val) {
      if (val === 'Bitcoin') {
        this.d_path = `m/49'/0'/0'`
        this.d_scriptType = 'SPENDP2SHWITNESS'
      } else if (val === 'Dogecoin') {
        this.d_path = `m/44'/0'/0'`
        this.d_scriptType = 'SPENDADDRESS'
      }
    }
  },
  computed: {
    c_addressN() {
      const address_n = []
      const path = this.d_path.match(/\/[0-9]+('|H)?/g)
      for (const item of path) {
        let id = parseInt(item.match(/[0-9]+/g)[0])
        if (item.match(/('|H)/g)) id = (id | 0x80000000) >>> 0
        address_n.push(id)
      }
      return address_n
    }
  },
  methods: {
    async getPbk() {
      const proto = {
        coin_name: this.d_coinName,
        address_n: this.c_addressN,
        script_type: this.d_scriptType,
        show_display: this.d_showDisplay
      }
      this.d_request = `abckey.cmd("GetPublicKey", ` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.cmd('GetPublicKey', proto)
      result.data.node.chain_code = Buffer.from(result.data.node.chain_code, 'base64').toString('hex') // bytes as base64 encoded strings
      result.data.node.public_key = Buffer.from(result.data.node.public_key, 'base64').toString('hex') // bytes as base64 encoded strings
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
