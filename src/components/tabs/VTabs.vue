<template>
  <div>
    <v-tabs v-model="tab" class="tab-header">
      <v-tab v-for="(tabItem, index) in tabs" :key="index" class="custom-tab">
        <span class="tab-label"> {{ tabItem.label }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(tabItem, index) in tabs" :key="index" class="custom-tab-item">
        {{ tabItem.content }}
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null, // Current active tab
      tabs: [ // Array of tab items
        { label: 'item 1', content: 'item 1 content' },
        { label: 'item 2', content: 'item 2 content' },
        { label: 'item 3', content: 'item 3 content' },
        { label: 'item 4', content: 'item 4 content' },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-slide-group__content {}

::v-deep .custom-tab.v-tab {
  width: 83px;
  height: 45px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: solid 1px var(--hello-yellow-yellow-300);
  text-transform: none;
}

.tab-label {
  width: auto;
  height: 20px;
  flex-grow: 0;
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: var(--serious-navy-navy-300);
}
</style>
