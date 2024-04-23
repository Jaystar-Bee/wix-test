import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: "Bandana Clunt",
          price: 45000,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1690056906/samples/outdoor-woman.jpg",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 2,
          name: "Gumpoif Clunt",
          price: 50500,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711535306/216a64ac0533cf8e4ada657cea7d6de1_ue1dul.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 3,
          name: "Gucci Tanmd",
          price: 47000,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711535306/216a64ac0533cf8e4ada657cea7d6de1_ue1dul.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 4,
          name: "Fenos II",
          price: 5200,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711535305/d98adee9f6b47bbce53ef30bd58731e2_h7nhbu.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 5,
          name: "Tnia Tanmd",
          price: 45300,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711535302/9584dd7b26f00227ed93488239133720_j7jwcr.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 6,
          name: "Bunt Long",
          price: 590,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711535295/6429d217bc465eb92f567494cf66e657_hiax2i.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 7,
          name: "Nike Moif",
          price: 830,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476638/2b0f8bc27347d5023e3a2f2a3b884dca_swmid5.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 8,
          name: "Nike Uanda",
          price: 1200,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/dfaef26ef17d50dba5f0cbdda9e7da0f_kbzuy5.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 9,
          name: "Nike Bawa",
          price: 610,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/6507e2041d26794eadf4e8bc0bd15831_rrmyor.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
        {
          id: 10,
          name: "Nike Low",
          price: 350,
          image:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/05a746c73c0f1dd49d2ef6bb06ece4fb_zwzm73.png",
          description: "This is a description of the product that will be displayed on the product page.",
        },
      ],
    };
  },
  getters: {
    getProducts: (state) => state.products,
  },
});
