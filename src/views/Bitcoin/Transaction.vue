<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-btn @click="signBTC()" color="primary" large block>{{ $t('Sign Transaction') }}</v-btn>
            <br />
            <v-select v-model="d_coinName" :items="c_coins" :label="$t('coin_name')"></v-select>
            <v-text-field v-model="d_version" :label="$t('version')" />
            <v-text-field v-model="d_lockTime" :label="$t('lock_time')" />
            <v-textarea :label="$t('inputs_json')" v-model="d_inputs"></v-textarea>
            <v-textarea :label="$t('outputs_json')" v-model="d_outputs"></v-textarea>
            <v-textarea :label="$t('utxo_json')" v-model="d_utxo"></v-textarea>
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
  name: 'Transaction',
  data: () => ({
    d_coinName: 'Litecoin',
    d_version: 1,
    d_lockTime: 0,
    d_inputs: '',
    d_outputs: '',
    d_utxo: '',
    d_request: '',
    d_response: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.btcName')
  },
  mounted() {
    const inputs = [
      {
        prev_hash: 'cea52c0a28452f9dcd56f9ca013081331c399f0a36494c5caa8c371814851961',
        prev_index: 1,
        script_type: 'LEGACY',
        amount: '10517778',
        address_n: [2147483697, 2147483650, 2147483648, 1, 1],
        sequence: 4294967295
      }
    ]
    const outputs = [
      {
        amount: '10517500',
        address: 'MPSq6gfkMTKsi6jkHNykkPKQEjt8QYMpnp',
        script_type: 'OUT_LEGACY'
      }
    ]
    const utxo = [
      {
        version: 1,
        lock_time: 0,
        hash: 'cea52c0a28452f9dcd56f9ca013081331c399f0a36494c5caa8c371814851961',
        inputs: [
          {
            prev_index: 0,
            sequence: 4294967295,
            prev_hash: '3b34fc0ee2544af113f5eef6f9bb3f761bf53200a44c11a8cd3400f2f2391512',
            script_sig: '1600149ef635981841b59b70d48feb61bd36ea9746265b'
          }
        ],
        bin_outputs: [
          {
            amount: '2000000',
            script_pubkey: 'a914d707630e4914f45c2c58bd08c8c3fdc19b27f4ff87'
          },
          {
            amount: '10517778',
            script_pubkey: '76a914483bf46486b20251d050159399dbff718b4c448788ac'
          }
        ]
      }
    ]
    this.d_inputs = JSON.stringify(inputs, null, 4)
    this.d_outputs = JSON.stringify(outputs, null, 4)
    this.d_utxo = JSON.stringify(utxo, null, 4)
  },
  methods: {
    async signBTC() {
      const proto = {
        coin_name: this.d_coinName,
        inputs: JSON.parse(this.d_inputs),
        outputs: JSON.parse(this.d_outputs),
        utxo: this.d_utxo !== '' ? JSON.parse(this.d_utxo) : undefined,
        version: this.d_version,
        lock_time: this.d_lockTime
      }
      this.d_request = `abckey.signBTC(` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.signBTC(proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Sign Transaction': '签名交易',
        coin_name: '币名',
        version: '版本',
        lock_time: '锁定时间',
        inputs_json: '输入',
        outputs_json: '输出',
        utxo_json: '零钱'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
