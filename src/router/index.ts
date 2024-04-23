import { createRouter, createWebHistory } from "vue-router";
import PlayGround from "./../pages/PlaygroundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./../pages/TestView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./../pages/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./../pages/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "product-detail",
      component: () => import("./../pages/ProductDetailView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("./../pages/CartView.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: PlayGround,

    },
  ],
});

export default router;
