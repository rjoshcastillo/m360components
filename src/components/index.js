import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireButtons = require.context("./buttons", false, /_[A-Z]\w+\.(vue)$/);
const requireInputField = require.context('./inputs', false, /_[A-Z]\w+\.(vue)$/);
// const requireCards = require.context('./cards', false, /_[A-Z]\w+\.(vue)$/);
const requireCardapp = require.context('./cardapp', false, /_[A-Z]\w+\.(vue)$/);
const requireTableAction = require.context('./tables', false, /_[A-Z]\w+\.(vue)$/);
const requireModal = require.context('./modals', false, /_[A-Z]\w+\.(vue)$/);


requireButtons.keys().forEach((fileName) => {
  const componentConfig = requireButtons(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

requireInputField.keys().forEach((fileName) => {
  const componentConfig = requireInputField(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
requireTableAction.keys().forEach((fileName) => {
    const componentConfig = requireTableAction(fileName);
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
    );
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
requireCardapp.keys().forEach((fileName) => {
  const componentConfig = requireCardapp(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
requireModal.keys().forEach((fileName) => {
  const componentConfig = requireModal(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
