<!-- stepper.vue -->
<template>
  <div class="stepper">
    <div class="stepper-header" :class="{ 'phone-view': $phoneView }">
      <div v-for="(step, index) in steps" :key="index" :class="{
        'step-active': currentStep === index,
        'step-inactive': currentStep !== index,
        'step-done': step.done,
      }">
        <div class="header-content">
          <div class="header-item">
            <div class="step-item">
              <div class="step-content">
                <label v-if="step.done === false" class="step-label">
                  {{ index + 1 }}</label>
                <v-icon class="step-icon" v-if="step.done === true">mdi-check</v-icon>
              </div>
            </div>
            <div class="step-name">
              {{ step.stepLabel }}
            </div>
          </div>
          <div class="header-label" v-if="stepperTag === true">
            <label v-if="currentStep === index"> ACTIVE </label>
            <label v-else-if="step.done === true"> DONE </label>
            <label v-else> INACTIVE </label>
          </div>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button @click="prevStep" :disabled="currentStep === 0">Previous</button>
      <button @click="nextStep">
        {{ label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0,
      steps: this.stepperData,
      label: "next",
    };
  },
  props: {
    stepperLabel: "",
    stepperData: Array,
    stepperTag: Boolean,
  },

  methods: {
    nextStep() {
      if (this.currentStep <= this.steps.length - 1) {
        this.currentStep++;
        this.steps[this.currentStep - 1].done = true;
        if (this.currentStep === this.steps.length - 1) {
          this.label = "Done";
        }
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.steps[this.currentStep].done = false;
        this.label = "next";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper {
  display: flex;
  flex-direction: column;

}

.stepper-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &.phone-view {
    flex-direction: column;
    align-items: start;
  }
}

.header-content {
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 10px;
  width: 418.67px;
  height: 139px;
  padding: 32px 16px 32px 16px;
  opacity: 0px;
  background: var(--color-color-gray-neutral-white, #FFFFFF);
  border: 1px solid var(--color-color-gray-neutral-gray-50, #E8E8E8);
  box-shadow: 0px 2px 15px 0px #00000005;
}

.header-item {
  height: 139px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 20px;
}

.step-name {
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}


.step-active {
  color: #008df0;
}



.step-active .step-item {
  background: #008df0;
  border: 1px solid#008df0;
}

.step-done .step-item {
  background: #6abcf6;
  border: 1px solid#008df0;
}

.step-done .step-item {
  background: #6abcf6;
}

.step-active .step-label {
  color: white;
}

.step-active .step-item {
  color: white;
}

.step-item {
  align-content: center;
  border: 2px solid #000;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  font-family: Satoshi;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
}

.step-item .step-icon {
  color: #ffffff;
}

.step-content {
  text-align: center;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 0 10px;
}
</style>
