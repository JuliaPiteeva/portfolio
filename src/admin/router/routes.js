import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    component: () => import("../components/skills.vue"),
    meta: {
      title: "Блок «Обо мне»",
    },
  },
  {
    path: "/works",
    component: () => import("../components/works.vue"),
    meta: {
      title: "Блок «Работы»",
    },
  },
  {
    path: "/revs",
    component: () => import("../components/reviews.vue"),
    meta: {
      title: "Блок «Отзывы»",
    },
  },
  {
    path: "/",
    component: () => import("../components/login/login.vue"),
    meta: {
      public: true,
    },
  },
];

export default new VueRouter({ routes });
//mode: "history"
