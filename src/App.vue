<template>
  <v-app>
    <app-nav />
    <app-content />
    <app-footer />

    <!--<dialog-pass-ack />
    <dialog-word-ack />
    <dialog-failure /> -->
    <dialog-button-ack />
    <dialog-error />
  </v-app>
</template>

<script>
import appNav from '@/views/components/app/Nav'
import dialogError from '@/views/components/dialog/Error'
import dialogButtonAck from '@/views/components/dialog/ButtonAck'

export default {
  name: 'App',
  components: {
    appNav,
    dialogButtonAck,
    dialogError
  },
  data: () => ({}),
  computed: {},
  watch: {
    $route() {
      window.document.title = this.$t(this.$route.meta.title)
    }
  },
  methods: {}
}
</script>
