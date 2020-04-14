<template>
  <div>
    <router-view />
    <v-card class="ma-3">
      <v-card-text>
        <ul>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" target="_blank">bip-0032.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">bip-0044.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki" target="_blank">bip-0045.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki" target="_blank">bip-0049.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank">bip-0143.mediawiki</a></li>
          <li><a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank">slip-0044.md</a></li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'bitcoin'
}
</script>
