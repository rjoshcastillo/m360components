<template>
  <div>
    <h4>SELECTED ITEMS : {{ selected }}</h4>
    <v-checkbox v-model="selected" v-for="(item, index) in boxItems" :key="index" :label="item.label"
      :value="item.value" class="check-item">
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
.check-item {
  gap: 8px
}

::v-deep .check-item .v-input--selection-controls__input {
  border-width: 1px solid #151c36;
  border-radius: 100px;
  align-content: center;
}

::v-deep .v-input--selection-controls__ripple {
  height: 35px;
  width: 34px;
  top: calc(50% - 24px);

}


::v-deep .check-item .v-label {
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  align-content: center;
}
</style>
