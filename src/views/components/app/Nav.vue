<template>
  <div>
    <v-app-bar dense clipped-right app>
      <v-app-bar-nav-icon @click="d_drawerMini = !d_drawerMini"></v-app-bar-nav-icon>

      <v-toolbar-title v-text="$route.path"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text rounded @click="connect()">
        <v-icon>mdi-plus</v-icon>
        <span>{{ $t('Connect') }}</span>
      </v-btn>

      <v-menu v-if="c_label" open-on-hover offset-y close-on-content-click>
        <template v-slot:activator="{ on }">
          <v-btn outlined rounded color="blue" v-on="on">
            <v-icon>mdi-usb-port</v-icon>
            <span class="text-capitalize">{{ c_label }}</span>
          </v-btn>
        </template>

        <v-list nav>
          <v-list-item @click="settings()">
            <v-icon>mdi-cog-outline</v-icon>
            <v-list-item-title class="ml-2">Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="refresh()">
            <v-icon>mdi-refresh</v-icon>
            <v-list-item-title class="ml-2">Refresh</v-list-item-title>
          </v-list-item>
          <v-spacer></v-spacer>
          <v-list-item @click="removes()">
            <v-icon>mdi-logout-variant</v-icon>
            <v-list-item-title class="ml-2">Removes </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- navigation-drawer -->
    <v-navigation-drawer :mini-variant="d_drawerMini" :expand-on-hover="d_drawerMini" permanent app>
      <v-list dense nav>
        <span v-for="nav in this.$router.options.routes" :key="nav.path">
          <v-list-item v-if="nav.meta && !nav.children" :to="nav.path">
            <v-list-item-icon v-if="nav.meta.icon">
              <v-icon v-text="nav.meta.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="nav.meta.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-if="nav.meta && nav.children" :prepend-icon="nav.meta.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="nav.meta.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="snav in nav.children" :key="snav.path" :to="`${nav.path}/${snav.path}`">
              <v-list-item-icon v-if="snav.meta.icon">
                <v-icon v-text="snav.meta.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="snav.meta.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </span>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    d_drawerMini: true
  }),
  computed: {
    c_label: vm => vm.$store.__s('usb.label')
  },
  methods: {
    connect() {
      this.$router.push('/Connect')
    },
    refresh() {
      this.$router.push('/Loading')
    },
    settings() {
      this.$router.push('/Settings')
    },
    async removes() {
      this.$router.push('/Connect')
      window.location.reload(true)
    }
  },
  i18n: {
    messages: {
      zhCN: {
        Connect: '连接'
      }
    }
  }
}
</script>

<style lang="scss"></style>
