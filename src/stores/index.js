import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
    state: () => {
      return {
        theme: null
      };
    },
  
    persist: true,
  });
  