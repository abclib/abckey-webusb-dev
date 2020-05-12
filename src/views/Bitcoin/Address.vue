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
            <v-select v-model="d_scriptType" :items="['LEGACY', 'BECH32', 'P2SHSEGWIT']" :label="$t('script_type')"></v-select>
            <v-select v-model="d_showDisplay" :items="[true, false]" :label="$t('show_display')"></v-select>
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
  name: 'Address',
  data: () => ({
    d_coinName: 'Bitcoin',
    d_bip32Path: `m/49'/0'/0'/0/0`,
    d_scriptType: 'LEGACY',
    d_showDisplay: false,
    d_response: '',
    d_request: ''
  }),
  computed: {
    c_coins: vm => vm.$store.__s('app.btcName'),
    c_slip44: vm => vm.$store.__s('app.slip44')
  },
  watch: {
    d_scriptType(val) {
      this.d_bip32Path = this._bip32path(this.d_coinName, val)
    },
    d_coinName(val) {
      this.d_bip32Path = this._bip32path(val, this.d_scriptType)
    }
  },
  methods: {
    _bip32path(name, type) {
      const path = this.d_bip32Path.split('/')
      let purpose = 0
      let slip44 = 0
      if (type === 'LEGACY') purpose = 44
      else if (type === 'BECH32' || type === 'P2SHSEGWIT') purpose = 49
      slip44 = this.c_slip44[name]
      path[1] = `${purpose}'`
      path[2] = `${slip44}'`
      return path.join('/')
    },
    async getAddress() {
      const proto = {
        coin_name: this.d_coinName,
        bip32_path: this.d_bip32Path,
        script_type: this.d_scriptType,
        show_display: this.d_showDisplay
      }
      this.d_request = `abckey.cmd('GetAddress', ` + JSON.stringify(proto, null, 4) + ')'
      const result = await this.$usb.cmd('GetAddress', proto)
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'Get Address': '获取地址',
        coin_name: '币名',
        bip32_path: '路径',
        script_type: '类型',
        show_display: '显示'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
