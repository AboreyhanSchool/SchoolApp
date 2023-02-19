import { useLocalStorage, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    shown: false,
  }),
  getters: {
    isShow: (state) => {
      return useLocalStorage("weather", state.shown).value;
    },
  },
  actions: {
    show() {
      this.shown = true;
      var storage = useLocalStorage("weather", false);
      storage.value = this.shown;
    },
    hide() {
      this.shown = false;
      var storage = useLocalStorage("weather", false);
      storage.value = this.shown;
    },
  },
});
