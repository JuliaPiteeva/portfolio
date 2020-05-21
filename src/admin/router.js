import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import skills from "./components/skills.vue";
import works from "./components/works.vue";
import reviews from "./components/reviews.vue";

const routes = [
  {
    path: "/admin",
    components: skills,
  },
  {
    path: "/admin/works",
    components: works,
  },
  {
    path: "/admin/reviews",
    components: reviews,
  },
];

export default new VueRouter({ routes });
//mode: "history"
