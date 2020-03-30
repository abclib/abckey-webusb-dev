<template>
  <v-container class="fill-height mt-7">
    <v-layout class="d-flex justify-center">
      <div class="account">
        <wallet-account
          name="bitcoin"
          symbol="btc"
          currency="usd"
          xpub="ypub6X8sy1kK2MTcg8149iBYFKd9bfoLeLt1MnxQF7BzqWVqez2BVb7pRLVoiRENduwp2vJmMFnXruYQ8xc3XRgLrGToTtkMEC51yw8yeVtY5jR"
        ></wallet-account>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.account {
  width: 777px;
}
</style>
