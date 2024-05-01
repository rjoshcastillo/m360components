<template>
  <v-card class="card-container"
    :class="{ 'card-container-textonly': !buttonEnable && !imageEnable, 'card-container-imagetextonly': !buttonEnable && imageEnable, 'card-container-buttontextonly': buttonEnable && !imageEnable,'card-container-mobile': $phoneView}"
    :style="{ 'width': width, 'height': height, 'background-color': bgColor }">

    <div
      :class="{ 'text-container': !buttonEnable || !imageEnable && $phoneView, 'text-container-w-image': buttonEnable && imageEnable && !$phoneView }">
      <div class="title-text-div"><span class="title-text">{{ title }}</span></div>
      <div class="subtitle-text-div"><span class="subtitle-text">{{ subtitle }}</span></div>
    </div>

    <div v-if="buttonEnable"
      :class="{ 'button-container-w-image': imageEnable, 'button-container-wo-image': !imageEnable }">
      <div>
        <v-buttons v-if="buttonEnable" :label="buttonLabel" :appendIcon="buttonIcon" :variant="variant"
          @click="$emit('cardClicked')" />
      </div>
      <div v-if="!$phoneView && imageEnable"><v-img :src="imageUrl" /></div>
    </div>

    <div v-if="imageEnable && !buttonEnable && !$phoneView" class="image-setup-nobutton">
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
.card-container,
.card-container-imagetextonly  {
  border-radius: 20px;
  padding: 32px 0 0 32px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.card-container-buttontextonly
{
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.card-container-mobile {
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
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

  .title-text-div,
  .subtitle-text-div {
    width: 100%;
  }
}

.text-container-w-image {
  width: 90%;

  .title-text-div,
  .subtitle-text-div {
    width: 100%;
  }


}

.text-container-wo-image {
  width: 80%;

  .title-text-div,
  .subtitle-text-div {
    width: 100%;
  }
}


.button-container-wo-image {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
}

.button-container-w-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  // width: 20%;
}
</style>