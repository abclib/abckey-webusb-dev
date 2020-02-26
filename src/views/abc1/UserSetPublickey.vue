<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col cols="4">
            <v-btn @click="userSetPublickey()" color="primary" large block>User Set Public Key</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea v-model="d_rsaPEM" label="RSA Public Key (PEM)" auto-grow></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea v-model="d_ecdsaPEM" label="ECDSA Private Key (PEM)" auto-grow></v-textarea>
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
import Keyto from '@trust/keyto'
export default {
  name: 'ChangePin',
  data: () => ({
    d_rsaPEM: '',
    d_ecdsaPEM: '',
    d_response: '',
    d_request: ''
  }),
  mounted() {
    this.d_rsaPEM = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAynIDF51wJD4fSK0CNSaskYwi14vIiUVXMbbJ4zv7wpRbmhZDd/ZE
2rFWYG7e6lH4t9uMZbeZnMbvjcpIJtARhAJ3cl4ymQiqAAiEIOq4b/VTRetxVqov
VwI98Y7M72XFRWbgHTQpqoVlgbVdIfEeZ++BVeCtf4LJtiPJl8xMv6QI9g3JaEDT
XKSzzFgNGL5mv13eK0iK+yj5A7gUTZoMgJTtsvqzL3LZrFcI9wSy9D/AvSWNTqkY
0olO17/z+zGf/9UbUJbBPhDUa8QyIplDqX7jc4BFlFF+FHS2+c+pCs02ilmV3eO5
YZAC5eFZZdpzuczuMJLyALZ8sz67n380qQIDAQAB
-----END RSA PUBLIC KEY-----`
    this.d_ecdsaPEM = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg1QrLBxWHTn/H6Vgv
g6hdfNBMF1lN2Mri3Lvm3v8nJxmhRANCAATlbd4A2ooCUuet8wcdXRKXzp3nUZJI
Em1Lks13Wkc2QhZvNQte6YLbrbr+d85GZGkIhPcLsE+KStdi4ug3NKtE
-----END PRIVATE KEY-----`
  },
  methods: {
    async userSetPublickey() {
      const jwk = Keyto.from(this.d_rsaPEM, 'pem').toJwk('public')
      if (!jwk) return
      console.log(jwk)
      // const proto = {
      //   rsa_mod: 1,
      //   rsa_exp: 2,
      //   msg_sign: 3
      // }
      // const result = await this.$usb.cmd('UserSetPublickey', proto)
      // this.d_request = `abckey.cmd("UserSetPublickey", ` + JSON.stringify(proto, null, 4) + ')'
      // this.d_response = JSON.stringify(result, null, 4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
