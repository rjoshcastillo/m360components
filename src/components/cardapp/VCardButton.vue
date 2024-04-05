<template>
  <v-card class="card-container">
    <div class="text-container">
      <div><span class="title-text">{{ title }}</span></div>
      <div><span class="subtitle-text">{{ subtitle }}</span></div>
    </div>
    <div class="button-container">
      <v-buttons :label=buttonLabel appendIcon="mdi-chevron-right" variant="primary" @click="$emit('cardClicked')" />
    </div>
    <v-img class="image-setup" :src="require('@assets/books-cut.svg')" />
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Learn more about m360 APIs'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec quam massa.'
    },
    buttonLabel: {
      type: String,
      required: false,
      default: 'API Documentation'
    },
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  width: 100%;
  border-radius: 20px;
  background-color: #FBECF1;
  padding: 32px;
  display: flex;

}

.title-text {

  font-family: Satoshi;
  font-size: 24px;
  font-weight: 900;
  color: #DA4175
}

.subtitle-text {
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  color: #606060;

}

.image-setup {
  position: absolute;
  bottom: 0;
  right: 0
}

.text-container {
  width: 80%;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  width: 20%;
}
</style>