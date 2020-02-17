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
    </v-row>
    <v-row justify="center">
      <v-btn @click="getPublicKey()" color="primary" large>Get Public Key</v-btn>
    </v-row>
    <v-row class="mt-9" justify="center">
      <v-col cols="8">
        <v-text-field :value="d_pbk" label="pbk" readonly></v-text-field>
        <v-text-field :value="d_xpub" label="xpub" readonly></v-text-field>
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
    d_pbk: '',
    d_xpub: ''
  }),
  components: {},
  methods: {
    async getPublicKey() {
      const result = await this.$usb.getPublicKey([this.d_purpose, this.d_coinType, this.d_account])
      console.log('getPublicKey', result)
      if (!result) return
      this.d_pbk = Buffer.from(result.data.node.publicKey).toString('hex')
      this.d_xpub = result.data.xpub
    }
  }
}
</script>

<style lang="scss" scoped></style>
