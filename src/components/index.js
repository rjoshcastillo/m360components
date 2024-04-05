import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireButtons = require.context("./buttons", false, /_[A-Z]\w+\.(vue)$/);
const requireInputField = require.context('./inputs', false, /_[A-Z]\w+\.(vue)$/);
const requireToasts = require.context('./toasts', false, /_[A-Z]\w+\.(vue)$/);
const requireModal = require.context('./modals', false, /_[A-Z]\w+\.(vue)$/);
const requireCard = require.context("./cardapp", false, /_[A-Z]\w+\.(vue)$/);
const requireTable = require.context("./tables", false, /_[A-Z]\w+\.(vue)$/);


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
requireTable.keys().forEach((fileName) => {
  const componentConfig = requireTable(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
requireCard.keys().forEach((fileName) => {
  const componentConfig = requireCard(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
requireModal.keys().forEach((fileName) => {
  const componentConfig = requireModal(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

requireToasts.keys().forEach((fileName) => {
  const componentConfig = requireToasts(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

requireToasts.keys().forEach((fileName) => {
  const componentConfig = requireToasts(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
