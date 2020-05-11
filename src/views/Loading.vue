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
  methods: {
    async initialize() {
      const msg = await this.$usb.cmd('Initialize')
      if (msg.data.bootloader_mode && !msg.data.firmware_present) return this.$router.push({ path: `/Welcome` })
      else if (msg.data.bootloader_mode && msg.data.bootloader_mode) return this.$router.push({ path: `/Bootloader` })
      else if (!msg.data.initialized) return this.$router.push({ path: `/Initialize` })
      return msg
    },
    async publickey() {
      const proto = {
        coin_name: 'Bitcoin',
        address_n: [2147483697, 2147483648, 2147483648],
        script_type: 'SPENDP2SHWITNESS',
        show_display: false
      }
      const msg = await this.$usb.cmd('GetPublicKey', proto)
      if (msg.type === 'PublicKey') this.$router.push({ path: `/Bitcoin/Account` })
      else if (msg.type === 'Failure') this.$router.push({ path: `/Connect` })
    }
  },
  async created() {
    await new Promise(resolve => setTimeout(resolve, 1111)) // Give the loading animation some delay
    const msg = await this.initialize()
    if (msg.data?.initialized) await this.publickey()
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
