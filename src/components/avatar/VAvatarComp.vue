<template>
  <div class="avatar-content">
      <div v-if="image">
        <v-avatar color="orange" size="54">
          <v-img :src="image" />
        </v-avatar>
      </div>
      <div v-else>
        <v-avatar color="red" size="54" class="avatar-initials">
          <span> {{ getInitials }}</span>
        </v-avatar>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    image: "",
    name: "",
  },
  computed: {
    getInitials() {
      return this.name.substring(0, 1);
    },
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.avatar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-initials {
  color: #ffffff;
  font-family: Satoshi;
  font-size: 32px;
  letter-spacing: -2;
  line-height: 48;
}

.avatar-label {
  color: red;
  margin-top: 330px;
  font-family: Satoshi;
  font-size: 50px;
  letter-spacing: -2;
  line-height: 48;
}
.buttons {
  margin-top: 20px;
}
button {
  color: white;
  margin: 0 10px;
  font-size: 15px;
  border: 1px solid black;
  padding: 10px;
  font-style: bold;
  border-radius: 5px;
  background: #008df0;
}
</style>
