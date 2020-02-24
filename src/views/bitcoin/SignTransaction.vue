<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <v-btn @click="signTransaction()" color="primary" large block>Sign Transaction</v-btn>
      </v-col>
      <v-col>
        <v-select v-model="d_coinName" :items="d_coinList" label="coin_name" hide-details outlined></v-select>
      </v-col>
      <v-col>
        <v-text-field v-model="d_version" label="version" hide-details outlined />
      </v-col>
      <v-col>
        <v-text-field v-model="d_lockTime" label="lock_time" hide-details outlined />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea label="inputs_json" v-model="d_inputs" outlined auto-grow></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea label="outputs_json" v-model="d_outputs" outlined auto-grow></v-textarea>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-col>
        <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <ul>
        <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki</a></li>
        <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">https://github.com/satoshilabs/slips/blob/master/slip-0044.md</a></li>
      </ul>
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
    d_inputs: '[{"address_n":[2147483697,2147483650,2147483648,0,0],"amount":"12519198","prev_hash":"f6ceb5e14b4cb7bd8a2b1922bd2d91596de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295},{"address_n":[2147483697,2147483650,2147483648,0,1],"amount":"12519198","prev_hash":"f6ceb5e14b4cb7bd8a2b1922bd2d91556de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295},{"address_n":[2147483697,2147483650,2147483648,0,2],"amount":"12519198","prev_hash":"f6ceb5e14b4c47bd8a2b1922bd2d91556de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295}]',
    d_outputs: '[{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"12519063","script_type":"PAYTOADDRESS"},{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"1251","script_type":"PAYTOADDRESS"},{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"1251","script_type":"PAYTOADDRESS"}]',
    d_response: ''
  }),
  mounted() {
    this.d_inputs = JSON.stringify(JSON.parse(this.d_inputs), null, 4)
    this.d_outputs = JSON.stringify(JSON.parse(this.d_outputs), null, 4)
  },
  methods: {
    async signTransaction() {
      const result = await this.$usb.signTransaction(this.d_coinName, JSON.parse(this.d_inputs), JSON.parse(this.d_outputs))
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
