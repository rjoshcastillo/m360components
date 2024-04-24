<template>
  <v-card class="card-container"
    :class="{'card-container-textonly': !buttonEnable && !imageEnable, 'card-container-mobile' : $phoneView }"
    :style="{ 'width': width, 'height': height, 'background-color': bgColor }">

    <div :class="{ 'text-container': !buttonEnable && !imageEnable, 'text-container-w-image': buttonEnable || imageEnable }">
      <div class="title-text-div"><span class="title-text">{{ title }}</span></div>
      <div class="subtitle-text-div"><span class="subtitle-text">{{ subtitle }}</span></div>
    </div>

    <div v-if="buttonEnable || imageEnable" class="button-container" :class="{ 'button-container-w-image': imageEnable }">
      <v-buttons v-if="buttonEnable" :label="buttonLabel" :appendIcon="buttonIcon" :variant="variant" @click="$emit('cardClicked')" />
    </div>

    <div v-if="imageEnable && !buttonEnable" class="image-setup-nobutton">
      <v-img :src="imageUrl" />
    </div>

  </v-card>
</template>


<script>
import defaultImage from '@assets/books-cut.svg';
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
    buttonIcon: {
      type: String,
      required: false,
      default: 'mdi-chevron-right'
    },
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    buttonEnable: {
      type: Boolean,
      required: false,
      default: true
    },
    imageEnable: {
      type: Boolean,
      required: false,
      default: true
    },
    imageUrl: {
      type: String,
      required: false,
      default: defaultImage
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: 'auto'
    },
    bgColor: {
      type: String,
      required: false,
      default: '#FBECF1'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  border-radius: 20px;
  padding: 32px 0 0 32px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.card-container-textonly {
  border-radius: 20px;
  padding: 32px
}

.title-text {

  font-family: Satoshi;
  font-size: 24px;
  font-weight: 900;
  color: #DA4175;

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
  width: 100%;
}

.text-container-w-image {
  width: 90%;
}
.title-text-div,
.subtitle-text-div {
  width: 90%;
}
.button-container-wo-image {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.button-container-w-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.button-container {
  display: flex;
  justify-content: center;
  width: 20%;
}
</style>