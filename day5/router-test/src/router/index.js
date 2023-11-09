import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/List.vue";
import InsertView from "../views/Insert.vue";
import DetailView from "../views/Detail.vue";
import NestView from "../views/Nested.vue";
import EastView from "../views/East.vue";
import WestView from "../views/West.vue";
import NamedView from "../views/Named.vue";

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
    {
      path: "/nested",
      name: "nest",
      component: NestView,
      children: [
        {
          path: "/west",
          name: "west",
          component: WestView,
        },
        {
          path: "/east",
          name: "east",
          component: EastView,
        },
      ],
    },
    {
      path: "/named",
      name: "named",
      components: {
        default: HomeView,
        first: EastView,
        second: WestView,
      },
    },
  ],
});

export default router;
