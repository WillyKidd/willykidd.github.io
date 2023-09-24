import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/flight",
      name: "flight",
      component: () => import("../views/FlightLog.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/GameBoard.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../views/GalleryPage.vue"),
    },
  ],
});

export default router;
