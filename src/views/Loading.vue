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
    await new Promise(resolve => setTimeout(resolve, 1111)) // Give the loading animation some delay
    const init = await this.initialize()
    if (init) await this.publickey()
  },
  methods: {
    async initialize() {
      const init = await this.$usb.cmd('Initialize')
      if (init.data.bootloader_mode) {
        this.$router.push({ path: `/Bootloader` })
        return false
      }
      return true
    },
    async publickey() {
      const proto = {
        coin_name: 'Bitcoin',
        address_n: [2147483697, 2147483648, 2147483648],
        script_type: 'SPENDP2SHWITNESS',
        show_display: false
      }
      const msg = await this.$usb.cmd('GetPublicKey', proto)
      if (msg.type === 'PublicKey') this.$router.push({ path: `/Account` })
      else if (msg.type === 'Failure') this.$router.push({ path: `/Connect` })
    }
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
