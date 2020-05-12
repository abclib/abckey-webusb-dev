<template>
  <v-container class="fill-height mt-7">
    <v-layout class="d-flex justify-center">
      <div class="account">
        😄
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
