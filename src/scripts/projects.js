// import Vue from "vue";

// const thumbs = {
//   template: "#slider-thumbs",
//   props: ["projects", "currentProject"],
// };
// const btns = {
//   template: "#slider-btns",
//   props: ["currentProject", "projects"],
// };

// const display = {
//   template: "#slider-display",
//   components: { thumbs, btns },
//   props: ["currentProject", "projects", "currentIndex"],
//   computed: {
//     reversedProjects() {
//       const projects = [...this.projects];
//       return projects.reverse();
//     },
//   },
// };
// const tags = {
//   template: "#slider-tags",
//   props: ["tags"], //tagsArray
// };
// const info = {
//   template: "#slider-info",
//   components: { tags },
//   props: ["currentProject"],
//   computed: {
//     tagsArray() {
//       return this.currentProject.skills.split(",");
//     },
//   },
// };

// new Vue({
//   el: "#slider-component",
//   template: "#slider-container",
//   components: { display, info },
//   data() {
//     return {
//       projects: [],
//       currentIndex: 0,
//     };
//   },
//   computed: {
//     currentProject() {
//       return this.projects[this.currentIndex];
//     },
//   },
//   watch: {
//     currentIndex(value) {
//       this.makeInfiniteLoopForIndex(value);
//     },
//   },

//   methods: {
//     makeInfiniteLoopForIndex(value) {
//       const projectsAmountFromZero = this.projects.length - 1;
//       if (value >= projectsAmountFromZero)
//         this.currentIndex = projectsAmountFromZero;
//       if (value < 0) this.currentIndex = 0;
//     },
//     handleSlide(direction) {
//       switch (direction) {
//         case "next":
//           this.currentIndex++;
//           break;
//         case "prev":
//           this.currentIndex--;
//           break;
//       }
//     },
//     makeArrWithRequireImages(array) {
//       return array.map((item) => {
//         const requirePic = require(`../images/content/${item.photo}`);
//         item.photo = requirePic;
//         return item;
//       });
//     },
//   },
//   created() {
//     const data = require("../data/projects.json");
//     this.projects = this.makeArrWithRequireImages(data);
//     // this.currentProject = this.projects[this.currentIndex];
//   },
// });
