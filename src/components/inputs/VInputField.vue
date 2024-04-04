<template>
  <div class="text_field__wrapper">
    <v-text-field
      v-model="model"
      :rules="rules"
      :counter="maxLength ? true : false"
      :maxlength="maxLength"
      :hint="hint"
      outlined
      :prepend-inner-icon="prependIcon"
      :append-inner-icon="appendIcon"
      :persistent-hint="persistentHint"
      label="Last Name"
      class="rounded-lg no-bottom-border"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    maxLength: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    hint: {
      type: String,
      required: false,
    },
    email: false,
    prependIcon: "",
    appendIcon: "",
    persistentHint: false,
  },
  data() {
    return {
      model: this.value,
    };
  },
  computed: {
    rules() {
      const r = [];
      if (this.required) {
        r.push(this.isRequired);
      }

      if (this.email) {
        r.push(this.emailValidation);
      }
      return r;
    },

    isRequired() {
      return !!this.model || "Required.";
    },

    emailValidation() {
      return (value) => {
        console.log(value);
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      };
    },
  },
};
</script>
<style scoped>
.no-bottom-border .v-input__slot {
  border-bottom: none !important;
}
</style>
