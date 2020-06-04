import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
});

const btns = {
  template: "#rev-btns",
  props: ["reviews", "currentRev"],
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
      baseURL: "https://webdev-api.loftschool.com",
    };
  },
  computed: {
    currentRev() {
      return this.reviews[this.currentIndex];
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
      }
      if (direction === "prev") {
        currentSlideIndex--;
        indexTest();
        this.currentIndex = currentSlideIndex;
      }

      function indexTest() {
        if (currentSlideIndex > screenSlides - 1) {
          currentSlideIndex = screenSlides - 1;
        }
        if (currentSlideIndex < 0) {
          currentSlideIndex = 0;
        }

        numbertoMove = 100 * currentSlideIndex + "%";
        difineSlider.style.transform = `translateX(-${numbertoMove})`;
      }
    },
    // makeInfiniteLoopForIndex(value) {
    //   const revievsAmountFromZero = this.reviews.length - 1;
    //   if (value > revievsAmountFromZero) this.currentIndex = 0;
    //   if (value < revievsAmountFromZero)
    //     this.currentIndex = revievsAmountFromZero;
    // },

    makeArrayWithLinkToImages(array) {
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
      const { data } = await $axios.get("/reviews/319");

      this.isLoading = true;
      this.reviews = this.makeArrayWithLinkToImages(data);
    } catch (error) {}
  },
});
