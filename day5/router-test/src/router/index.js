import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/List.vue";
import InsertView from "../views/Insert.vue";
import DetailView from "../views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: ListView,
    },
    {
      path: "/insert",
      name: "insert",
      component: InsertView,
    },
    {
      path: "/list/:num",
      name: "detail",
      component: DetailView,
    },
  ],
});

export default router;
