<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="4">
            <v-btn @click="userGetMnemonics()" color="primary" large block>User Get Mnemonics</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea label="Request" :value="d_request" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-textarea label="Response" :value="d_response" filled readonly auto-grow></v-textarea>
          </v-col>
        </v-row>
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
    async userGetMnemonics() {
      const proto = {}
      const result = await this.$usb.cmd('UserGetMnemonics', proto)
      this.d_request = `abckey.cmd("UserGetMnemonics", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
