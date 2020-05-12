<template>
  <v-container class="fill-height mt-7">
    <v-layout class="d-flex justify-center">
      <div class="account">
        <v-row>
          <v-col cols="2">
            <v-select v-model="d_coin" :items="c_coin" :label="$t('coin')" solo dense></v-select>
          </v-col>
          <v-col cols="2">
            <v-select v-model="d_cash" :items="c_cash" :label="$t('cash')" solo dense></v-select>
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="d_xpub" :label="$t('xpub')" solo dense></v-text-field>
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
    d_coin: 'BTC',
    d_cash: 'USD',
    d_xpub: ''
  }),
  computed: {
    c_coin: vm => vm.$store.__s('app.coin'),
    c_cash: vm => vm.$store.__s('app.cash')
  },
  i18n: {
    messages: {
      zhCN: {
        xpub: '扩展公钥'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.account {
  width: 777px;
}
</style>
