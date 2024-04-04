<template>
  <div class="text__field">
    <div
      class="text_field__wrapper"
      @click="focusInput"
      :class="{ focus: isFocus, has_error: errorText }"
    >
      <label
        class="text_input__label"
        :class="{ focus: isFocus, has_error: errorText }"
        for="text_input"
      >
        {{ label }}</label
      ><br />

      <div class="d-flex">
        <v-icon>{{ prependIcon }}</v-icon>
        <input
          ref="textInput"
          :type="type"
          v-model="model"
          class="text__input"
          :placeholder="placeholder"
          @input="handleInput"
        />
        <v-icon>{{ appendIcon }}</v-icon>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between">
      <span class="text_input__hint" :class="{ has_error: errorText }">{{
        errorText || hintText
      }}</span>
      <span
        v-if="maxChar"
        class="text_input__hint mr-2"
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
      /* FOR DEFAULT VALUE OF TEXTFIELD */ type: String,
      default: "",
    },
    maxChar: {
      /* FOR MAX CHARACTER LENGHT OF TEXTFIELD */ type: String,
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
      required: true,
    },
    type: "" /* text, email and password */,
    placeholder: "",
    prependIcon: "",
    appendIcon: "",
  },
  data() {
    return {
      user: userStore(),
      model: this.value,
      errorText: null,
      isFocus: false,
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    focusInput() {
      this.$refs.textInput.focus();
    },

    trimInput() {
      const maxLength = parseInt(this.maxChar);
      const target = this.$refs.textInput;
      let value = target.value;

      if (value.length > maxLength) {
        value = value.slice(0, maxLength);
      }
       this.model = value;
    },

    validateInput(value) {
      if (this.type === "email" && value && !this.pattern.test(value)) {
        this.errorText = "Invalid Email";
      } else if (!value && this.required) {
        this.errorText = "Required.";
      } else {
        this.errorText = null;
      }
      this.emitInputError();
    },

    handleInput() {
      this.trimInput();
      this.debounceValidateInput(this.model);
    },

    emitInputError() {
      if(this.errorText) {
        this.$emit('inputError', true);
        return;
      }
      this.$emit('inputError', false)
    }
  },

  mounted() {
    this.trimInput();
    this.debounceValidateInput = debounce(this.validateInput, 300);

    this.$refs.textInput.addEventListener("focus", () => {
      this.isFocus = true;
    });
    this.$refs.textInput.addEventListener("blur", () => {
      this.isFocus = false;
      this.validateInput();
    });
  },
};
</script>
<style scoped>
.text_field__wrapper {
  border: 1px solid #898989;
  padding: 8px 12px;
  border-radius: 10px;
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
}
.text_input__label {
  color: #898989;
  font-size: 14px;
  text-align: center;
  pointer-events: none;

  &.focus {
    color: #008df0;
  }
  &.has_error {
    color: #eb2d2d;
  }
}
.text_input__hint {
  margin-left: 10px;
  font-size: 14px;
  opacity: 70%;

  &.has_error {
    color: #eb2d2d;
  }
}
</style>
