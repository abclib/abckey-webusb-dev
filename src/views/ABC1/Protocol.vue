<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-textarea label="decode" v-model="d_decode" filled auto-grow></v-textarea>
      </v-col>
      <v-col>
        <v-textarea label="encode" v-model="d_encode" filled auto-grow></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Protocol',
  data: () => ({
    d_decode: '',
    d_encode: ''
  }),
  watch: {
    async d_decode(newVal, oldVal) {
      try {
        newVal = newVal === '' ? null : newVal
        oldVal = oldVal === '' ? null : oldVal
        if (JSON.stringify(JSON.parse(newVal)) === JSON.stringify(JSON.parse(oldVal))) return
        const decode = JSON.parse(newVal)
        const arrBuf = await this.$usb.protocol(0xabc1).encode(decode.type, decode.data)
        const arrStr = []
        for (const item of arrBuf) arrStr.push(Buffer.from(item).toString('hex'))
        this.d_encode = JSON.stringify(arrStr, null, 1)
      } catch {
        //
      }
    },
    async d_encode(newVal, oldVal) {
      try {
        newVal = newVal === '' ? null : newVal
        oldVal = oldVal === '' ? null : oldVal
        if (JSON.stringify(JSON.parse(newVal)) === JSON.stringify(JSON.parse(oldVal))) return
        const arrStr = JSON.parse(newVal)
        const arrBuf = []
        for (const item of arrStr) arrBuf.push(Buffer.from(item, 'hex'))
        const decode = await this.$usb.protocol(0xabc1).decode(arrBuf)
        this.d_decode = JSON.stringify(decode, null, 4)
      } catch {
        //
      }
    }
  },
  created() {
    const decode = {
      type: 'Ping',
      data: {
        message: 'ABCKEY'
      }
    }
    this.d_decode = JSON.stringify(decode, null, 4)
  }
}
</script>

<style lang="scss" scoped></style>
