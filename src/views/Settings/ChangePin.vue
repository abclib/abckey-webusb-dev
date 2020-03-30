<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="setPin()" color="primary" large block>Change Pin</v-btn>
        <br />
        <v-btn @click="offPin()" color="error" large block>Remove Pin</v-btn>
      </v-col>
      <!-- Request -->
      <v-col cols="5">
        <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
      </v-col>
      <!-- Response  -->
      <v-col cols="5">
        <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChangePin',
  data: () => ({
    d_pin: true,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async setPin() {
      const proto = {}
      const result = await this.$usb.cmd('ChangePin', proto)
      this.d_request = `abckey.cmd("ChangePin", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async offPin() {
      const proto = {
        remove: true
      }
      const result = await this.$usb.cmd('ChangePin', proto)
      this.d_request = `abckey.cmd("ChangePin", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
