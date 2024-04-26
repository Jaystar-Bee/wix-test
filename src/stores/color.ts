import { defineStore } from "pinia";

export const useColorStore = defineStore("color", {
  state: () => {
    return {
      colors: {
        primary: "#073F3E",
        secondary: "#F29F05",
        tertiary: "#F0F0F0",
      },
    };
  },
  // actions: {
  //   changePrimary(color: string) {
  //     this.colors.primary = color;
  //     localStorage.setItem("color", JSON.stringify(this.colors))
  //   },
  //   changeSecondary(color: string) {
  //     this.colors.secondary = color;
  //     localStorage.setItem("color", JSON.stringify(this.colors))
  //   },
  //   changeTertiary(color: string) {
  //     this.colors.tertiary = color;
  //     localStorage.setItem("color", JSON.stringify(this.colors))
  //   }
  // },
});
