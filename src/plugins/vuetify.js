import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
Vue.use(Vuetify);

Vue.mixin({
  computed: {
  },
});


export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: '#FCFCFC', // White
        textColor: '#151C36', //Serious Navy
        primary: '#008DF0', //Techy Blue
        secondary_1: '#FFB838', //Hello Yellow
        secondary_2: '#DA4175', // Pink
        secondary_3: '#18E2CE', // Teal Appeal
        secondary_4: '#6D3D91', // Insightful Purple
      },
      dark: {
        background: '#151C36', //Serious Navy
        textColor: '#FFFFFF', // White
        primary: '#008DF0', //Techy Blue
        secondary_1: '#FFB838', //Hello Yellow
        secondary_2: '#DA4175', // Pink
        secondary_3: '#18E2CE', // Teal Appeal
        secondary_4: '#6D3D91', // Insightful Purple
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
  defaults: {
    VBtn: {
      variant: 'outlined',
      rounded: false,
    },
  },
});
