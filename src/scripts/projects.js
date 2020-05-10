import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
};
const btns = {
  template: "#slider-btns",
};
const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props:["currentProject"]
};
const tags = {
  template: "#slider-tags",
};
const info = {
  template: "#slider-info",
  conponents: { tags },
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  conponents: { display, info },
  data() {
    return {
      projects: [],
      currentProject: {},
    };
  },
  created() {
    const data = require("../data/projects.json");
    this.projects = data;
    this.currentProject = data[1];
  },
});
