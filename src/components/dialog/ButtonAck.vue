<template>
  <v-dialog v-model="show" max-width="333" persistent scrollable>
    <v-card>
      <v-card-title class="headline">ButtonAck</v-card-title>
      <v-card-text class="headline">Confirm the action on your device!</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  methods: {}
}
</script>
