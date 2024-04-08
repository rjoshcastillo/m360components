<template>
    <transition name="snackbar-fade">
      <div v-if="show" class="custom-snackbar" 
      :class="{ 
          'top': top, 
          'right': right, 
          'center': center,
          'bottom': bottom,
          }">
          <div class="snackbar-wrapper"
              :class="type">
              <v-icon v-if="type === '_SUCCESS'" color="#21C434" class="snackbar-icon">
                  mdi-check
              </v-icon>
              <v-icon v-if="type === '_WARNING'" color="orange" class="snackbar-icon">
                  mdi-alert
              </v-icon>
              <v-icon v-if="type === '_ERROR'" color="red"  class="snackbar-icon">
                  mdi-alert-circle
              </v-icon>
              <span class="snackbar-text">
                 {{ text }}
              </span>
              <div class="snackbar-action">
                  <v-icon color="#1f1f1f" @click="closeSnackbar">
                      mdi-close
                  </v-icon>
              </div>
          </div>
      </div>
    </transition>
  </template>
  
  <script>
  import debounce from 'lodash.debounce';
  import { eventBus } from '@/utils/event-bus';
  export default {
    data() {
      return {
        show: false,
        text: '',
        type: '',
        timeout: 3000
      }
    },
    props: {
      /* POSITION PROPS */
      /* USE THIS PROPS TO POSITION SNACKBAR ON YOUR SCREEN */
      top: Boolean,
      bottom: Boolean,
      right: Boolean,
      center: Boolean,
    },
  
    created() {
      eventBus.$on('showSnackbar', (modalData) => {
  
        const { message, type } = modalData;
  
        this.text = message;
        this.type = type;
        this.show = true;
  
        this.snackBarState();
  
      })
    },
  
    mounted() {
      this.snackBarState = debounce(function() {
          this.closeSnackbar();
      }, this.timeout)
    },
  
    methods: {
      closeSnackbar() {
        this.show = false;
      },  
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .custom-snackbar {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: flex-end;
  }
  
  /* SNACKBAR PLACEMENT  */
  .center {
    justify-content: center;
  }
  
  .top {
    align-items: flex-start;
  }
  
  .right {
    justify-content: flex-end;
  }
  
  .bottom {
    align-items: flex-end;
  }
  
  /* END */
  
  
  .snackbar-wrapper {
    max-width: 60%;
    min-width: 50%;
    max-height: 48px;
    display: flex;
    border-radius: 30px;
    align-items: center;
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.3);
    padding: 12px 15px;
    margin: 15px;
    position: relative;
    pointer-events: auto;
  }
  
  /* SNACKBAR THEME */
  /* THIS CLASSESS ARE BASE ON SnackBar Types */
  ._SUCCESS {
      border: 1px solid #21C434; 
      background-color: #A4E7AC;
  }
  ._ERROR {
      background-color: rgb(248, 165, 165);
      border: 1px solid red;
  }
  
  ._WARNING {
      background-color: rgb(245, 194, 129);
      border: 1px solid orange;
  }
  /* END */
  
  .snackbar-icon {
    margin-left: 0;
    margin-right: 10px;
  }
  
  .snackbar-text {
    flex: 1;
    font-weight: 500;
    color: black;
    font-size: 14px;
  }
  
  .snackbar-action {
    margin-left: 20px;
    margin-right: 5px;
    cursor: pointer;
  }
  
  /* CSS transitions */
  .snackbar-fade-enter-active,
  .snackbar-fade-leave-active {
    transition: opacity 0.2s ease;
  }
  
  .snackbar-fade-enter,
  .snackbar-fade-leave-to {
    opacity: 0;
  }
  </style>
  