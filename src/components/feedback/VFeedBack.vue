<template>
  <transition name="snackbar-fade">
    <div
      v-if="show"
      class="__inline_feedback_container"
      :class="`${transformedType}`"
    >
      <v-icon class="content" :class="`${transformedType}`">
        {{
          transformedType === "_SUCCESS"
            ? "mdi-check-circle-outline"
            : transformedType === "_INFO"
            ? " mdi-alert-circle-outline"
            : transformedType === "_ERROR"
            ? "mdi-close-circle-outline"
            : transformedType === "_WARNING"
            ? " mdi-alert-circle-outline"
            : ""
        }}
      </v-icon>
      <span class="ml-2 content" :class="`${transformedType}`">
        {{ text }}
      </span>
    </div>
  </transition>
</template>
<script>
import debounce from "lodash.debounce";
import { eventBus } from "@/utils/event-bus";
export default {
  data() {
    return {
      show: false,
      text: "",
      type: "",
      timeout: 3000,
    };
  },
  props: {
    /* POSITION PROPS */
    /* USE THIS PROPS TO POSITION SNACKBAR ON YOUR SCREEN */
    top: Boolean,
    bottom: Boolean,
    right: Boolean,
    center: Boolean,
  },

  computed: {
    transformedType() {
      return `_${this.type.toUpperCase()}`;
    },
  },

  created() {
    eventBus.$on("showFeedback", (modalData) => {
      const { message, type } = modalData;

      this.text = message;
      this.type = type;
      this.show = true;

      this.snackBarState();
    });
  },

  mounted() {
    this.snackBarState = debounce(function () {
      this.closeSnackbar();
    }, this.timeout);
  },

  methods: {
    closeSnackbar() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.__inline_feedback_container {
  display: flex;
  align-items: center;
  padding: 16px 12px 16px 12px;
  border-radius: 4px;

  &._SUCCESS {
    background-color: #e9f9eb;
    border: 1px solid #21c434;
  }
  &._INFO {
    background-color: #e6f4fe;
    border: 1px solid #008df0;
  }
  &._ERROR {
    background-color: #fdeaea;
    border: 1px solid #8f1b1b;
  }
  &._WARNING {
    background-color: rgb(255, 239, 219);
    border: 1px solid orange;
  }
}

.content {
  &._SUCCESS {
    color: #21c434;
  }
  &._INFO {
    color: #008df0;
  }
  &._ERROR {
    color: #8f1b1b;
  }
  &._WARNING {
    color: orange;
  }
}
.snackbar-fade-enter-active,
.snackbar-fade-leave-active {
  transition: opacity 0.2s ease;
}

.snackbar-fade-enter,
.snackbar-fade-leave-to {
  opacity: 0;
}
</style>
