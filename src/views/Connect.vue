<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-icon size="200" color="info">mdi-usb</v-icon>
        <h1 class="display-1 mt-7">{{ $t('Please Connect ABCKEY') }}</h1>
        <div class="mt-7">
          <v-btn class="mx-2" color="primary" @click="add()"><v-icon left>mdi-plus</v-icon>{{ $t('Check For Device') }}</v-btn>
        </div>
        <v-overlay :value="d_overlay" z-index="99" opacity=".7"></v-overlay>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Connect',
  data: () => ({
    d_overlay: false
  }),
  methods: {
    async add() {
      this.d_overlay = true
      const msg = await this.$usb.add()
      this.d_overlay = false
      if (msg) this.$router.push({ path: `/Loading` })
    }
  },
  created() {
    if (!this.$store.__s('usb.label')) return // If the device is connected, all data will be cleared.
    this.$usb.cmd('ClearSession', null, true)
    // window.location.reload(true)
  },
  i18n: {
    messages: {
      zhCN: {
        'Please Connect ABCKEY': '请连接 ABCKEY',
        'Check For Device': '检查设备'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
