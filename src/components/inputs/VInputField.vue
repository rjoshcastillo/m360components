<template>
  <div class="text__field">
    <div
      class="text_field__wrapper"
      @click="focusInput"
      :class="{ focus: isFocus, has_error: errorText }"
    >
      <label
        v-if="label"
        class="text_input__label"
        :class="{ focus: isFocus, has_error: errorText }"
        for="text_input"
      >
        {{ label }}</label
      >

      <div
        class="d-flex text_input__wrapper"
        :style="{ marginTop: label ? '8px' : 0 }"
      >
        <span
          v-if="type === inputType.numeric"
          class="text_input__icon_currency"
        >
          <span v-if="currency === 'USD'">$</span>
          <span v-else>₱</span>
        </span>
        <v-icon v-else class="text_input__icon">{{ prependIcon }}</v-icon>
        <input
          ref="textInput"
          :type="type"
          v-model="model"
          class="text__input"
          :style="{ textAlign: type === inputType.numeric ? 'right' : 'left' }"
          :placeholder="placeholder"
          @input="handleInput"
          @blur="formatInput"
        />
        <span v-if="type === inputType.units" class="text_input__icon_units">{{
          abbrv.toLowerCase()
        }}</span>
        <v-icon v-else class="text_input__icon">{{ appendIcon }}</v-icon>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between">
      <span
        v-if="errorText"
        class="text_input__error"
        :class="{ has_error: errorText }"
      >
        {{ errorText }}
      </span>
      <span v-else class="text_input__hint" :class="{ show_hint: showHint }">
        {{ hintText }}
      </span>
      <span
        v-if="maxChar"
        class="text_input__max_char mr-2"
        :class="{ has_error: errorText }"
        >{{ `${model.length} / ${maxChar}` }}</span
      >
    </div>
  </div>
</template>
<script>
import { userStore } from "../../stores/index";
import debounce from "lodash.debounce";

export default {
  props: {
    value: {
      /* FOR DEFAULT VALUE OF TEXTFIELD */
      type: String,
      default: "",
    },
    maxChar: {
      /* FOR MAX CHARACTER LENGTH OF TEXTFIELD */
      type: String,
      required: false,
    },
    required: {
      /* IF THE FIELD IS REQUIRED, WILL RESULT TO ERROR IF TEXT IS EMPTY */
      type: Boolean,
      required: false,
    },
    hintText: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    persistentHint: {
      /* IF THE FIELD IS REQUIRED, WILL RESULT TO ERROR IF TEXT IS EMPTY */
      type: Boolean,
      required: false,
    },
    type: {
      /* text, email and password */
      type: String,
      required: true,
      default: "text",
    },
    placeholder: "",
    prependIcon: "",
    appendIcon: "",
    currency: {
      type: String,
      default: "PHP",
      required: false,
    },
    abbrv: "",
  },
  data() {
    return {
      user: userStore(),
      model: this.value,
      errorText: null,
      isFocus: false,
      showHint: this.persistentHint,
      inputType: {
        numeric: "numeric",
        email: "email",
        text: "text",
        units: "units",
      },
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },

  methods: {

    handleInput() {
      /* Validate the value while the user is typing. */
      this.debounceValidateInput(this.model);
    },

    focusInput() {
      this.$refs.textInput.focus();
    },

    validateInput(value) {
      if (this.type === "email" && value && !this.pattern.test(value)) {
        this.errorText = "Invalid Email";
      } else if (!value && this.required) {
        this.errorText = "Required.";
      } else if (value.length > this.maxChar) {
        this.errorText = `Min ${this.maxChar} characters.`;
      } else {
        this.errorText = null;
      }
      this.emitInputError();
    },

    emitInputError() {
      if (this.errorText) {
        this.$emit("inputError", true);
        return;
      }
      this.$emit("inputError", false);
    },

    formatInput() {
      this.handleNumericInput();
      this.handleUnitInput();

      this.$emit("input", this.model);
    },

    handleNumericInput() {
      if (this.type.toLowerCase() === this.inputType.numeric) {
        const numericValue = parseFloat(this.model.replace(/[^\d.]/g, ""));
        if (!isNaN(numericValue)) {
          this.numericModel = numericValue;

          this.model = numericValue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        } else {
          this.model = "";
        }
      }
    },
    
    handleUnitInput() {
      if (this.type.toLowerCase() === this.inputType.units) {
        this.model = this.model.replace(/[^\d.]/g, "");
        const decimalIndex = this.model.indexOf(".");
        if (decimalIndex !== -1) {
          this.model = this.model.slice(0, decimalIndex + 3);
        }
      }
    },
  },

  mounted() {
    this.debounceValidateInput = debounce(this.validateInput, 100);

    this.$refs.textInput.addEventListener("focus", () => {
      this.isFocus = true;
      if (!this.persistentHint) {
        this.showHint = true;
      }
    });
    this.$refs.textInput.addEventListener("blur", () => {
      this.isFocus = false;

      if (!this.persistentHint) {
        this.showHint = false;
      }

      this.validateInput(this.model);
    });
  },
};
</script>
<style scoped>
/* REMOVE ARROW ON INPUT IF THE TYPE IS NUMBER */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* REMOVE ARROW ON INPUT IF THE TYPE IS NUMBER */
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.text_field__wrapper {
  border: 1px solid #898989;
  padding: 8px 12px;
  position: relative;
  border-radius: 8px;
  display: flex;
  height: 50px;
  flex-direction: column;
  cursor: text;
  transition: border-color 0.3s ease;

  &:hover {
    border: 1px solid black;
  }
  &.focus {
    border: 1px solid #008df0;
  }
  &.has_error {
    border: 1px solid #eb2d2d;
  }
}

.text__input {
  outline: none;
  padding: 4px;
  width: 100%;
  font-size: 14px;
}
.text_input__label {
  color: #898989;
  font-size: 12px;
  text-align: left;
  pointer-events: none;
  position: absolute;
  top: 4px;

  &.focus {
    color: #008df0;
  }
  &.has_error {
    color: #eb2d2d;
  }
}

.text_input__max_char {
  margin-left: 10px;
  font-size: 14px;

  &.has_error {
    color: #eb2d2d;
  }
}

.text_input__hint {
  margin-left: 10px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.1s linear;

  &.show_hint {
    opacity: 70%;
  }
}
.text_input__icon_currency,
.text_input__icon_units {
  margin-top: 2px;
  color: #898989;
}
.text_input__icon {
  font-size: 16px;
  margin-top: 1px;
}
.text_input__error {
  margin-left: 10px;
  font-size: 14px;

  &.has_error {
    color: #eb2d2d;
  }
}
</style>
