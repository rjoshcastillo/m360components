<!-- stepper.vue -->
<template>
  <div class="stepper">
    <div class="header">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="{
          'step-active': currentStep === index,
          'step-inactive': currentStep !== index,
          'step-done': step.done,
        }">
        <div class="header-content">
          <div class="stepItem">
            <div class="step-content">
              <label v-if="step.done === false" class="step-label">
                {{ index + 1 }}</label
              >
              <v-icon class="step-icon" v-if="step.done === true"
                >mdi-check</v-icon
              >
            </div>
          </div>
          Personal Information
        </div>
        <div class="header-label">
          <label v-if="currentStep === index"> ACTIVE </label>
          <label v-else-if="step.done === true"> DONE </label>
          <label v-else> INACTIVE </label>
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
      steps: [
        // Define your steps here
        // For example:
        {
          name: "Step 1",
          component: "Step1Component",
          done: false,
        },
        {
          name: "Step 2",
          component: "Step2Component",
          done: false,
        },
        {
          name: "Step 3",
          component: "Step3Component",
          done: false,
        },
      ],
      label: "next",
    };
  },
  computed: {},

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  border: 1px solid black;
}
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.header-content {
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;
  align-items: center;
}
.step-done {
  font-weight: bold 2px;
  color: red;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border: 2px solid black;
  box-shadow: 0px 2px 15px 0px #000005;
  border-radius: 5%;
}

.step-active {
  font-weight: bold 2px;
  color: #008df0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border: 2px solid black;
  box-shadow: 0px 2px 15px 0px #000005;
  border-radius: 5%;
}
.step-inactive {
  font-weight: bold 2px;
  color: #898989;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border: 2px solid black;
  box-shadow: 0px 2px 15px 0px #000005;
  border-radius: 5%;
}
.step-active .stepItem {
  background: #008df0;
}
.step-done .stepItem {
  background: #008df0;
}
.step-active .step-label {
  color: white;
}
.stepItem {
  align-content: center;
  border: 2px solid #000;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  margin-right: 20px;
  font-size: 16px;
}
.stepItem .step-icon {
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

/* Media query for screens with a minimum width of 601px and maximum width of 900px */
@media screen and (min-width: 601px) and (max-width: 900px) {
  .header {
    flex-direction: column;
    align-items: start;
  }
}

@media screen and (min-width: 301px) and (max-width: 900px) {
  .header {
    flex-direction: column;
    align-items: start;
  }
}
</style>
