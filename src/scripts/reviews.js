import Vue from "vue";

const btns = {
  template: "#rev-btns",
  props: ["reviews"],
  // methods: {
  //   handleSlide(direction) {
  //     console.log("passs");
  //   },
  // },
};
const slide = {
  template: "#rev-slide",
  props: ["currentRev", "reviews", "slideInfo"],
};
const slider = {
  template: "#rev-slider",
  components: { slide },
  props: ["currentRev", "reviews"],
};

new Vue({
  el: "#reviwews-component",
  template: "#rev-block",
  components: { btns, slider },
  data() {
    return {
      reviews: [],
      currentIndex: 0,
    };
  },
  computed: {
    currentRev() {
      return this.reviews[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      makeInfiniteLoopForIndex(value);
    },
  },
  methods: {
    handleSlide(direction) {
      let currentSlideIndex = this.currentIndex;
      let screenSlides = 0;
      let sumSlidesWidth = 0;
      let numbertoMove = 0;

      const difineSlider = this.$children[1].$refs.moveSlider;
      const sliderBlock = this.$refs.sliderBlock;
      let slidesArray = this.$children[1].$refs.moveSlider.children;

      let sliderBlockWidth = parseInt(
        window.getComputedStyle(sliderBlock).width
      );
      for (let slide of slidesArray) {
        let slideWidth = parseInt(window.getComputedStyle(slide).width);
        let slideMargin = parseInt(window.getComputedStyle(slide).marginRight);
        let sumWidth = slideWidth + slideMargin;
        sumSlidesWidth += sumWidth;
      }

      screenSlides = Math.ceil(sumSlidesWidth / sliderBlockWidth); //сколько всего может быть экранов

      if (direction === "next") {
        currentSlideIndex++;
        indexTest();
        this.currentIndex = currentSlideIndex;
        console.log("passs", direction);
      }
      if (direction === "prev") {
        currentSlideIndex--;
        indexTest();
        this.currentIndex = currentSlideIndex;
        console.log("passs", direction);
      }

      function indexTest() {
        if (currentSlideIndex > screenSlides) {
          currentSlideIndex = screenSlides - 1;
        }
        if (currentSlideIndex < 0) {
          currentSlideIndex = 0;
        }

        numbertoMove = 100 * currentSlideIndex + "%";
        difineSlider.style.transform = `translateX(-${numbertoMove})`;
      }
    },
    makeInfiniteLoopForIndex(value) {
      const revievsAmountFromZero = this.reviews.length - 1;
      if (value > revievsAmountFromZero) this.currentIndex = 0;
      if (value < revievsAmountFromZero)
        this.currentIndex = revievsAmountFromZero;
    },

    makeArrayWithRequiredImages(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/${item.avatar}`);
        item.avatar = requirePic;

        return item;
      });
    },
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrayWithRequiredImages(data);
  },
});
