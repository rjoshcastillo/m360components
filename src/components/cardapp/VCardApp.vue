<template>
  <div class="card-container">
    <div class="card-title">
      <div>
        <v-avatar color="surface-variant" size="44">
          <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
        </v-avatar>
      </div>
      <div></div>
    </div>
    <v-divider></v-divider>
    <div class="card-description">
      <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum posuere
        turpis quis molestie. Sed
        luctus, augue eu consectetur interdum, sem dolor consequat ligula.</p>
      <div class="mt-5">
        SHET
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
.card-container {
  border-radius: 8px !important;
  max-width: 241px !important;
  box-shadow: 0px 2px 15px 0px #000000 !important;
  border-style: 1px solid #e8e8e8;
  height: 256px;
}

.card-title {
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
</style>
