<template>
  <v-dialog v-model="d_show" width="initial" persistent scrollable>
    <v-card>
      <v-card-title class="headline"></v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field v-model="d_word" label="word" outlined hide-details />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="init()" color="error" large depressed block>Cancel</v-btn>
            <br />
            <v-btn @click="enterWord()" color="primary" large depressed block>Enter Word</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-overlay :value="d_loading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    d_show: false,
    d_word: '',
    d_loading: false
  }),
  computed: {
    c_msg: vm => vm.$store.__s('usb.msg')
  },
  watch: {
    async c_msg(msg) {
      if (msg.type === 'WordRequest') this.d_show = true
      else this.d_show = false
      this.d_loading = false
      this.d_word = ''
    }
  },
  methods: {
    async enterWord() {
      this.d_loading = true
      await this.$usb.cmd('WordAck', { word: this.d_word })
    },
    async init() {
      await this.$usb.cmd('Initialize')
    }
  }
}
</script>
