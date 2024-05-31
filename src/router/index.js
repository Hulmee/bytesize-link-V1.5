import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Redirect from "@/views/RedirectView.vue";
import About from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/about",
      name: "About",
      component: About

    },
    {
      path: "/:slug",
      name: "Redirect",
      component: Redirect
    },
  ],
});

export default router;
