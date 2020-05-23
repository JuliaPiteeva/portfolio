import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import skillsComp from "./components/skills.vue";
import worksComp from "./components/works.vue";
import reviewsComp from "./components/reviews.vue";

const routes = [
  {
    path: "/admin",
    component: skillsComp,
  },
  {
    path: "/admin/works",
    component: worksComp,
  },
  {
    path: "/admin/revs",
    component: reviewsComp,
  },
];

export default new VueRouter({ routes, mode: "history" });
//mode: "history"
