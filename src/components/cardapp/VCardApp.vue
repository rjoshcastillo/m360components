<template>
  <div class="card-container">
    <div class="card-title">
      <div class="d-flex">
        <v-avatar color="surface-variant" size="44">
          <v-img alt="avatar" :src="imageUrl"></v-img>
        </v-avatar>
        <div class="title-container">
          <div class="title-text">{{ getTitle }}</div>
          <div class="subtitle-text">{{ time }}</div>
        </div>
      </div>

      <div class="d-flex align-center chevron-button">
        <v-icon @click="$emit('cardClicked')" color="#008DF0">mdi-chevron-right</v-icon>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="card-description">
      <p class="description-text">
        {{ description }}
      </p>
      <div class="icon-container mt-5">
        <div class="icon" v-for="icon in icons" :key="icon">
          <v-img :src="icon"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import igIcon from "@assets/icons/instagram-icon.svg";
import mailIcon from "@assets/icons/mail-icon.svg";
import messengerIcon from "@assets/icons/messenger-icon.svg";
import smsIcon from "@assets/icons/sms-icon.svg";
import viberIcon from "@assets/icons/viber-icon.svg";
import whatsAppIcon from "@assets/icons/whatsapp-icon.svg";

export default {
  name: "cardApp",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    channel: {
      type: Array,
      required: true,
    }
  },
  computed: {
    getTitle() {
      return this.title.length > 13 ? this.title.slice(0, 10) + '...' : this.title;
    },
    icons() {
      return this.channel.map(channel => {
        switch (channel) {
          case 'instagram':
            return igIcon;
          case 'mail':
            return mailIcon;
          case 'messenger':
            return messengerIcon;
          case 'sms':
            return smsIcon;
          case 'viber':
            return viberIcon;
          case 'whatsapp':
            return whatsAppIcon;
          default:
            return '';
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.card-container {
  border-radius: 8px !important;
  max-width: 241px !important;
  box-shadow: 0px 2px 15px 0px #000005;
  border-style: 1px solid #e8e8e8;
  height: 256px;
}

.card-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30% !important;
  padding: 16px 12px 12px 12px !important;
  border-bottom: 1px solid #0000;
}

.card-description {
  height: 70% !important;
  padding: 16px !important;
}

.description-text {
  font-family: Satoshi;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
}

.icon {
  height: 20px !important;
  width: 20px !important;
  margin-right: 7px;
}

.icon-container {
  display: flex;
  flex-direction: row;
  margin-top: 12px;
}

.title-container {
  margin-right: 8px;
  margin-left: 8px;

}

.chevron-button {
  cursor: pointer;
}

.title-text {
  font-family: Satoshi;
  font-size: 18px;
  font-weight: 900;
  color: #151C36;
}

.subtitle-text {
  font-family: Satoshi;
  font-size: 12px;
  font-weight: 500;
  color: #777B8A;

}
</style>
