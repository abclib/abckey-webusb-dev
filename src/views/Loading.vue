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
  async created() {
    const proto = {
      coin_name: 'Bitcoin',
      address_n: [2147483697, 2147483648, 2147483648],
      script_type: 'SPENDP2SHWITNESS',
      show_display: false
    }
    const msg = await this.$usb.cmd('GetPublicKey', proto, true)
    await new Promise(resolve => setTimeout(resolve, 1111)) // Give the loading animation some delay
    if (msg.type === 'PinMatrixRequest') this.$router.push({ path: `/Pin` })
    else if (msg.type === 'PassphraseRequest') this.$router.push({ path: `/Passphrase` })
    else if (msg.type === 'PublicKey') this.$router.push({ path: `/Account` })
  },
  i18n: {
    messages: {
      zhCN: {
        'Loading ABCKEY': '正在加载 ABCKEY'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
