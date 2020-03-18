<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="4">
            <v-btn @click="signTx()" color="primary" large block>Sign Transaction</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-select v-model="d_coinName" :items="d_coinList" label="coin_name" hide-details></v-select>
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="d_version" label="version" hide-details />
          </v-col>
          <v-col cols="4">
            <v-text-field v-model="d_lockTime" label="lock_time" hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="inputs_json" v-model="d_inputs" auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="outputs_json" v-model="d_outputs" auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="reftxs_json" v-model="d_utxo" auto-grow></v-textarea>
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
  name: 'home',
  data: () => ({
    d_coinList: ['Bitcoin', 'Litecoin'],
    d_coinName: 'Bitcoin',
    d_version: 1,
    d_lockTime: 0,
    d_inputs: '',
    d_outputs: '',
    d_utxo: '',
    d_request: '',
    d_response: ''
  }),
  mounted() {
    const inputs = [
      {
        address_n: [2147483693, 0, 0, 0],
        prev_hash: '37826a3b7ba54faaaee0c6195973dca7b7f6221ebd1756f8285e3be49b247d21',
        prev_index: 0,
        sequence: 4294967294,
        script_type: 'SPENDMULTISIG',
        amount: '1000100',
        multisig: {
          pubkeys: [
            {
              node: `xpub6BbAk2NX3geR1G5eJvww9qvgXPLZZZzE8oYpi56XQUSHH8u91kGYBcQXaHAMVNUnbeQQhS87nn38X8Y5YRj4UjA7gqtLEggpqQvZBp6W3NS`,
              address_n: [0, 0]
            },
            {
              node: 'xpub6AxX9fezLTUJwu2FrRkLcnLb6hdeiBXqabWasqnfvyacrgok92VJ3H963Qb28LH56TZD2T5HkHCB9HB74ADS6c4SEjQjenb2DG4xxFo7NWU',
              address_n: [0, 0]
            }
          ],
          signatures: ['', ''],
          m: 2
        }
      }
    ]
    const outputs = [
      {
        address: '3L6UYMqVLxzZRJ9EpZpf3o5ZvWWs1KNjQb',
        amount: '9',
        script_type: 'PAYTOADDRESS'
      }
    ]
    const utxo = [
      {
        hash: '37826a3b7ba54faaaee0c6195973dca7b7f6221ebd1756f8285e3be49b247d21',
        inputs: [
          {
            prev_hash: 'a653e5b4e9b1ac110540f97b97ab97cc7ad9a1e81e844b223500d68697192cd4',
            prev_index: 0,
            script_sig: '160014fee4152a9ec43bedacc7238b28c848c5272eb0fc',
            sequence: 4294967294
          }
        ],
        bin_outputs: [
          {
            amount: '1000100',
            script_pubkey: 'a914b5619f06ad24e8a44fd8e0b14f6c095cede7aa4b87'
          },
          {
            amount: '15687407',
            script_pubkey: 'a91495183a50937681facfb6cf071548795e07c7127d87'
          }
        ],
        lock_time: 621597,
        version: 2
      }
    ]
    this.d_inputs = JSON.stringify(inputs, null, 4)
    this.d_outputs = JSON.stringify(outputs, null, 4)
    this.d_utxo = JSON.stringify(utxo, null, 4)
  },
  methods: {
    async signTx() {
      const proto = {
        coin_name: this.d_coinName,
        inputs: JSON.parse(this.d_inputs),
        outputs: JSON.parse(this.d_outputs),
        utxo: JSON.parse(this.d_utxo),
        version: this.d_version,
        lock_time: this.d_lockTime
      }
      const result = await this.$usb.signTx(proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
