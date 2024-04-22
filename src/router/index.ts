import { createRouter, createWebHistory } from "vue-router";
import PlayGround from "./../pages/PlaygroundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      component: () => import("./../pages/TestView.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: PlayGround,

    },
  ],
});

export default router;
