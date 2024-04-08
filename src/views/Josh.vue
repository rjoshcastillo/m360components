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

    <br />
    <h3>INLINE FEEDBACK</h3>
    <br />
    <div style="display: flex; gap: 10px">
      <v-buttons label="Show success feedback" @click="showSuccessFeedback" />
      <v-buttons label="Show error feedback" @click="showErrorFeedback" />
      <v-buttons label="Show info feedback" @click="showInfoFeedback" />
      <v-buttons label="Show warning feedback" @click="showWarningFeedback" />
    </div>
    <br />
    <v-feed-back></v-feed-back>
    <br />

    <br />
    <h3>TOASTS</h3>
    <br />
    <div style="display: flex; gap: 20px">
      <!-- TOAST -->
      <v-buttons label="Show Success Toast" @click="showSuccessToast" />

      <v-buttons label="Show Error Toast" @click="showErrorToast" />

      <v-buttons label="Show Warning Toast" @click="showWarningToast" />
      <v-toast top center></v-toast>
    </div>

    <br />
    <h3>TABS</h3>
    <v-tabs></v-tabs>
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
    showSuccessFeedback() {
      eventBus.$emit("showFeedback", {
        message: "It seems like you have not yet registered for an account. Please click on sign up now.",
        type: "success", //_ERROR _WARNING,
      });
    },
    showErrorFeedback() {
      eventBus.$emit("showFeedback", {
        message: "It seems like you have not yet registered for an account. Please click on sign up now.",
        type: "error", //_ERROR _WARNING,
      });
    },
    showInfoFeedback() {
      eventBus.$emit("showFeedback", {
        message: "It seems like you have not yet registered for an account. Please click on sign up now.",
        type: "info", //_ERROR _WARNING,
      });
    },
    showWarningFeedback() {
      eventBus.$emit("showFeedback", {
        message: "Warning.",
        type: "warning", //_ERROR _WARNING,
      });
    },

    showSuccessToast() {
      eventBus.$emit("showSnackbar", {
        message: "SUCCESS TOAST",
        type: "_SUCCESS", //_ERROR _WARNING,
      });
    },

    showErrorToast() {
      eventBus.$emit("showSnackbar", {
        message: "ERROR TOAST",
        type: "_ERROR", //_ERROR _WARNING,
      });
    },

    showWarningToast() {
      eventBus.$emit("showSnackbar", {
        message: "WARNING TOAST",
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
