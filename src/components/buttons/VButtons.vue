<template>
    <v-btn
      :x-small="xs"
      :small="sm"
      :large="l"
      :x-large="xl"
      :loading="loading"
      :text="text"
      :plain="plain"
      :icon="icon"
      :disabled="disabled"
      :color="color"
      :block="block"
      :class="`text-uppercase rounded-lg black--text letter-spacing-none ${customClass}`"
      :depressed="depressed"
      :outlined="outlined"
      @click="handleClick()">
      <slot></slot>
    </v-btn>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: 'primary',
      },
      xs: {
        type: Boolean,
        default: false,
      },
      sm: {
        type: Boolean,
        default: false,
      },
      l: {
        type: Boolean,
        default: false,
      },
      xl: {
        type: Boolean,
        default: false,
      },
      customClass: {
        type: String,
        default: 'font-clanpro-reg font-weight-black',
      },
      text: {
        type: Boolean,
        default: false,
      },
      plain: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
      depressed: {
        type: Boolean,
        default: true,
      },
      outlined: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick() {
        this.$emit('handleClick');
      },
    },
  };
  </script>
  