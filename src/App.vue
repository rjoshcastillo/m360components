<template>
  <v-app id="app">
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
}
</script>
<style>
#app {
  font-family: "Satoshi";
}

@font-face {
  font-family: "Satoshi";
  /* TODO: if we only use this. might as well delete other fonts */
  src: url("assets/fonts/Satoshi-Variable.woff2") format("woff2"),
    url("assets/fonts/Satoshi-Variable.woff") format("woff"),
    url("assets/fonts/Satoshi-Variable.ttf") format("truetype");
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}
</style>
