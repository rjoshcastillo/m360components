<template>
  <v-btn
    :ripple="{ class: 'primary--text __custom-ripple' }"
    :height="height"
    :width="width"
    :disabled="disabled"
    :class="`rounded-lg black--text ___button __${variant}`"
    :style="buttonStyle"
    @click.stop="handleClick"
    :block="block"
  >
    <div
      class="d-flex btn_content"
      :style="{
        justifyContent: prependIcon || appendIcon ? 'space-between' : 'center',
      }"
    >
      <v-icon v-if="prependIcon" :color="styles.iconColor">
        {{ prependIcon }}
      </v-icon>
      <span :style="{ color: styles.fontColor }" class="btn_label">
        {{ label }}
      </span>
      <v-icon v-if="appendIcon" :color="styles.iconColor">
        {{ appendIcon }}
      </v-icon>
    </div>
  </v-btn>
</template>

<script>
import { userStore } from "../../stores/index";
export default {
  name: "Button",
  data() {
    return {
      user: userStore(),
      styles: {
        backgroundColor: "",
        fontColor: "",
      },
      variantStyles: {
        primary: {
          default: {
            backgroundColor: userStore().theme.primary,
            border: `1px solid ${userStore().theme.primary}`,
            fontColor: "#FFFFFF",
            iconColor: "#FFFFFF"
          },
          clicked: {
            backgroundColor: "#0062A8",
            border: `1px solid ${userStore().theme.primary}`,
            fontColor: "#FFFFFF",
            iconColor: "#FFFFFF"
          },
        },
        secondary: {
          default: {
            backgroundColor: "#E6F4FE",
            border: `1px solid ${userStore().theme.primary}`,
            fontColor: userStore().theme.primary,
            iconColor: userStore().theme.primary
          },
          clicked: {
            backgroundColor: userStore().theme.primary,
            border: `1px solid ${userStore().theme.primary}`,
            fontColor: '#FFFFFF',
            iconColor: '#FFFFFF'
          },
        },
        tertiary: {
          default: {
            backgroundColor: "#FFFFFF",
            border: `1px solid #E8E8E8`,
            fontColor: "#151C36",
            iconColor: userStore().theme.primary
          },
          clicked: {
            backgroundColor: userStore().theme.primary,
            border: `1px solid ${userStore().theme.primary}`,
            fontColor: '#FFFFFF',
            iconColor: '#FFFFFF'
          },
        },
        warning: {
          default: {
            backgroundColor: "#EB2D2D",
            border: `1px solid #EB2D2D`,
            fontColor: "#FFFFFF",
            iconColor: '#FFFFFF'
          },
          clicked: {},
        },
      },
    };
  },
  props: {
    label: { type: String, required: true },
    icon: { type: String, default: "" },
    appendIcon: { type: String, default: "" },
    prependIcon: { type: String, default: "" },
    width: { type: String, default: "200px" },
    height: { type: String, default: "50px" },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["primary", "secondary", "tertiary", "warning"].includes(value),
    },
  },

  methods: {
    handleClick() {
      this.$emit("click");
      this.styles = { ...this.variantStyles[this.variant].clicked };

      setTimeout(() => {
        this.styles = { ...this.variantStyles[this.variant].default };
      }, 200);
    },
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.styles.backgroundColor,
        border: this.styles.border,
        transition: "background-color 0.2s",
        opacity: this.styles.opacity || 1,
      };
    },
  },

  watch: {
    disabled: {
      handler(value) {
        if(value) {
          this.styles = { ...this.variantStyles[this.variant].disabled };
        } else {
          this.styles = { ...this.variantStyles[this.variant].default };
        }
      }
    }
  },

  mounted() {
    this.styles = { ...this.variantStyles[this.variant].default };
  },
};
</script>
<style lang="scss" scoped>
.btn_content {
  align-items: center;
  width: 100%;
}

.btn_label {
  font-size: 14px;
}

.___button {
  box-shadow: none;
  text-transform: none;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
}

.__tertiary {
  &:hover {
    border: 1px solid #008df0 !important;
  }
}
</style>
