<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-btn @click="signETH()" color="primary" large block>{{ $t('Sign Transaction') }}</v-btn>
            <br />
            <v-select v-model="d_coinName" :items="c_coins" :label="$t('coin_name')"></v-select>
            <v-text-field v-model="d_bip44Path" :label="$t('bip44_path')" />
            <v-text-field v-model="d_nonce" :label="$t('nonce')" type="number" />
            <v-text-field v-model="d_gasPrice" :label="$t('gas_price')" type="number" />
            <v-text-field v-model="d_gasLimit" :label="$t('gas_limit')" type="number" />
            <v-text-field v-model="d_to" :label="$t('to')" />
            <v-text-field v-model="d_value" :label="$t('value')" type="number" />
            <v-text-field v-model="d_chainId" :label="$t('chain_id')" type="number" />
            <br />
            <ul>
              <li><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md">EIP 155</a></li>
              <li><a href="https://chainid.network">Chain ID</a></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-textarea :label="$t('Request')" :value="d_request" filled readonly auto-grow></v-textarea>
        <v-textarea :label="$t('Response')" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignTransaction',
  data: () => ({
    d_coinName: 'Ethereum',
    d_bip44Path: `m/44'/60'/0'/0/0`,
    d_nonce: '0',
    d_gasPrice: '1',
    d_gasLimit: '21000',
    d_to: '0xAEc6B4896bCCa877653a9E0df13FE085c3fafef2',
    d_value: '1',
    d_chainId: '1',
    d_request: '',
    d_response: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.asETH')
  },
  mounted() {
    // let a = Buffer.from('0', 'binary').toString('hex')
    // console.log(a)
  },
  methods: {
    async signETH() {
      const proto = {
        bip44_path: this.d_bip44Path,
        nonce: this.d_nonce,
        gas_price: this.d_gasPrice,
        gas_limit: this.d_gasLimit,
        to: this.d_to,
        value: this.d_value,
        chain_id: this.d_chainId
      }
      this.d_request = `abckey.signETH(` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.signETH(proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Sign Transaction': '签名交易'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
