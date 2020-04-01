<template>
  <v-dialog v-model="d_show" width="333" persistent scrollable>
    <template v-slot:activator="{ on }">
      <v-btn small text dark v-on="on">
        <v-icon size="12">mdi-translate</v-icon>
        <span class="ml-1">{{ c_label }}</span>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>{{ $t('Languages') }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <v-radio-group v-model="d_locale" column>
          <v-radio v-for="item of d_languages" :key="item.value" :label="item.label" :value="item.value"></v-radio>
          <!-- <v-radio label="中文 (繁体)" value="zhTW"></v-radio>
                <v-radio label="한국어" value="koKR"></v-radio>
                <v-radio label="日本語" value="jaJP"></v-radio> -->
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
</template>

<script>
import { setLang } from '@/i18n'

export default {
  data() {
    return {
      d_locale: '',
      d_show: false,
      d_languages: [
        {
          label: 'English',
          value: 'enUS'
        },
        {
          label: '中文 (简体)',
          value: 'zhCN'
        }
      ]
    }
  },
  computed: {
    c_locale: vm => vm.$store('app.language'),
    c_label() {
      let label = 'English'
      for (const item of this.d_languages) {
        if (item.value !== this.c_locale) continue
        label = item.label
      }
      return label
    }
  },
  created() {
    this.d_locale = this.c_locale
  },
  methods: {
    saveLanguage() {
      setLang(this.d_locale)
      this.d_show = false
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Languages: '语言列表',
        Close: '关闭',
        Save: '设定'
      }
    }
  }
}
</script>
