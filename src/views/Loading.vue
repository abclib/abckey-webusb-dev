<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-progress-circular indeterminate size="188" color="primary">
          {{ $t('Loading ABCKEY') }}
        </v-progress-circular>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({}),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    async c_msg(msg) {
      if (msg.type === 'PinMatrixRequest') this.$router.push({ path: `/Pin` })
      if (msg.type === 'PassphraseRequest') this.$router.push({ path: `/Passphrase` })
      if (msg.type === 'PublicKey') this.$router.push({ path: `/Account` })
    }
  },
  async mounted() {
    await new Promise(resolve => setTimeout(resolve, 1111)) // Give the loading animation some delay
    const proto = {
      coin_name: 'Bitcoin',
      address_n: [2147483697, 2147483648, 2147483648],
      script_type: 'SPENDP2SHWITNESS',
      show_display: false
    }
    await this.$usb.cmd('GetPublicKey', proto, true)
  }
}
</script>

<style lang="scss" scoped></style>
