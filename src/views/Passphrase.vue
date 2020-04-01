<template>
  <v-container class="fill-height">
    <v-layout class="d-flex justify-center align-center text-center">
      <div>
        <v-card width="333">
          <v-card-title class="headline">{{ $t('Passphrase') }}</v-card-title>
          <v-card-text>
            <v-text-field
              label="#1"
              :hint="$t('Passphrase is case-senstive.')"
              v-model="d_passphrase1"
              :error="!!c_err"
              :type="d_eye ? 'text' : 'password'"
              :append-icon="d_eye ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="d_eye = !d_eye"
              filled
            />
            <v-text-field label="#2" v-model="d_passphrase2" :error-messages="c_err" :type="d_eye ? 'text' : 'password'" filled />
            <v-btn @click="enter()" color="primary" :disabled="!!c_err" large depressed block>{{ $t('Enter') }}</v-btn>
            <v-btn class="mt-3" @click="cancel()" color="secondary" large depressed block>{{ $t('Cancel') }}</v-btn>
          </v-card-text>
        </v-card>
        <v-overlay :value="d_loading" z-index="99">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Passphrase',
  data: () => ({
    d_eye: false,
    d_err: '',
    d_passphrase1: '',
    d_passphrase2: '',
    d_loading: false
  }),
  computed: {
    c_err() {
      if (this.d_passphrase1 !== this.d_passphrase2) return this.$t('Passphrases do not match!')
      return null
    }
  },
  methods: {
    async enter() {
      this.d_loading = true
      const msg = await this.$usb.cmd('PassphraseAck', { passphrase: this.d_passphrase2 })
      if (msg.type === 'PublicKey') this.$router.push({ path: `/Loading` })
    },
    async cancel() {
      this.$router.push({ path: `/Loading` })
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Passphrase: '密码短语',
        Enter: '解锁',
        Cancel: '取消',
        'Passphrase is case-senstive.': '密码区分大小写。',
        'Passphrases do not match!': '密码不一致！'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
