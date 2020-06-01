import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import skillsComp from "../components/skills.vue";
import worksComp from "../components/works.vue";
import reviewsComp from "../components/reviews.vue";
import loginComp from "../components/login/login.vue";

const routes = [
  {
    path: "/about",
    component: skillsComp,
  },
  {
    path: "/works",
    component: worksComp,
  },
  {
    path: "/revs",
    component: reviewsComp,
  },
  {
    path: "/",
    component: loginComp,
    meta: {
      public: true,
    },
  },
];

export default new VueRouter({ routes });
//mode: "history"
