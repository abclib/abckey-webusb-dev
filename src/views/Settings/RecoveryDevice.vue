<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="backupDevice()" color="primary" large block>{{ $t('Backup Device') }}</v-btn>
        <br />
        <v-btn @click="recoveryDevice()" color="primary" large block>{{ $t('Recovery Device') }}</v-btn>
        <br />
        <v-btn @click="checkSeed()" color="success" large block>{{ $t('Check Seed') }}</v-btn>
        <br />
        <v-select
          v-model="d_wordCount"
          :items="[
            { text: '12 word', value: 12 },
            { text: '18 word', value: 18 },
            { text: '24 word', value: 24 }
          ]"
          :label="$t('word_count')"
          hide-details
        ></v-select>
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
  name: 'RecoveryDevice',
  data: () => ({
    d_wordCount: 24,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async backupDevice() {
      const proto = {}
      const result = await this.$usb.cmd('BackupDevice', proto)
      this.d_request = `abckey.cmd("BackupDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async recoveryDevice() {
      const proto = {
        word_count: this.d_wordCount,
        passphrase_protection: false,
        pin_protection: false,
        language: 'en-US',
        label: 'ABCKEY',
        enforce_wordlist: false
      }
      const result = await this.$usb.cmd('RecoveryDevice', proto)
      this.d_request = `abckey.cmd("RecoveryDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async checkSeed() {
      const proto = {
        dry_run: true
      }
      const result = await this.$usb.cmd('RecoveryDevice', proto)
      this.d_request = `abckey.cmd("RecoveryDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Backup Device': '备份设备',
        'Recovery Device': '恢复设备',
        'Check Seed': '检查密语',
        word_count: '密语强度'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
