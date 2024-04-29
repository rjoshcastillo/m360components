<template>
  <div class="pill-container">
    <div :style="{
      backgroundColor: bgColor,
      borderRadius: '24px',
      width: pillWidth,
      height: '16px',
      padding: '4px 5px 4px 5px',
      gap: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
    pillWidth: {
      type: String,
      default: "auto",
      required: true,
    },

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
