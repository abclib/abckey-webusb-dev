<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="1">
        <v-text-field v-model="d_purpose" label="purpose" />
      </v-col>
      <v-col cols="1">
        <v-text-field v-model="d_coinType" label="coin_type" />
      </v-col>
      <v-col cols="1">
        <v-text-field v-model="d_account" label="account" />
      </v-col>
      <v-col cols="1">
        <v-text-field v-model="d_change" label="change" />
      </v-col>
      <v-col cols="1">
        <v-text-field v-model="d_addressIndex" label="address_index" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="getAddress()" color="primary" large>Get Address</v-btn>
    </v-row>
    <v-row class="mt-9" justify="center">
      <v-col cols="5">
        <v-text-field :value="d_addr" label="addr" readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-9" justify="center">
      <ul>
        <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki</a></li>

        <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">https://github.com/satoshilabs/slips/blob/master/slip-0044.md</a></li>
      </ul>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    d_purpose: 49,
    d_coinType: 0,
    d_account: 0,
    d_change: 0,
    d_addressIndex: 0,
    d_addr: ''
  }),
  components: {},
  methods: {
    async getAddress() {
      const result = await this.$usb.getAddress([this.d_purpose, this.d_coinType, this.d_account, this.d_change, this.d_addressIndex])
      console.log('getAddress', result)
      if (!result) return
      this.d_addr = result.data.address
    }
  }
}
</script>

<style lang="scss" scoped></style>
