<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="usePassphrase(true)" color="success" large block>{{ $t('Enable Passphrase') }}</v-btn>
        <br />
        <v-btn @click="usePassphrase(false)" color="warning" large block>{{ $t('Disabled Passphrase') }}</v-btn>
        <br />
        <v-row align="center">
          <v-col>
            <v-text-field v-model="d_label" :label="$t('label')" hide-details />
          </v-col>
          <v-col>
            <v-btn @click="setLabel()" color="primary" large block>{{ $t('Set Label') }}</v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col>
            <v-text-field v-model="d_dalay" type="number" :label="$t('auto_lock_delay_ms')" hide-details />
          </v-col>
          <v-col>
            <v-btn @click="lockDelay()" color="primary" large block>{{ $t('Set Delay') }}</v-btn>
          </v-col>
        </v-row>
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
  name: 'ApplySettings',
  data: () => ({
    d_label: 'ABCKEY',
    d_dalay: 7000,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async setLabel() {
      const proto = {
        label: this.d_label
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async lockDelay() {
      const proto = {
        auto_lock_delay_ms: this.d_dalay
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async usePassphrase(use_passphrase) {
      const proto = {
        use_passphrase
      }
      const result = await this.$usb.cmd('ApplySettings', proto)
      this.d_request = `abckey.cmd("ApplySettings", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Enable Passphrase': '开启密码短语',
        'Disabled Passphrase': '关闭密码短语',
        'Set Label': '设置标签',
        'Set Delay': '设置延时',
        label: '设备标签',
        auto_lock_delay_ms: '自动锁定延时(ms)'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
