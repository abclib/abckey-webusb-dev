<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="2">
        <v-text-field v-model="d_label" label="label" />
        <v-btn @click="setLabel()" color="primary" block>Set Label</v-btn>
      </v-col>
      <v-col cols="2">
        <v-text-field v-model="d_label" label="label" />
        <v-btn @click="setLabel()" color="primary" block>Set Label</v-btn>
      </v-col>
      <v-col cols="2">
        <v-text-field v-model="d_label" label="label" />
        <v-btn @click="setLabel()" color="primary" block>Set Label</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    d_label: 'ABCKEY'
  }),
  components: {},
  methods: {
    async setLabel() {
      const result = await this.$usb.applySettings({
        label: this.d_label
      })
      console.log('setLabel', result)
    }
  }
}
</script>

<style lang="scss" scoped></style>
