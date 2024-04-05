<template>
  <div>
    <div class="stepper-container">
      <h2>STEPPER COMPONENT</h2>
      <v-stepper-comp></v-stepper-comp>
    </div>
    <h2>AVATAR COMPONENT</h2>
    <div class="avatar-container">
      <div class="avatar-content">
        <v-avatar-comp
          :image="require('@assets/human-avatar.svg')"
          name="Jhon Doe">
        </v-avatar-comp>

        <v-avatar-comp name="Jhon Doe"> </v-avatar-comp>
        <v-avatar-comp
          :image="require('@assets/human-avatar-3.svg')"
          name="Jhon Doe">
        </v-avatar-comp>
      </div>
    </div>
    <h2>RADIO BUTTON COMPONENT</h2>
    <div class="radio-container">
      <h3>BUTTONS STATUS</h3>
      <div class="radio-status">
        <div>
          <v-radio-group>
            <v-radio label="Radio One" value="selected"></v-radio>
          </v-radio-group>
          <h4>DEFAULT</h4>
        </div>
        <div>
          <v-radio-group v-model="selected">
            <v-radio label="Radio One" value="selected"></v-radio>
          </v-radio-group>
          <h4>TICKED</h4>
        </div>
        <div>
          <v-radio-group>
            <v-radio
              label="Radio One"
              value="selected"
              :disabled="true"></v-radio>
          </v-radio-group>
          <h4>DISABLED</h4>
        </div>
        <div>
          <v-radio-group v-model="selected">
            <v-radio
              label="Radio One"
              value="selected"
              :disabled="true"></v-radio>
          </v-radio-group>
          <h4>DISABLED</h4>
        </div>
      </div>
      <div class="radio-active">
        <h3>ACTIVE BUTTONS</h3>
        <v-radio-btn-comp :btnArray="options"></v-radio-btn-comp>
      </div>
    </div>

    <h2>CHECKBOX COMPONENT</h2>
    <div class="checkbox-container">
      <div class="checkbox-status">
        <div>
          <v-checkbox label="Label" value="selected"></v-checkbox>
          <h4>DEFAULT</h4>
        </div>
        <div>
          <v-checkbox
            v-model="selected"
            label="Label"
            value="selected"></v-checkbox>
          <h4>TICKED</h4>
        </div>
        <div>
          <v-checkbox
            label="Label"
            value="selected"
            :disabled="true"></v-checkbox>
          <h4>DISABLED</h4>
        </div>
        <div>
          <v-checkbox
            v-model="selected"
            label="Label"
            value="selected"
            :disabled="true"></v-checkbox>
          <h4>DISABLED</h4>
        </div>
      </div>
      <div class="checkbox-active">
        <h3>ACTIVE CHECKBOX</h3>
        <v-check-box-comp :boxItems="checkbox"></v-check-box-comp>
      </div>
    </div>
    <h2>PILLS COMPONENT</h2>
    <div class="pills-container">
      <div>
        <v-pills label="Draft" bgColor="yellow"></v-pills>
        <h6>YELLOW</h6>
      </div>
      <div>
        <v-pills label="Active" bgColor="green"></v-pills>
        <h6>GREEN</h6>
      </div>
      <div>
        <v-pills label="Inactive" bgColor="gray"></v-pills>
        <h6>GRAY</h6>
      </div>
      <div>
        <v-pills label="New" bgColor=" blue"></v-pills>
        <h6>BLUE</h6>
      </div>
      <div>
        <v-pills label="Recommended" bgColor="purple"></v-pills>
        <h6>PURPLE</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: "button-1",
          value: "button-1",
        },
        {
          label: "button-2",
          value: "button-2",
        },
        {
          label: "button-3",
          value: "button-3",
        },
      ],
      selected: "selected",
      checkbox: [
        {
          label: "option-1",
          value: "option-1",
        },
        {
          label: "option-2",
          value: "option-2",
        },
        {
          label: "option-3",
          value: "option-3",
        },
      ],
    };
  },
};
</script>

<style scoped>
.stepper-container {
  height: 300px;
}
.avatar-content {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.avatar-container {
  border: 1px solid black;
  padding: 20px;
}
.radio-container {
  padding: 30px;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.radio-active {
  padding: 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}
.radio-status {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.checkbox-container {
  border: 1px solid black;
  padding: 20px;
}
.checkbox-status {
  display: flex;
  gap: 40px;
}
.checkbox-active {
  padding: 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}

.pills-container {
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
/* Your component styles here */
</style>
