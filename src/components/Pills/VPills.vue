<template>
  <div class="pill-container">
    <div :style="{
      backgroundColor: bgColor,
      borderRadius: '24px',
      width: pillWidth,
      height: pillHeight,
      padding:'4px 5px 4px 5px',
      gap:'10px',
      display:'flex',
      alignItems:'center'
    }">
      <div class="pill-label">
        {{ label }}
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    label: "",
    bgColor: "",
    pillWidth: "",
    pillHeight: "",
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.pill-container .pill-label {
font-family: Satoshi;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  color: white;
}
</style>
