<template>
  <v-app>
    <app-nav />
    <app-content />
    <app-footer />
    <!--<dialog-button-ack />
    <dialog-pass-ack />
    <dialog-word-ack />
    <dialog-failure /> -->
    <dialog-error />
  </v-app>
</template>

<script>
import appNav from '@/views/components/app/Nav'
import dialogError from '@/views/components/dialog/Error'

export default {
  name: 'App',
  components: {
    appNav,
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
