<template>
  <div>
    <router-view />
    <v-card class="ma-3">
      <v-card-text>
        <ul>
          <li><a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md">EIP 155</a></li>
          <li><a href="https://chainid.network">Chain ID</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" target="_blank">bip-0032.mediawiki</a></li>
          <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">bip-0044.mediawiki</a></li>
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
