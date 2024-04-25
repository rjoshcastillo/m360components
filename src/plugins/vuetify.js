import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
Vue.use(Vuetify);

Vue.mixin({
  computed: {
    $largeView() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    $tabletView() {
      return this.$vuetify.breakpoint.md;
    },
    $phoneView() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    $xsView() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    $desktopView() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    $laptopView() {
      return this.$vuetify.breakpoint.lg;
    },
    $tabletAndDownView() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    $smView() {
      return this.$vuetify.breakpoint.sm; 
    },
  },
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#FCFCFC", // White
        textColor: "#151C36", //Serious Navy
        primary: "#008DF0", //Techy Blue
        secondary_1: "#FFB838", //Hello Yellow
        secondary_2: "#DA4175", // Pink
        secondary_3: "#18E2CE", // Teal Appeal
        secondary_4: "#6D3D91", // Insightful Purple
      },
      dark: {
        background: "#151C36", //Serious Navy
        textColor: "#FFFFFF", // White
        primary: "#008DF0", //Techy Blue
        secondary_1: "#FFB838", //Hello Yellow
        secondary_2: "#DA4175", // Pink
        secondary_3: "#18E2CE", // Teal Appeal
        secondary_4: "#6D3D91", // Insightful Purple
      },
    },
  },

  icons: {
    iconfont: "mdi",
  },
  defaults: {
    VBtn: {
      variant: "outlined",
      rounded: false,
    },
  },
});
