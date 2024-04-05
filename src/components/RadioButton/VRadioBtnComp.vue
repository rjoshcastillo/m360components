<template>
  <div>
    <h5>Selected Button: {{ radios }}</h5>
    <v-radio-group
      v-for="(item, index) in btnArray"
      :key="index"
      v-model="radios">
      <v-radio
        :label="item.label"
        :value="item.value"
        class="radio-btn"></v-radio>
    </v-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radios: "",
    };
  },
  props: ["btnArray"],
  computed: {},

  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.radio-btn {
  display: flex;
}
::v-deep .radio-btn .v-input--selection-controls__input {
  height: 16px;
  width: 16px;
  border-width: 1px solid #151c36;
  border-radius: 14px;
}

::v-deep .radio-btn .v-label {
  font-size: 14px;
  margin-left: 10px;
}
</style>
