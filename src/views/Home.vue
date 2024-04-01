<template>
  <div class="main" :style="{ backgroundColor: theme.background }">
    <div class="switch-toggle">
      <v-switch v-model="isDarkTheme" color="primary"></v-switch>
      <span :style="{ color: theme.textColor }">{{ isDarkTheme ? 'Dark' : 'Light' }}</span>
    </div>
    <div class="container button-container">
      <v-buttons :color="theme.secondary_2">TEST</v-buttons>
    </div>
    <div class="container tables-container">
      TABLES
    </div>
    <div class="container stepper-container">
      TABLES
    </div>
  </div>
</template>
<script>
export default {
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

  methods :{
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
