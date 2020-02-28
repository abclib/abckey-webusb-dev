<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <p>Request device to wipe all sensitive data and settings</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="wipeDevice()" color="primary" large block>Wipe Device</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WipeDevice',
  data: () => ({
    d_response: '',
    d_request: ''
  }),
  methods: {
    async wipeDevice() {
      const proto = {}
      const result = await this.$usb.cmd('WipeDevice', proto)
      this.d_request = `abckey.cmd("WipeDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
