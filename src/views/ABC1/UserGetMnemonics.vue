<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="userGetMnemonics()" color="primary" large block>{{ $t('User Get Mnemonics') }}</v-btn>
      </v-col>
      <!-- Request -->
      <v-col cols="5">
        <v-textarea :label="$t('Request')" :value="d_request" filled readonly auto-grow></v-textarea>
      </v-col>
      <!-- Response  -->
      <v-col cols="5">
        <v-textarea :label="$t('Response')" :value="d_response" filled readonly auto-grow></v-textarea>
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
  },
  i18n: {
    messages: {
      zhCN: {
        'User Get Mnemonics': '导出密语'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
