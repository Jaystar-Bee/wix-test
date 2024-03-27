import { defineStore } from "pinia";
// import { COMPONENTS } from "./../types/enums";
import componentData from "./../utils/data";

export const useGeneralStore = defineStore("general", {
  state: () => {
    return {
      data: JSON.parse(JSON.stringify(componentData)),
    };
  },
  getters: {},
  actions: {
    setData(formDetail: any) {
      const section = this.getSection(formDetail?.sectionName);

      if (!cardIndex) {
        section[formDetail?.dataKey] = formDetail?.data;
      } else {
        section[cardIndex][formDetail?.dataKey] = formDetail?.data;
      }

      this.data[formDetail?.sectionIndex] = section;
    },
    getSection(name: string) {
      return this.data.find((section: any) => section.name === name);
    },
    addToTopSection(index: number, data: any) {
      const prevData = this.data?.slice(0, index);
      const nextData = this.data?.slice(index);
      this.data = [...prevData, data, ...nextData];
    },
    addToBottomSection(index: number, data: any) {
      const prevData = this.data?.slice(0, index + 1);
      const nextData = this.data?.slice(index + 1);

      this.data = [...prevData, data, ...nextData];
    },
    pushToData(data: any) {
      if (Array.isArray(this.data)) {
        this.data.push(data);
      } else {
        this.data = [data];
      }
    },
    deleteSection(index: number) {
      this.data.splice(index, 1);
    },
  },
});
