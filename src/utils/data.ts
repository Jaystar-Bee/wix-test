import { COMPONENTS } from "./../types/enums";
export default [
  {
    name: COMPONENTS.HEADER,
    logo: "LOGO",
    bgColor: "#000000",
    textColor: "#ffffff",
    linkColor: "#ffffff",
    links: [
      {
        name: "Products",
        link: "/",
      },
      {
        name: "Instagram",
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        link: "https://instagram.com",
      },
      {
        name: "Twitch",
        link: "https://instagram.com",
      },
    ],
  },
  {
    name: COMPONENTS.HERO,
    title: {
      text: "Our Hero Store",
      color: "#000000",
    },
    description: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi pariatur sunt quasi voluptatibus illum possimus sequi aspernatur nesciunt expedita!",
      color: "#000000",
    },
    button: {
      text: "See more",
      bgColor: "#000000",
      color: "#ffffff",
    },
    bgImage: {
      src: "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711475481/70658b78a492cea9422350c2a9c3a500_ejqkf9.png",
    },
  },
  {
    name: COMPONENTS.CARD,
    cards: [
      {
        button: {
          text: "Nike Tint",
          color: "#000000",
          bgColor: "#ffffff",
        },
        bgImage:
          "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/97183ff56cc4e7a1d983edbab82d1713_ldbe0t.png",
      },
      {
        button: {
          text: "Nike R",
          color: "#000000",
          bgColor: "#ffffff",
        },
        bgImage:
          "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/dfaef26ef17d50dba5f0cbdda9e7da0f_kbzuy5.png",
      },
      {
        button: {
          text: "Nike II",
          color: "#000000",
          bgColor: "#ffffff",
        },
        bgImage:
          "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/05a746c73c0f1dd49d2ef6bb06ece4fb_zwzm73.png",
      },
      {
        button: {
          text: "Nike Mat",
          color: "#000000",
          bgColor: "#ffffff",
        },
        bgImage:
          "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/704ddc3326a58d85bdba23a54ad1ca1f_p9qaz3.png",
      },
    ],
  },
  {
    name: COMPONENTS.PRODUCT,
    products: [
      {
        id: 1,
      },
      {
        id: 5,
      },
      {
        id: null,
      },
    ],
  },
  {
    name: COMPONENTS.VIDEO,
    sectioName: {
      text: "Tagline",
      color: "#000000",
    },
    title: {
      text: "Centra Series®",
      color: "#000000",
    },
    description: {
      text: " At vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti.",
    },
    video: {
      src: "https://res.cloudinary.com/dkbdpie8y/video/upload/v1690056896/samples/sea-turtle.mp4",
    },
  },
  {
    name: COMPONENTS.OTHER,
    others: [
      {
        image: "/truck.svg",
        title: {
          text: "Free Shipping",
          color: "#000000",
        },
        description: {
          text: "Orders above $200",
          color: "#aaaaaa",
        },
      },
      {
        image: "/money.svg",
        title: {
          text: "Money-back",
          color: "#000000",
        },
        description: {
          text: "30 day Guarantee",
          color: "#aaaaaa",
        },
      },
      {
        image: "/phone.svg",
        title: {
          text: "Premium Support",
          color: "#000000",
        },
        description: {
          text: "Phone and email support",
          color: "#aaaaaa",
        },
      },
      {
        image: "/lock.svg",
        title: {
          text: "Secure Payments",
          color: "#000000",
        },
        description: {
          text: "Secured by Stripe",
          color: "#aaaaaa",
        },
      },
    ],
  },
];
