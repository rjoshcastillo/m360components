<template>
  <div>
    <h4>SELECTED ITEMS : {{ selected }}</h4>
    <v-checkbox
      v-model="selected"
      v-for="(item, index) in boxItems"
      :key="index"
      :label="item.label"
      :value="item.value"
      class="check-item">
    </v-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  props: ["boxItems"],
  computed: {},

  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
::v-deep .check-item .v-input--selection-controls__input {
  height: 16px;
  width: 16px;
  border-width: 1px solid #151c36;
  border-radius: 100px;
}

::v-deep .check-item .v-label {
  font-size: 14px;
  margin-left: 10px;
}
</style>
