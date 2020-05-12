<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-btn @click="signBTC()" color="primary" large block>{{ $t('Multisig Transaction') }}</v-btn>
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
    d_coinName: 'Bitcoin',
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
        bip32_path: `m/45'/0/0/0`,
        prev_hash: 'b3e400a6ec426652f22e7cc9056388713b27040ecd6620820b4e88e422b9dbb4',
        prev_index: 0,
        sequence: 4294967295,
        script_type: 'MULTISIG',
        amount: '305170',
        multisig: {
          pubkeys: [
            {
              xpub: 'xpub6DwRZP9AGY74m2LYeAgqjThHVg6YgQVTjR8snD9JXm9TSP1bM7jXur79iZfHqAz11MDDygUpfAGJRKEngX3TM6AtESfkhSUyjA8C7foZ2Sy',
              path: ''
            },
            {
              xpub: 'xpub6EM1j8mUpjLTH3yu3m95EnadifxH9cJho9HeyK9sySpiSdEkniaJbpvwkJLQJaVZ91p1CTX2PtSD1xubAnbqUDbLL6eiAaVof38GRnfttmr',
              path: ''
            },
            {
              xpub: 'xpub6Cv91ksLxY6mP88jy3xLGhe4AgxRsSmJDD3xJbxhkEJEZRXtn4gAcQf7CAURhvWZWqYqLMT5eqSDF5TwB6oX7HEwSEYDfNHx4FD55A1Rwwi',
              path: ''
            },
            {
              xpub: 'xpub6CB1p2e5RYzJbv4UnKacXQLQyFKRz2iaXp7N1TZzcBB5kXZqrZdwpZcGkaWPN1wpmtaxQztVt27ExmmaoT7imJrmNaF1NLQUAGnCmigrBxM',
              path: ''
            },
            {
              xpub: 'xpub6Ei4K7R6Cuu4Nf1QNm2rf3C8LCHiYqrkVTAAaXWgehzK1fuKpRCwjmUv5w7KLaitC9nfXke34wna3jjZtup9HTimhiiTZoKRWhYHdfeAcUx',
              path: ''
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
        script_type: 'OUT_LEGACY'
      },
      {
        address: '1Dxzq1eqMmskCWYuUgkJDvTbBHr5sqG2ZY',
        amount: '1000',
        script_type: 'OUT_LEGACY'
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
