<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <p>Ask device to do initialization involving user interaction</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">
            <v-btn @click="resetDevice()" color="primary" large block>Reset Device</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-select
              v-model="d_strength"
              :items="[
                { text: '12 word', value: 128 },
                { text: '18 word', value: 192 },
                { text: '24 word', value: 256 }
              ]"
              label="Strength"
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="d_backupType"
              :items="[
                { text: 'Bip39', value: 0 },
                { text: 'Slip39_Basic', value: 1 },
                { text: 'Slip39_Advanced', value: 2 }
              ]"
              label="backup_type"
              hide-details
            ></v-select>
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
  name: 'ResetDevice',
  data: () => ({
    d_strength: 256,
    d_backupType: 0,
    d_response: '',
    d_request: ''
  }),
  methods: {
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
  }
}
</script>

<style lang="scss" scoped></style>
