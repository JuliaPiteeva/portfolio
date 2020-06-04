import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
});

const thumbs = {
  template: "#slider-thumbs",
  props: ["projects", "currentProject"],
};
const btns = {
  template: "#slider-btns",
  props: ["currentProject", "projects"],
};

const display = {
  template: "#slider-display",
  components: { thumbs, btns },
  props: ["currentProject", "projects", "currentIndex"],
  computed: {
    reversedProjects() {
      const projects = [...this.projects];
      return projects.reverse();
    },
  },
};
const tags = {
  template: "#slider-tags",
  props: ["tags"], //tagsArray
};
const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentProject"],
  // computed: {
  //   tagsArray() {
  //     return this.currentProject.techs.split(", ");
  //   },
  // },
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data() {
    return {
      projects: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentProject() {
      return this.projects[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value);
    },
  },

  methods: {
    makeInfiniteLoopForIndex(value) {
      const projectsAmountFromZero = this.projects.length - 1;
      if (value >= projectsAmountFromZero)
        this.currentIndex = projectsAmountFromZero;
      if (value < 0) this.currentIndex = 0;
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    // makeArrWithRequireImages(array) {
    //   return array.map((item) => {
    //     const requirePic = require(`../images/content/${item.photo}`);
    //     item.photo = requirePic;
    //     return item;
    //   });
    // },
    makeArrWithLinkToImages(array) {
      return array.map((item) => {
        const linkToPic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = linkToPic;
        return item;
      });
    },
  },
  async created() {
    this.isLoading = false;
    try {
      const { data } = await $axios.get("/works/319");

      this.isLoading = true;
      this.projects = this.makeArrWithLinkToImages(data);
      console.log(this.projects);
    } catch (error) {}
  },
});
