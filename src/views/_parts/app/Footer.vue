<template>
  <v-footer class="pa-3" dark>
    <v-spacer></v-spacer>
    <div>
      <v-btn href="//abckey.com" target="_blank" small text dark>
        <span>&copy;&nbsp;ABCKEY</span>
      </v-btn>
      <btn-language />
      <v-btn class="mx-4" href="//github.com/abclib" target="_blank" dark icon>
        <v-icon size="24">mdi-github</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
import btnLanguage from './Language'

export default {
  components: {
    btnLanguage
  },
  data: () => ({}),
  computed: {},
  methods: {}
}
</script>

<style lang="scss"></style>
