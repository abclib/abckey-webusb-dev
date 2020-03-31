<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-icon size="200" color="info">mdi-usb</v-icon>
        <h1 class="display-1 mt-7">{{ $t('Please Connect ABCKEY') }}</h1>
        <div class="mt-7">
          <v-btn class="mx-2" color="primary" @click="add()"><v-icon left>mdi-plus</v-icon>{{ $t('Check For Device') }}</v-btn>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Connect',
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {
    async add() {
      const msg = await this.$usb.add()
      if (msg) this.$router.push({ path: `/Loading` })
    }
  },
  created() {
    this.$usb.cmd('ClearSession', null, true)
  }
}
</script>

<style lang="scss" scoped></style>
