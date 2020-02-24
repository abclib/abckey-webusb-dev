<template>
  <v-app>
    <app-drawer />
    <app-bar />
    <app-content />
    <app-footer />
    <dialog-button-ack />
    <dialog-pin-ack />
    <dialog-pass-ack />
    <dialog-word-ack />
    <dialog-failure />
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
