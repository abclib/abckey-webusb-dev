<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-btn @click="getPublicKey()" color="primary" large block>{{ $t('Get Public Key') }}</v-btn>
            <br />
            <v-select v-model="d_coinName" :items="c_coins" :label="$t('coin_name')"></v-select>
            <v-text-field v-model="d_bip44Path" :label="$t('bip44_path')" />
            <v-select v-model="d_showDisplay" :items="[true, false]" :label="$t('show_display')"></v-select>
            <ul>
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" target="_blank">bip-0032.mediawiki</a></li>
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">bip-0044.mediawiki</a></li>
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">bip-0045.mediawiki</a></li>
              <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">slip-0044.md</a></li>
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
  name: 'GetPublicKey',
  data: () => ({
    d_coinName: 'Ethereum',
    d_bip44Path: `m/44'/60'/0'/0`,
    d_showDisplay: false,
    d_response: '',
    d_request: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.asETH')
  },
  watch: {
    d_coinName(val) {
      if (val === 'Ethereum') this.d_bip44Path = `m/44'/60'/0'/0`
    }
  },
  methods: {
    async getPublicKey() {
      const proto = {
        coin_name: this.d_coinName,
        bip44_path: this.d_bip44Path,
        show_display: this.d_showDisplay
      }
      this.d_request = `abckey.cmd('EthereumGetPublicKey', ` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.cmd('EthereumGetPublicKey', proto)
      result.data.node.chain_code = Buffer.from(result.data.node.chain_code, 'base64').toString('hex') // bytes as base64 encoded strings
      result.data.node.public_key = Buffer.from(result.data.node.public_key, 'base64').toString('hex') // bytes as base64 encoded strings
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Get Public Key': '获取公钥',
        coin_name: '币名',
        bip44_path: '路径',
        show_display: '显示'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
