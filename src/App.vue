<template>
  <v-app>
    <app-drawer />
    <app-bar />
    <app-content />
    <app-footer />
    <dialog-button-ack :show="$store.__s('dialog.buttonAck')" />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  watch: {
    $route() {
      window.document.title = this.$t(this.$route.meta.title)
    }
  }
}
</script>
