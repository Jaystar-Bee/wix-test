import { COMPONENTS } from "./../types/enums";
export default [
  {
    name: COMPONENTS.HERO,
    title: {
      text: "Our Hero Store",
      color: "primary",
    },
    description: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi pariatur sunt quasi voluptatibus illum possimus sequi aspernatur nesciunt expedita! illum possimus sequi aspernatur nesciunt expedita! illum possimus sequi aspernatur nesciunt expedita! illum possimus sequi aspernatur nesciunt expedita! illum possimus sequi aspernatur nesciunt expedita!",
      color: "tertiary",
    },
    button: {
      text: "See more",
      bgColor: "primary",
      color: "tertiary"
    },
    bgImage: {
      src: "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711631476/5615cad3cd9babd83a95074d63fb69e9_hzxa7u.png",
    },
  },
  {
    name: COMPONENTS.CARD,
    title: {
      text: "New Arrival",
      color: "secondary",
    },
    cards: {
      data: [
        {
          button: {
            text: "Nike Tint",
            color: "primary",
            bgColor: "tertiary",
          },
          bgImage:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/97183ff56cc4e7a1d983edbab82d1713_ldbe0t.png",
        },
        {
          button: {
            text: "Nike R",
            color: "primary",
            bgColor: "tertiary",
          },
          bgImage:
            "https://res.cloudinary.com/dkbdpie8y/image/upload/v1711476641/dfaef26ef17d50dba5f0cbdda9e7da0f_kbzuy5.png",
        },
      ],
      max_length: 10
    },
  },
  {
    name: COMPONENTS.PRODUCT,
    products: {
      data: [
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
      max_length: 6
    },
  },
  {
    name: COMPONENTS.VIDEO,
    sectionName: {
      text: "Tagline",
      color: "secondary",
    },
    title: {
      text: "Centra Series®",
      color: "primary",
    },
    description: {
      text: " At vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti.",
      color: "custom",
    },
    video: {
      src: "https://res.cloudinary.com/dkbdpie8y/video/upload/v1690056896/samples/sea-turtle.mp4",
    },
  },
  {
    name: COMPONENTS.OTHER,
    others: [
      {
        icon: "clarity:truck-line",
        title: {
          text: "Free Shipping",
          color: "primary",
        },
        description: {
          text: "Orders above $200",
          color: "custom",
        },
      },
      {
        icon: "uil:money-bill",
        title: {
          text: "Money-back",
          color: "primary",
        },
        description: {
          text: "30 day Guarantee",
          color: "custom",
        },
      },
      {
        icon: "ph:phone",
        title: {
          text: "Premium Support",
          color: "primary",
        },
        description: {
          text: "Phone and email support",
          color: "custom",
        },
      },
      {
        icon: "mdi-light:lock",
        title: {
          text: "Secure Payments",
          color: "primary",
        },
        description: {
          text: "Secured by Stripe",
          color: "custom",
        },
      },
    ],
  },
];
