import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import axios from "axios";
import store from "./store";
import $axios from "./requests";

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  axios,
  store,
  render: (h) => h(App),
});
