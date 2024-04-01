<template>
  <div class="main" :style="{ backgroundColor: theme.background }">
    <div class="switch-toggle">
      <v-switch v-model="isDarkTheme" color="primary"></v-switch>
      <span :style="{ color: theme.textColor }">{{ isDarkTheme ? 'Dark' : 'Light' }}</span>
    </div>
    <div>
      <h1>Progress - Josh</h1>
      <Josh />
    </div>
    <div>
      <h1>Progress - Junryl</h1>
      <Junryl />
    </div>
    <div>
      <h1>Progress- Jieric</h1>
      <Jieric />
    </div>
  </div>
</template>
<script>

import Josh from './Josh.vue';
import Jieric from './Jieric.vue';
import Junryl from './Junryl.vue';
export default {
  components: {
    Jieric,
    Josh,
    Junryl
  },
  data() {
    return {
      isDarkTheme: false
    };
  },

  computed: {
    theme() {
      return this.isDarkTheme ? this.$vuetify.theme.themes.dark : this.$vuetify.theme.themes.light;
    },
  },

  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding: 20px;
  height: 100vh;
  width: 100vw;
}

.switch-toggle {
  display: flex;
  align-items: center;
}

.container {
  margin-bottom: 50px;
}
</style>
