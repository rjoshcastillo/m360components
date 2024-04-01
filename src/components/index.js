import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';


const requireButtons = require.context('./buttons', false, /_[A-Z]\w+\.(vue)$/);
const requireCards = require.context('./cards', false, /_[A-Z]\w+\.(vue)$/);

requireButtons.keys().forEach((fileName) => {
  const componentConfig = requireButtons(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

requireCards.keys().forEach((fileName) => {
    const componentConfig = requireCards(fileName);
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });






