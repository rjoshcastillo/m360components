<template>
  <div>
    <!-- BUTTONS -->
    <div>
      <h3>PRIMARY BUTTONS</h3>
      <br />
      <div class="d-flex" style="gap: 20px">
        <v-buttons
          label="New Audience"
          prependIcon="mdi-plus"
          appendIcon="mdi-chevron-down"
          @click="count++"
        />
        <v-buttons
          label="New Audience"
          appendIcon="mdi-chevron-down"
          variant="primary"
          @click="count++"
        />
        <v-buttons
          label="New Audience"
          prependIcon="mdi-plus"
          @click="count++"
        />
        <v-buttons label="New Audience" variant="primary" @click="count++" />
        <v-buttons label="New Audience" disabled @click="count++" />
      </div>
      <br />
      <h3>SECONDARY BUTTONS</h3>
      <br />
      <div class="d-flex" style="gap: 20px">
        <v-buttons
          label="New Audience"
          prependIcon="mdi-plus"
          appendIcon="mdi-chevron-down"
          variant="secondary"
          @click="count++"
        />
        <v-buttons
          label="New Audience"
          appendIcon="mdi-chevron-down"
          variant="secondary"
          @click="count++"
        />
        <v-buttons
          label="New Audience"
          prependIcon="mdi-plus"
          variant="secondary"
          @click="count++"
        />
        <v-buttons label="New Audience" variant="secondary" @click="count++" />
        <v-buttons
          label="New Audience"
          disabled
          variant="secondary"
          @click="count++"
        />
      </div>
      <br />
      <h3>TERTIARY BUTTONS</h3>
      <br />
      <div class="d-flex" style="gap: 20px">
        <v-buttons
          label="Metric"
          prependIcon="mdi-plus"
          variant="tertiary"
          width="100px"
          @click="count++"
        />
        <v-buttons
          label="Metric"
          prependIcon="mdi-chevron-down"
          variant="tertiary"
          width="100px"
          @click="count++"
        />
        <v-buttons
          label="Metric"
          prependIcon="mdi-chevron-down"
          variant="tertiary"
          width="100px"
          disabled
          @click="count++"
        />
      </div>

      <h2 style="background-color: bisque; font-size: 32px" class="mt-4">
        Button Click Counter: {{ count }}
      </h2>
    </div>

    <!-- TEXT FIELDS -->
    <div>
      <br />
      <h3>INPUT FIELDS</h3>
      <v-form>
        <v-container>
          <v-row>
            <!-- First Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="text"
                label="Workspace Name"
                placeholder="Enter workspace name"
              >
              </v-input-field>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="text"
                label="Workspace Name"
                prependIcon="mdi-email-outline"
                placeholder="Enter workspace name"
                required
              >
              </v-input-field>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="text"
                label="Workspace Name"
                appendIcon="mdi-chevron-down"
                placeholder="Enter workspace name"
              >
              </v-input-field>
            </v-col>
          </v-row>
          <v-row>
            <!-- First Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="text"
                label="Workspace Name"
                prependIcon="mdi-email-outline"
                appendIcon="mdi-chevron-down"
                placeholder="Enter workspace name"
              >
              </v-input-field>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="text"
                hintText="What's the hint?"
                label="Workspace Name"
                prependIcon="mdi-email-outline"
                appendIcon="mdi-chevron-down"
                placeholder="Enter workspace name"
              >
              </v-input-field>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                @input="inputValue"
                @inputError="inputError"
                type="text"
                hintText="What's the hint?"
                label="Workspace Name"
                prependIcon="mdi-email-outline"
                appendIcon="mdi-chevron-down"
                placeholder="Enter workspace name"
                maxChar="10"
              >
              </v-input-field>
            </v-col>
          </v-row>
          <v-row>
            <!-- First Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                :value="'This is a default value'"
                @input="inputValue"
                @inputError="inputError"
                type="text"
                hintText="What's the hint?"
                label="Workspace Name"
                prependIcon="mdi-email-outline"
                appendIcon="mdi-chevron-down"
                placeholder="Enter workspace name"
                maxChar="50"
                required
              >
              </v-input-field>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                type="password"
                @input="inputValue"
                @inputError="inputError"
                hintText="What's the hint?"
                label="Password"
                prependIcon="mdi-lock-outline"
                placeholder="Enter password"
                required
              >
              </v-input-field>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field
                @input="inputValue"
                @inputError="inputError"
                type="email"
                hintText="What's the hint?"
                label="Email"
                prependIcon="mdi-email-outline"
                placeholder="Enter your email"
                required
              >
              </v-input-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <div class="d-flex">
        <h2 style="background-color: bisque; font-size: 32px" class="mt-4 mr-4">
          Text: {{ textValue }}
        </h2>
        <h2 style="background-color: bisque; font-size: 32px" class="mt-4">
          Error: {{ hasError }}
        </h2>
      </div>
    </div>
    <div>
      <!-- TOAST -->
      <br />
      <h3>TOASTS</h3>
      <br />
      <v-buttons label="Show Success Toast" @click="showSuccessToast" />

      <v-buttons label="Show Error Toast" @click="showErrorToast" />

      <v-buttons label="Show Warning Toast" @click="showWarningToast" />
      <v-toast top center></v-toast>
    </div>

    <br />
    <h3>TABS</h3>
    <br />
  </div>
</template>
<script>
import { eventBus } from "../utils/event-bus";
export default {
  data() {
    return {
      count: 0,
      textValue: "",
      hasError: false,
    };
  },

  methods: {
    showSuccessToast() {
      eventBus.$emit("showSnackbar", {
        message: "SUCCESS TOAST",
        type: "_SUCCESS", //_ERROR _WARNING,
      });
    },

    showErrorToast() {
      eventBus.$emit("showSnackbar", {
        message: "SUCCESS TOAST",
        type: "_ERROR", //_ERROR _WARNING,
      });
    },

    showWarningToast() {
      eventBus.$emit("showSnackbar", {
        message: "SUCCESS TOAST",
        type: "_WARNING", //_ERROR _WARNING,
      });
    },
    inputError(value) {
      this.hasError = value;
    },
    inputValue(value) {
      this.textValue = value;
    },
  },
};
</script>
<style></style>
