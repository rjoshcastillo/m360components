<template>
  <div class="main" :style="{ backgroundColor: user.theme.background }">
    <div class="switch-toggle">
      <v-switch v-model="isDarkTheme" color="primary"></v-switch>
      <span :style="{ color: user.theme.textColor }">{{
        isDarkTheme ? "Dark" : "Light"
      }}</span>
    </div>
    <div>
      <!-- <Josh />
      <Junryl /> -->
      <Jieric />
    </div>
  </div>
</template>
<script>
import Josh from "./Josh.vue";
import Jieric from "./Jieric.vue";
import Junryl from "./Junryl.vue";
import { userStore } from "../stores/index";

export default {
  components: {
    Jieric,
    Josh,
    Junryl,
  },
  data() {
    return {
      isDarkTheme: false,
      user: userStore(),
    };
  },
  created() {
    this.applyTheme();
  },
  watch: {
    isDarkTheme() {
      this.applyTheme();
    },
  },
  methods: {
    applyTheme() {
      this.user.theme = this.isDarkTheme
        ? this.$vuetify.theme.themes.dark
        : this.$vuetify.theme.themes.light;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.switch-toggle {
  display: flex;
  align-items: center;
}

.container {
  margin-bottom: 50px;
}
</style>
