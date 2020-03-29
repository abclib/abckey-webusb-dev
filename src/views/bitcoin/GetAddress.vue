<template>
  <v-container fluid>
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
        <v-row v-if="d_scriptType === 'SPENDMULTISIG'">
          <v-col>
            <v-textarea label="multisig" v-model="d_multisig" auto-grow></v-textarea>
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
  name: 'GetAddress',
  data: () => ({
    d_name: 'Bitcoin',
    d_path: `m/49'/0'/0'/0/0`,
    d_scriptType: 'SPENDP2SHWITNESS',
    d_showDisplay: false,
    d_multisig: '',
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
  watch: {
    async d_scriptType(val) {
      if (val === 'SPENDMULTISIG') this.d_path = `m/45'/0/0/0`
    }
  },
  mounted() {
    this.d_multisig = JSON.stringify(
      {
        pubkeys: [
          {
            node: `Own public key: m/45'/0`,
            address_n: [0, 0]
          },
          {
            node: 'xpub6AxX9fezLTUJwu2FrRkLcnLb6hdeiBXqabWasqnfvyacrgok92VJ3H963Qb28LH56TZD2T5HkHCB9HB74ADS6c4SEjQjenb2DG4xxFo7NWU',
            address_n: [0, 0]
          }
        ],
        m: 2
      },
      null,
      4
    )
  },
  methods: {
    async getAddr() {
      if (!this.c_addressN) return (this.d_response = 'path error')
      const proto = {
        coin_name: this.d_name,
        address_n: this.c_addressN,
        script_type: this.d_scriptType,
        show_display: this.d_showDisplay,
        multisig: this.d_scriptType === 'SPENDMULTISIG' ? JSON.parse(this.d_multisig) : undefined
      }
      const result = await this.$usb.getAddr(proto)
      this.d_request = `abckey.cmd("GetAddress", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
