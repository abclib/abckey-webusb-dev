<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-btn outlined block @click="add()">
        <v-icon left>mdi-plus</v-icon>
        <span>{{ c_pro ? c_pro : 'Check for devices' }}</span>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn outlined block @click="init()">
        <v-icon left>mdi-refresh</v-icon>
        <span>Initialize</span>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item to="/GetPublicKey">
        <v-list-item-content>
          <v-list-item-title>GetPublicKey</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/GetAddress">
        <v-list-item-content>
          <v-list-item-title>GetAddress</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/signTransaction">
        <v-list-item-content>
          <v-list-item-title>SignTransaction</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/Settings">
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    c_pro: vm => vm.$store.__s('usb.product')
  },
  methods: {
    async add() {
      await this.$usb.add()
    },
    async init() {
      await this.$usb.cmd('Initialize')
    }
  }
}
</script>

<style lang="scss"></style>
