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
    d_request: '',
    d_response: ''
  }),
  mounted() {
    const inputs = [
      {
        address_n: [2147483697, 2147483650, 2147483648, 0, 0],
        amount: '1251912615515151598',
        prev_hash: 'f6ceb5e14b4cb7bd8a2b1922bd2d91596de3be447c806141f225c3d77a0e99eb',
        prev_index: 0,
        script_type: 'SPENDP2SHWITNESS',
        sequence: 4294967295
      }
    ]
    const outputs = [
      {
        address: '1CXAKbLJW5PZiFRH5nANuDKhaPJ5TKepXD',
        amount: '12519063',
        script_type: 'PAYTOADDRESS'
      },
      {
        address_n: [2147483697, 2147483650, 2147483648, 0, 0],
        amount: '1251',
        script_type: 'PAYTOADDRESS'
      }
    ]
    this.d_inputs = JSON.stringify(inputs, null, 4)
    this.d_outputs = JSON.stringify(outputs, null, 4)
  },
  methods: {
    async signTx() {
      const proto = {
        coin_name: this.d_coinName,
        inputs: JSON.parse(this.d_inputs),
        outputs: JSON.parse(this.d_outputs),
        version: this.d_version,
        lock_time: this.d_lockTime
      }
      console.log(proto)
      const result = await this.$usb.signTx(proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
