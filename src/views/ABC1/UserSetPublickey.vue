<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn @click="userSetPublicKey()" color="primary" large block>{{ $t('User Set Public Key') }}</v-btn>
        <br />
        <v-textarea v-model="d_rsaPEM" :label="$t('RSA Public Key (PEM)')"></v-textarea>
        <v-textarea v-model="d_ecPEM" :label="$t('ECDSA Private Key (PEM)')"></v-textarea>
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
import Keyto from '@trust/keyto'
import Hash from 'hash.js'
import { ec } from 'elliptic'

const ecdsa = new ec('secp256k1')

export default {
  name: 'ChangePin',
  data: () => ({
    d_rsaPEM: '',
    d_ecPEM: '',
    d_response: '',
    d_request: ''
  }),
  mounted() {
    this.d_rsaPEM = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBatZZ+iuWgttWENbHZMfHF
gvD8uzuhQ9bVQ4vwnDa+YdRuSP1ay1oXdG0tO0cEQh3lnhaezrQOnc/27gp3vlKw
j7L0/68lWqXlKtZ128iIItZBYAbcWQGu7oi9zvbrBNXX+L/Lq4A2dS8fhurF82kn
NFruoyttMSH8pGb8wQLrGHk9mLLA/HEJoD2gg6EzC92Bbw+WoCvy3mQjpkeo1QqO
1egC+evR/8Is/qtGGTf2YqjEvl4iN4yD8Dv0rOVQMbBB76z7Re4KGe6lVBM1tTmh
4xFIUfpmrtzHtXicxbMJ1gLqXLqcvRQQLFsU75gZWMvEV+TO/7C0qkfvvIrelbjV
AgMBAAE=
-----END PUBLIC KEY-----`
    this.d_ecPEM = `-----BEGIN EC PRIVATE KEY-----
MHQCAQEEILrLJDUVtiut0FHwKs3LGig3LgeOW/mkNrpkLO5PGIB5oAcGBSuBBAAK
oUQDQgAEvsPs11I7wcaCN4BuDB0Tv5QCOSY0xscagJFKNrWrbSII87XCflJs1xYi
thsrjXg4wP/lojqdkWBhSmQAzc4Vjw==
-----END EC PRIVATE KEY-----`
  },
  methods: {
    async userSetPublicKey() {
      const rsaJwk = Keyto.from(this.d_rsaPEM, 'pem').toJwk('public')
      const ecBlk = Keyto.from(this.d_ecPEM, 'pem').toString('blk', 'private')
      if (!rsaJwk) return
      if (!ecBlk) return
      const rsa_n = Buffer.from(rsaJwk.n, 'base64').toString('hex').toUpperCase()
      const rsa_e = Buffer.from(rsaJwk.e, 'base64').toString('hex').toUpperCase()
      const rsa_en = rsa_e + rsa_n
      const sha256 = Hash.sha256().update(rsa_en).digest('hex').toUpperCase()
      const key = ecdsa.keyFromPrivate(ecBlk)
      const sig = ecdsa.sign(sha256, key)
      const sig_r = sig.r.toString('hex')
      const sig_s = sig.s.toString('hex')
      const proto = {
        rsa_e,
        rsa_n,
        sig_r,
        sig_s
      }
      const result = await this.$usb.cmd('UserSetPublicKey', proto)
      this.d_request = `abckey.cmd("UserSetPublicKey", ` + JSON.stringify(proto, null, 4) + ')'
      this.d_response = JSON.stringify(result, null, 4)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        'User Set Public Key': '导入公钥',
        'RSA Public Key (PEM)': 'RSA 公钥(PEM)',
        'ECDSA Private Key (PEM)': 'ECDSA 私钥(PEM)'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
