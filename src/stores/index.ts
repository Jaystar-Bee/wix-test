import { defineStore } from "pinia";
import { COMPONENTS } from "./../types/enums";
import componentData from "./../utils/data";

export const useGeneralStore = defineStore("general", {
  state: () => {
    return {
      // data: JSON.parse(JSON.stringify(componentData)),
      data: {
        pages: [
          {
            name: "HOME",
            haveHeader: true,
            haveFooter: true,
            sections: JSON.parse(JSON.stringify(componentData))
          },
          {
            name: "ABOUT",
            haveHeader: true,
            haveFooter: true,
            sections: [
              {
                name: COMPONENTS.TERMS,
                title: {
                  text: "TERMS & CONDITION",
                  color: "custom"
                },
                description: {
                  text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum perferendis corrupti ipsa inventore quam aliquid unde praesentium asperiores repellat impedit vel doloremque placeat aperiam molestias tempore deleniti fugiat voluptates illum delectus voluptatibus non, earum cum? Numquam eum commodi animi officiis delectus quibusdam quos. Mollitia dignissimos similique inventore eos minus, voluptates beatae nisi assumenda delectus perspiciatis quas ut fuga ducimus tempora perferendis! Molestias modi, et accusantium ab enim ducimus reprehenderit, rem dignissimos dolore natus mollitia! Exercitationem obcaecati delectus officiis nesciunt hic id, veritatis unde eveniet animi ratione harum ab aspernatur illo earum distinctio! Et quaerat temporibus ipsum esse, illo repellat beatae ducimus vero voluptatum odio fugiat dolore porro fuga. Deleniti, ducimus adipisci nobis at odit reiciendis aliquam nostrum? Quae dignissimos quos ducimus dolorum aliquid labore alias natus deserunt, sint itaque, dolorem officiis quis earum velit modi illum nemo! Fugit impedit labore illo nisi delectus, voluptate aut nostrum quo a harum voluptatibus numquam, quod quidem ratione eum eveniet possimus quas cum officiis consequuntur? Recusandae exercitationem dolorum nemo qui corporis! At, reprehenderit facilis nobis esse illo inventore. Dolorum, eum officia rerum voluptatem modi deserunt optio aliquam, iste consequatur possimus et debitis tempora temporibus ad expedita corporis magnam vero quam voluptas eius repudiandae! Consectetur sequi cupiditate ipsum non rerum dicta, qui reprehenderit necessitatibus esse aliquid ipsa, molestiae illo ab itaque mollitia, provident recusandae tempora tempore eaque deserunt. Voluptatem magnam quasi recusandae delectus. Similique odit voluptate soluta, cupiditate sapiente est impedit, quod nemo illum, ratione maiores. Est, id dolorum. Commodi quaerat doloribus fugit, praesentium voluptates quisquam ullam dolores adipisci, doloremque soluta necessitatibus molestias. Mollitia deserunt adipisci quidem vero dignissimos officia cum illo, commodi, in temporibus atque inventore deleniti aliquam error corrupti necessitatibus eum veritatis praesentium. Placeat sapiente vero nulla, harum dolor ratione eveniet quas totam delectus facilis labore deserunt, iure provident architecto aspernatur! Natus?",
                  color: "custom"
                }
              },
              {
                name: COMPONENTS.FAQ,
                faqs: [
                  {
                    title: { text: "The Faq title", color: "custom" },
                    description: { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here", color: "custom" },
                  },
                  {
                    title: { text: "WHat do i Need to Know", color: "custom" },
                    description: { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here", color: "custom" },
                  },
                  {
                    title: { text: "What if I'm a stranger", color: "custom" },
                    description: { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here", color: "custom" },
                  },
                  {
                    title: { text: "What do you have to say", color: "cutom" },
                    description: { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here", color: "custom" },
                  },
                  {
                    title: { text: "So tired, what can i do.", color: "custom" },
                    description: { text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here", color: "custom" },
                  },
                ]
              },
            ]
          },
        ],
        header: {
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
        footer: {
          name: COMPONENTS.FOOTER,
          logo: {
            text: "Vendaw",
            url: ""
          },
          description: {
            text: "Experience the future of e-commerce design with US.",
            color: "custom"
          },
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
              {
                icon: "logos:tiktok-icon",
                name: "tiktok",
                link: "https://tiktok.com/vendaw"
              }, {
                icon: "skill-icons:instagram",
                name: "instagram",
                link: "https://instagram.com/vendaw"
              }
            ],
            max_length: 4
          }

        }
      }
    };
  },
  getters: {
    getHeader(state: any) {
      return state.data.header;
    },
    getFooter(state: any) {
      return state.data.footer;
    }
  },
  actions: {
    setData(formDetail: any, currentPage: string) {

      if (formDetail?.sectionName === COMPONENTS.HEADER || formDetail?.sectionName === COMPONENTS.FOOTER) {
        this.data[formDetail.sectionName?.toLowerCase()] = formDetail?.data;
        return;
      }

      const page = this.data.pages.find((page: any) => page.name === currentPage);

      let section = page.sections[formDetail?.sectionIndex];
      if (!formDetail?.dataKey) {
        section = formDetail?.data;
        page.sections[formDetail?.sectionIndex] = section;
        return;
      }

      if (formDetail?.cardIndex < 0 || formDetail?.cardIndex === null) {
        section[formDetail?.dataKey] = formDetail?.data;
      } else {
        section[formDetail?.dataKey].data[formDetail?.cardIndex] = formDetail?.data;
      }

      page.sections[formDetail?.sectionIndex] = section;
      // this.data[formDetail?.sectionIndex] = section;
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
    deleteCard(data: any, currentPage: string) {
      const page = this.data.pages.find((page: any) => page.name === currentPage);
      const section = page?.sections[data?.sectionIndex];
      section[data?.cardName]?.data?.splice(data?.index, 1);
      page.sections[data?.sectionIndex] = section;
    },
    addToCard(detail: any, currentPage: string) {
      const page = this.data.pages.find((page: any) => page.name === currentPage);
      const section = page?.sections[detail?.sectionIndex];
      section[detail?.cardName]?.data?.push(detail?.formData);
      page.sections[detail?.sectionIndex] = section;
    },
  },
});
