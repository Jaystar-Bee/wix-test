import useColor from "../composables/useColor";
import { COMPONENTS } from "./../types/enums";
export default [
  {
    name: COMPONENTS.HEADER,
    logo: {
      text: "Vendaw",
      url: ""
    },
    bgColor: "primary",
    textColor: "tertiary",
    linkColor: "tertiary",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Cart",
        link: "/cart",
      },
      {
        name: "About",
        link: "/about",
      },
    ],

    socials: {
      data: [
        {
          name: "facebook",
          icon: "devicon:facebook",
          link: "https://instagram.com/vendaw",
        },
        {
          name: "twitter",
          icon: "fa6-brands:square-x-twitter",
          link: "https://twitter.com/vendaw",
        },
      ],
      max_length: 4
    },
  },
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
    cards: [
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
        image: "/truck.svg",
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
        image: "/money.svg",
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
        image: "/phone.svg",
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
        image: "/lock.svg",
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
