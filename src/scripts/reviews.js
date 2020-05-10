import Vue from "vue";

const btns = {
  template: "#rev-btns",
};
const slider = {
  template: "#rev-slider",
  components: { slide },
};
const slide = {
  template: "#rev-slide",
};

new Vue({
  el: "#reviwews-component",
  template: "#rev-block",
  components: { btns, slider },
});
