import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    shown: false,
  }),
  getters: {
    isShow: (state) => state.shown,
  },
  actions: {
    show() {
      this.shown = true;
    },
    hide() {
      this.shown = false;
    },
  },
});
