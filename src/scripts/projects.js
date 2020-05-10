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
  props: ["currentProject"],
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
  methods: {
    makeArrWithRequireImages(Array) {
      return Array.map((item) => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
  },
  created() {
    const data = require("../data/projects.json");
    this.projects = makeArrWithRequireImages(data);
    this.currentProject = this.projects[0];
  },
});
