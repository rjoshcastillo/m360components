<template>
  <div class="pill-container">
    <div
      :style="{
        backgroundColor: bgColor,
        borderRadius: '24px',
        display: 'inline-flex',
        fontSize: '11px',
        lineHeight: '20px',
        fontFamily: 'satoshi',
        padding: '0 5px 0 5px ',
        color: 'white',
      }">
      {{ label }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  props: {
    label: "",
    bgColor: "",
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped></style>
