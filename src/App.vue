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
