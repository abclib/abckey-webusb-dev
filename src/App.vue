<template>
  <v-app>
    <app-nav />
    <app-content />
    <app-footer />

    <!-- <dialog-word-ack /> -->
    <dialog-button-ack />
    <dialog-error />
  </v-app>
</template>

<script>
import appNav from '@/views/_parts/app/Nav'
import appFooter from '@/views/_parts/app/Footer'
import dialogError from '@/views/_parts/dialog/Error'
import dialogButtonAck from '@/views/_parts/dialog/ButtonAck'

export default {
  name: 'App',
  components: {
    appNav,
    appFooter,
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
