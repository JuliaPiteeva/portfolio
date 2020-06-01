import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // добавим методы vuex

import user from "./modules/user";
import categories from "./modules/categories";
import login from "./modules/login";
import skills from "./modules/skills";
import reviews from "./modules/reviews";
import works from "./modules/works";

export default new Vuex.Store({
  modules: {
    user,
    categories,
    login,
    skills,
    reviews,
    works,
  },
});
