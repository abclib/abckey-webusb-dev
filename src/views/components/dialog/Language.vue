<template>
  <v-row justify="center">
    <v-dialog v-model="d_show" max-width="333" persistent scrollable>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>{{ $t('Languages') }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="d_language" column>
            <v-radio label="English" value="enUS"></v-radio>
            <v-radio label="中文 (简体)" value="zhCN"></v-radio>
            <v-radio label="中文 (繁体)" value="zhTW"></v-radio>
            <v-radio label="한국어" value="koKR"></v-radio>
            <v-radio label="日本語" value="jaJP"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="warning" @click="d_show = false" text>{{ $t('Close') }}</v-btn>
          <v-btn color="primary" @click="saveLanguage()" dark>{{ $t('Save') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      d_language: '',
      d_show: false
    }
  },
  created() {
    this.d_language = this.$store.__s('app.language')
  },
  methods: {
    saveLanguage() {
      this.$store.__s('app.language', this.d_language)
    }
  }
}
</script>
