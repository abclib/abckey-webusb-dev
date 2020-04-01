<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="wipeDevice()" color="error" large block>{{ $t('Wipe Device') }}</v-btn>
        <br />
        <v-btn @click="resetDevice()" color="primary" large block>{{ $t('Reset Device') }}</v-btn>
        <br />
        <v-select
          v-model="d_strength"
          :items="[
            { text: '12 word', value: 128 },
            { text: '18 word', value: 192 },
            { text: '24 word', value: 256 }
          ]"
          :label="$t('Strength')"
          hide-details
        ></v-select>
        <br />
        <v-select
          v-model="d_backupType"
          :items="[
            { text: 'Bip39', value: 0 },
            { text: 'Slip39_Basic', value: 1 },
            { text: 'Slip39_Advanced', value: 2 }
          ]"
          :label="$t('backup_type')"
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
  name: 'ResetDevice',
  data: () => ({
    d_strength: 256,
    d_backupType: 0,
    d_response: '',
    d_request: ''
  }),
  methods: {
    async wipeDevice() {
      const proto = {}
      const result = await this.$usb.cmd('WipeDevice', proto)
      this.d_request = `abckey.cmd("WipeDevice", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    },
    async resetDevice() {
      const proto = {
        display_random: false,
        strength: this.d_strength, // 12word: 128, 18word: 192, 24word: 256,
        passphrase_protection: false,
        pin_protection: false,
        language: 'en-US',
        label: 'ABCKEY',
        skip_backup: true,
        no_backup: false,
        backup_type: this.d_backupType //Bip39: 0, Slip39_Basic: 1, Slip39_Advanced: 2
      }
      const result = await this.$usb.resetDevice(proto)
      this.d_request = `abckey.resetDevice(` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Wipe Device': '擦除设备',
        'Reset Device': '重置设备',
        Strength: '密语强度',
        backup_type: '备份类型'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
