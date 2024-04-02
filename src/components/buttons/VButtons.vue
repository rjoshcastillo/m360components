<template>
  <v-btn
    :height="height"
    :width="width"
    :disabled="disabled"
    :class="`rounded-lg black--text ___button __${variant}`"
    :style="{ 
      backgroundColor: styles.backgroundColor, 
      border: `1px solid ${styles.borderColor}`,
      transition: 'background-color 0.3s'
    }"
    @click.stop="handleClick"
    style="text-transform: none">

    <div class="d-flex btn_content" 
      :style="{ justifyContent: prependIcon || appendIcon ? 'space-between' : 'center' }">

      <v-icon v-if="prependIcon" 
        :color="styles.fontColor">{{ prependIcon }}
      </v-icon>
      <span :style="{ color: styles.fontColor }" class="btn_label">
        {{ label }}
      </span>
      <v-icon v-if="appendIcon" 
        :color="styles.fontColor">
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
      styles: {}
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
    variant: '', //Primary, Secondary, Tertiary
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
    applyStyle() {
      //Default Primary
      const dynamicStyle = {
        backgroundColor: this.user.theme.primary,
        fontColor: 'white',
        borderColor: this.user.theme.primary,
      }
      switch (this.variant) {
        case 'secondary':
          dynamicStyle.backgroundColor = '#FFFFFF'
          dynamicStyle.fontColor = this.user.theme.primary
          dynamicStyle.borderColor = this.user.theme.primary
          break;
        case 'tertiary':
          dynamicStyle.backgroundColor = '#FFFFFF'
          dynamicStyle.borderColor = '#E8E8E8'
          dynamicStyle.fontColor = '#151C36'
          break;
        default:
          break;
      }
      this.styles = dynamicStyle;
    }
  },
  mounted() {
    this.applyStyle();
  }
};
</script>
<style lang='scss' scoped>
.btn_content {
  align-items: center;
  width: 100%;
}

.btn_label {
  font-size: 14px;
}

.___button {
  box-shadow: none;
}

.__primary {
  &:disabled {
    border: none !important;
  }
}
.__secondary {
  &:hover {
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
  }
  &:disabled {
    border: none !important
  }
}
.__tertiary {
  &:hover {
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
    border: 1px solid #008DF0 !important;
  }
  &:disabled {
    border: none !important
  }
}
</style>
