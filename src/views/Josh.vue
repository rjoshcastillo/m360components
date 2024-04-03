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
        <v-buttons label="New Audience" prependIcon="mdi-plus" @click="count++"/>
        <v-buttons label="New Audience" variant="primary" @click="count++"/>
        <v-buttons label="New Audience" disabled @click="count++"/>
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
        <v-buttons label="New Audience" variant="secondary" @click="count++"/>
        <v-buttons label="New Audience" disabled variant="secondary" @click="count++"/>
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
      
      <h2 style="background-color: bisque; font-size: 32px;" class="mt-4">Button Click Counter: {{ count }}</h2>
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
              <v-input-field-v2 
                type="text"
                label="Workspace Name" 
                placeholder="Enter workspace name">
              </v-input-field-v2>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                type="text"
                label="Workspace Name" 
                prependIcon="mdi-email-outline" 
                placeholder="Enter workspace name">
              </v-input-field-v2>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                type="text"
                label="Workspace Name" 
                appendIcon="mdi-chevron-down" 
                placeholder="Enter workspace name">
              </v-input-field-v2>
            </v-col>
          </v-row>
          <v-row>
            <!-- First Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                type="text"
                label="Workspace Name" 
                prependIcon="mdi-email-outline" 
                appendIcon="mdi-chevron-down" 
                placeholder="Enter workspace name">
              </v-input-field-v2>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                type="text"
                hintText="What's the hint?"
                label="Workspace Name" 
                prependIcon="mdi-email-outline" 
                appendIcon="mdi-chevron-down" 
                placeholder="Enter workspace name">
              </v-input-field-v2>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                type="text"
                hintText="What's the hint?"
                label="Workspace Name" 
                prependIcon="mdi-email-outline" 
                appendIcon="mdi-chevron-down" 
                placeholder="Enter workspace name"
                maxChar="20">
              </v-input-field-v2>
            </v-col>
          </v-row>
          <v-row>
            <!-- First Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                :value="'This is a default value'"
                type="text"
                hintText="What's the hint?"
                label="Workspace Name" 
                prependIcon="mdi-email-outline" 
                appendIcon="mdi-chevron-down" 
                placeholder="Enter workspace name"
                maxChar="20"
                required>
              </v-input-field-v2>
            </v-col>

            <!-- Second Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                :value="textValue"
                type="password"
                hintText="What's the hint?"
                label="Password" 
                prependIcon="mdi-lock-outline" 
                placeholder="Enter password"
                required>
              </v-input-field-v2>
            </v-col>

            <!-- Third Column -->
            <v-col cols="12" sm="4">
              <v-input-field-v2 
                :value="textValue"
                type="email"
                hintText="What's the hint?"
                label="Email" 
                prependIcon="mdi-email-outline" 
                placeholder="Enter your email"
                required>
              </v-input-field-v2>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <h2 style="background-color: bisque; font-size: 32px;" class="mt-4">Text: {{ textValue }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      textValue: '',
    }
  },

  watch: {
    textValue: {
      handler(value) {
        console.log(value);
      },
      deep: true,
    }
  }
}
</script>
<style></style>
