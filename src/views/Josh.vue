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
        />
        <v-buttons
          label="New Audience"
          appendIcon="mdi-chevron-down"
          variant="primary"
        />
        <v-buttons label="New Audience" prependIcon="mdi-plus" />
        <v-buttons label="New Audience" variant="primary" />
        <v-buttons label="New Audience" disabled />
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
        />
        <v-buttons
          label="New Audience"
          appendIcon="mdi-chevron-down"
          variant="secondary"
        />
        <v-buttons
          label="New Audience"
          prependIcon="mdi-plus"
          variant="secondary"
        />
        <v-buttons label="New Audience" variant="secondary" />
        <v-buttons label="New Audience" disabled variant="secondary" />
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
        />
        <v-buttons
          label="Metric"
          prependIcon="mdi-chevron-down"
          variant="tertiary"
          width="100px"
        />
        <v-buttons
          label="Metric"
          prependIcon="mdi-chevron-down"
          variant="tertiary"
          width="100px"
          disabled
        />
      </div>
    </div>

    <!-- TEXT FIELDS -->
    <div>
      <br />
      <h3>INPUT FIELDS</h3>
      <v-input-field></v-input-field>
    </div>
  </div>
</template>
<script></script>
<style></style>
