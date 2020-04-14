<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-btn @click="getAddress()" color="primary" large block>{{ $t('Get Address') }}</v-btn>
            <br />
            <v-select v-model="d_coinName" :items="c_coins" :label="$t('coin_name')"></v-select>
            <v-text-field v-model="d_bip32Path" :label="$t('bip32_path')" />
            <v-text-field v-model="d_scriptType" :label="$t('script_type')" readonly />
            <v-select v-model="d_showDisplay" :items="[true, false]" :label="$t('show_display')"></v-select>
            <v-textarea v-model="d_multisig" :label="$t('multisig')" auto-grow></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-textarea :label="$t('Request')" :value="d_request" filled readonly auto-grow></v-textarea>
        <v-textarea :label="$t('Response')" :value="d_response" filled readonly auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AddressMultisig',
  data: () => ({
    d_coinName: 'Bitcoin',
    d_bip32Path: `m/45'/0/0/0`,
    d_scriptType: 'MULTISIG',
    d_showDisplay: false,
    d_multisig: '',
    d_response: '',
    d_request: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.asBTC')
  },
  methods: {
    async getAddress() {
      const proto = {
        coin_name: this.d_coinName,
        bip32_path: this.d_bip32Path,
        script_type: this.d_scriptType,
        show_display: this.d_showDisplay,
        multisig: JSON.parse(this.d_multisig)
      }
      this.d_request = `abckey.cmd('GetAddress', ` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.cmd('GetAddress', proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  mounted() {
    this.d_multisig = JSON.stringify(
      {
        m: 2,
        pubkeys: [
          {
            xpub: 'xpub6As9EQf9XfAyhmyoiRVeWD1crYteXXTJWnAHiGq6huZCNtjuNiVjJfE8xHaSWM8Bmk18vkLj68w84Cski2zSGjH3LeFtkSX33Pphfkf2ELW',
            path: '/0/0'
          },
          {
            xpub: 'xpub6As9EQf9XfAyjhjJXo3Pdp82VHwprSEjPAqhXM5oapns3xbyLAUL9AUaJL3hqXSNpfJpw1PwysarPgMN6jYbRgMbf8tj8iHz6GDkL81mdmj',
            path: '/0/0'
          },
          {
            xpub: 'xpub6AxX9fezLTUJwu2FrRkLcnLb6hdeiBXqabWasqnfvyacrgok92VJ3H963Qb28LH56TZD2T5HkHCB9HB74ADS6c4SEjQjenb2DG4xxFo7NWU',
            path: '/0/0'
          }
        ]
      },
      null,
      4
    )
  },
  i18n: {
    messages: {
      zhCN: {
        'Get Address': '获取地址',
        coin_name: '币名',
        bip32_path: '路径',
        script_type: '类型',
        show_display: '显示',
        multisig: '多签'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
