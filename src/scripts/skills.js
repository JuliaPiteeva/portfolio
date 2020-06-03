import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
});

const skill = {
  template: "#skill",
  props: ["skillName", "skillPercent"],
  methods: {
    paintedCircle() {
      const circle = this.$refs["circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
    },
  },
  mounted() {
    this.paintedCircle();
  },
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill,
  },
  props: ["category"],
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow,
  },
  data() {
    return {
      skills: [],
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = false;
    try {
      const { data } = await $axios.get("/categories/319");

      this.isLoading = true;
      this.skills = data;
    } catch (error) {}
  },
});
