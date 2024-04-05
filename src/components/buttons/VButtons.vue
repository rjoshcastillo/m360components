<template>
  <v-btn
    :ripple="{ class: 'primary--text' }"
    :height="height"
    :width="width"
    :disabled="disabled"
    :class="`rounded-lg black--text ___button __${variant}`"
    :style="{
      backgroundColor: styles.backgroundColor,
      border: `1px solid ${styles.borderColor}`,
      transition: 'background-color 0.3s',
    }"
    @click.stop="handleClick"
  >
    <div
      class="d-flex btn_content"
      :style="{
        justifyContent: prependIcon || appendIcon ? 'space-between' : 'center',
      }"
    >
      <v-icon v-if="prependIcon" :color="styles.fontColor"
        >{{ prependIcon }}
      </v-icon>
      <span :style="{ color: styles.fontColor }" class="btn_label">
        {{ label }}
      </span>
      <v-icon v-if="appendIcon" :color="styles.fontColor">
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
      styles: {},
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    appendIcon: {
      type: String,
      required: false,
    },
    prependIcon: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
      default: "200px",
    },
    height: {
      type: String,
      required: false,
      default: "50px",
    },
    disabled: false,
    variant: {
      type: String,
      required: false,
      default: 'primary'
    }, //primary, secondary, tertiary
  },

  methods: {
    handleClick() {
      this.$emit("click");
    },
    applyStyle() {
      // Define default styles
      const defaultStyles = {
        backgroundColor: this.user.theme.primary,
        fontColor: "white",
        borderColor: this.user.theme.primary,
      };

      const variantStyles = {
        secondary: {
          backgroundColor: "#FFFFFF",
          fontColor: this.user.theme.primary,
          borderColor: this.user.theme.primary,
        },
        tertiary: {
          backgroundColor: "#FFFFFF",
          borderColor: "#E8E8E8",
          fontColor: "#151C36",
        },
        warning: {
          backgroundColor: "#EB2D2D",
          borderColor: "#EB2D2D",
          fontColor: "#FFFFF",
        }
      };

      this.styles = Object.assign(
        {},
        defaultStyles,
        variantStyles[this.variant]
      );
    },
  },
  mounted() {
    this.applyStyle();
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
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
}
.__primary {
  &:disabled {
    border: none !important;
  }
}
.__secondary { }
.__tertiary {
  &:hover {
    border: 1px solid #008df0 !important;
  }
  &:disabled {
    border: none !important;
  }
}
</style>
