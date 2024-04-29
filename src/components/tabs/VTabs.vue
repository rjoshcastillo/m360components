<template>
  <div class="tab-container">
    <v-tabs v-model="tab" class="tab-header">
      <v-tab v-for="(tabItem, index) in tabs" :key="index" :disabled="isTabDisabled(index)" class="custom-tab">
        <div class="tab-item">
          <span class="tab-label"> {{ tabItem.label }}</span>
          <span class="tab-badge" v-if="tabItem.content.list.length !== 0">{{ tabItem.content.list.length }} </span>
        </div>

      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(tabItem, index) in tabs" :key="index" class="custom-tab-item">
        <div v-if="tabItem.content.list.length !== 0">
          <ul>
            <li v-for="(list, index) in tabItem.content.list" :key="index">
              {{ list }}
            </li>
          </ul>
        </div>
        <div v-else class="tab-content">
          <v-card>
            <v-card-text class="scrollable-content">
              {{ tabItem.content.text }}
            </v-card-text>
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
      tabs: [ // Array of tab items
        {
          label: 'Dogs', content: {
            text: "Dogs are domesticated mammals known for their loyalty, companionship, and diverse breeds. They are descendants of wolves and have been selectively bred for various purposes, including hunting, herding, guarding, and companionship. Dogs come in a wide range of shapes, sizes, coat types, and temperaments, making them one of the most diverse species on Earth. ",
            list: []
          }
        },
        {
          label: 'Dog names', content: {
            text: "content text ",
            list: ["Labrador ", "Poodle", "Beagle"]
          }
        },
        {
          label: 'Cats', content: {
            text: "Cats are small, carnivorous mammals known for their independent nature and affectionate behavior towards humans. They have soft fur, sharp retractable claws, and keen senses, especially sight and hearing. Domestic cats come in various breeds, each with its own unique characteristics in terms of size, coat type, and temperament. They are popular pets worldwide, cherished for their companionship, playful demeanor, and ability to hunt pests like rodents. Cats are also known for their grooming habits, spending a significant amount of time cleaning themselves. Overall, cats make wonderful pets for many households, offering both companionship and entertainment.",
            list: []
          }
        },
        {
          label: 'Cat breeds', content: {
            text: "",
            list: ["Persian", "Siamese", "Bengal", "Sphynx", "Ragdoll"]
          }
        },
        {
          label: 'Disabled', content: {
            text: "text",
            list: []
          }
        },
        {
          label: 'Disabled Badge', content: {
            text: "",
            list: ["Persian", "Siamese", "Bengal", "Sphynx", "Ragdoll"]
          }
        },
      ]
    };

  },
  computed: {
    tabsVisible() {
      return this.$vuetify.breakpoint.smAndUp; // Show tabs for small screens and up
    }
  },
  methods: {
    isTabDisabled(index) {
      return this.disabledTabs.includes(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-container {
  width: 100%;
}

::v-deep .v-slide-group__content {}

::v-deep .custom-tab.v-tab {
  padding: 0px, 8px, 0px, 8px;
  text-transform: none;
}

.tab-item {
  // width: 79px;
  height: 45px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: solid 1px var(--gray-gray-300);
}

.tab-label {
  // width: 79px;
  height: 45px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}


.tab-badge {
  width: 18px;
  height: 18px;
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
  background:#e8e8e8;
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
