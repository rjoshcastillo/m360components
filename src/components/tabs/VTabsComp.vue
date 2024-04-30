<template>
  <div class="tab-container">

    <v-tabs v-model="tab" class="tab-header" v-swipeable @change="handleTabChange">
      <div v-for="(tabItem, index) in tabsData" :key="index" class="tab-content">
        <v-tab class="custom-tab" :class="{ 'tab-disabled': tabItem.disabled }" :disabled="tabItem.disabled">
          <div class="tab-item" :class="{ 'tab-disabled': tabItem.disabled }">
            <span class="tab-label"> {{ tabItem.label }}</span>
            <span class="tab-badge" v-if="tabItem.badgeItem !== 0">{{ tabItem.badgeItem }} </span>
          </div>

        </v-tab>
      </div>

    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(tabItem, index) in tabsData" :key="index" class="custom-tab-item">
        <div class="tab-content">
          <v-card>
            <slot class="scrollable-content" :name="index">
            </slot>
          </v-card>
        </div>

      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabledTabs: [4, 5],
      tab: 0, // Current active tab
    };

  },
  computed: {
    tabsVisible() {
      return this.$vuetify.breakpoint.smAndUp; // Show tabs for small screens and up
    }
  },
  props: ["tabsData"]

};
</script>

<style lang="scss" scoped>
.tab-container {
  width: 100%;
}

::v-deep .v-slide-group__content {}

::v-deep .custom-tab.v-tab {
  height: 100%;
  text-transform: none;

  &.tab-disabled {
    opacity: 50%;
    pointer-events: none;
  }
}

.tab-content {

  align-items: center;
}

.tab-item {
  // width: 79px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: solid 1px var(--gray-gray-300);

  &.tab-disabled {
    
    border-radius: 8px;
    background-color: #e8e8e8;
    padding: 2px 4px;

  }
}




::v-deep .custom-tab.v-tab:hover {
  border-bottom: 1px solid #898989
}

::v-deep .v-tab--active:hover {
  border-bottom: 0 !important;
}

.tab-label {
  // width: 79px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}


::v-deep .v-tabs-slider {
  background-color: #ffb838 !important;
  // margin-top:2px;
  height: 80%;
  width: 100%;
}

::v-deep .v-tab--active .tab-badge {
  background-color: #e6f4fe;
}

.tab-badge {
  width: 18px;
  flex-grow: 0;
  font-family: Satoshi;
  font-size: 8px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  text-align: center;
  color: var(--serious-navy-navy-300);
  border-radius: 50%;
  background: #e8e8e8;
}

.tab-content p {
  font-size: 10px;
}

.scrollable-card {
  overflow: hidden;
}

.scrollable-content {
  max-height: 100px;
  overflow-y: auto;
}

.scrollable-content::-webkit-scrollbar {
  width: 0;
}
</style>
