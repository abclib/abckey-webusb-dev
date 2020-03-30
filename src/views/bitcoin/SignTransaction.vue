<template>
  <v-container fluid>
    <v-row>
      <!-- Command -->
      <v-col cols="2">
        <v-btn @click="signTx()" color="primary" large block>Sign Transaction</v-btn>
        <br />
        <v-select v-model="d_coinName" :items="d_coinList" label="coin_name" hide-details></v-select>
        <br />
        <v-text-field v-model="d_version" label="version" hide-details />
        <br />
        <v-text-field v-model="d_lockTime" label="lock_time" hide-details />
        <br />
        <v-textarea label="inputs_json" v-model="d_inputs"></v-textarea>
        <br />
        <v-textarea label="outputs_json" v-model="d_outputs"></v-textarea>
        <br />
        <v-textarea label="utxo_json" v-model="d_utxo"></v-textarea>
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
        address_n: [2147483692, 2147483648, 2147483648],
        prev_hash: 'b3e400a6ec426652f22e7cc9056388713b27040ecd6620820b4e88e422b9dbb4',
        prev_index: 0,
        sequence: 4294967295,
        script_type: 'SPENDMULTISIG',
        amount: '305170',
        multisig: {
          pubkeys: [
            {
              node: 'xpub6CQrHpo3WyZUick9cZX62LnizmfkYXAWki6gaNsg7qcWwxGfPdcevpJLdndWh1DKpxbhZuB7PQWzYaA2myuMD2Y5ADm4AFeDczxryEEt2dA',
              address_n: []
            },
            {
              node: 'xpub6EM1j8mUpjLTH3yu3m95EnadifxH9cJho9HeyK9sySpiSdEkniaJbpvwkJLQJaVZ91p1CTX2PtSD1xubAnbqUDbLL6eiAaVof38GRnfttmr',
              address_n: []
            },
            {
              node: 'xpub6Cv91ksLxY6mP88jy3xLGhe4AgxRsSmJDD3xJbxhkEJEZRXtn4gAcQf7CAURhvWZWqYqLMT5eqSDF5TwB6oX7HEwSEYDfNHx4FD55A1Rwwi',
              address_n: []
            },
            {
              node: 'xpub6CB1p2e5RYzJbv4UnKacXQLQyFKRz2iaXp7N1TZzcBB5kXZqrZdwpZcGkaWPN1wpmtaxQztVt27ExmmaoT7imJrmNaF1NLQUAGnCmigrBxM',
              address_n: []
            },
            {
              node: 'xpub6Ei4K7R6Cuu4Nf1QNm2rf3C8LCHiYqrkVTAAaXWgehzK1fuKpRCwjmUv5w7KLaitC9nfXke34wna3jjZtup9HTimhiiTZoKRWhYHdfeAcUx',
              address_n: []
            }
          ],
          signatures: ['', '', '', ''],
          m: 4
        }
      }
    ]
    const outputs = [
      {
        address: '321m4ZKqkPfE27kXZEvfXxrroMiXeL1K9p',
        amount: '1000',
        script_type: 'PAYTOADDRESS'
      },
      {
        address: '1Dxzq1eqMmskCWYuUgkJDvTbBHr5sqG2ZY',
        amount: '1000',
        script_type: 'PAYTOADDRESS'
      }
    ]
    const utxo = [
      {
        version: 2,
        lock_time: 0,
        hash: 'b3e400a6ec426652f22e7cc9056388713b27040ecd6620820b4e88e422b9dbb4',
        inputs: [
          {
            prev_index: 1,
            sequence: 4294967295,
            prev_hash: 'b02f47429905f7b0e2d49f6753b8314a205205c2978cc8236793b6886080c89a',
            script_sig: '1600145718c9aee8fb71b8d2df1d878968dd5310977a98'
          }
        ],
        bin_outputs: [
          {
            amount: '12619',
            script_pubkey: 'a914038b7f4bd1e2305a2b72dfab094fa392fedd7f3187'
          },
          {
            amount: '292551',
            script_pubkey: 'a9141191ece76da3009434dd6bd2bf8a36296e032a1987'
          }
        ]
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
      this.d_request = `abckey.signTx(` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.signTx(proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
