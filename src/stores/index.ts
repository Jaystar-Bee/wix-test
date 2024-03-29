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
      // let section = this.getSection(formDetail?.sectionName);
      let section = this.data[formDetail?.sectionIndex];
      if (!formDetail?.dataKey) {
        section = formDetail?.data;
        this.data[formDetail?.sectionIndex] = section;
        return;
      }

      if (formDetail?.cardIndex < 0 || formDetail?.cardIndex === null) {
        section[formDetail?.dataKey] = formDetail?.data;
      } else {
        section[formDetail?.dataKey][formDetail?.cardIndex] = formDetail?.data;
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
    deleteCard(data: any) {
      // const section = this.getSection(data?.sectionName);
      const section = this.data[data?.sectionIndex];
      section[data?.cardName]?.splice(data?.index, 1);
      this.data[data?.sectionIndex] = section;
    },
    addToCard(detail: any) {
      // const section = this.getSection(data?.sectionName);
      console.log(detail);
      const section = this.data[detail?.sectionIndex];
      section[detail?.cardName]?.push(detail?.formData);
      this.data[detail?.sectionIndex] = section;
    },
  },
});
