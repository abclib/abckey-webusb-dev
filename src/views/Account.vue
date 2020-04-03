<template>
  <v-container class="fill-height mt-7">
    <v-layout class="d-flex justify-center">
      <div class="account">
        <v-row>
          <v-col cols="2">
            <v-select v-model="d_coin" :items="c_coins" :label="$t('coin')" solo dense></v-select>
          </v-col>
          <v-col cols="2">
            <v-select v-model="d_cash" :items="c_currency" :label="$t('cash')" solo dense></v-select>
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="d_xpub" label="xpub" solo dense></v-text-field>
          </v-col>
        </v-row>
        <wallet-account :coin="d_coin" :cash="d_cash" :xpub="d_xpub"></wallet-account>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({
    d_coin: 'Bitcoin',
    d_cash: 'USD',
    d_xpub: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.coins'),
    c_currency: vm => vm.$store.__s('app.currency')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.account {
  width: 777px;
}
</style>
