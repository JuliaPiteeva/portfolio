<template lang="pug">
.revs.container
  .block-title
    .title
      h1 Блок "Отзывы"
  .rev-add-wrapper(v-if="blockAddRevsIsActive")
    addRev(@showBlockAddRevs="showBlockAddRevs")
  ul.rev__list
    li(v-if="!blockAddRevsIsActive").rev-add-btn.rev__item.rev__item--add
      label.rev__add-label
        .rev__add-visible +
        input.rev__add-input(type="button" @click="showBlockAddRevs")
        span.rev__add-text Добавить отзыв
    li.rev__item(v-for="rev in reviews" :key="rev.id")
      revsList(
      :rev="rev"
      )
</template>
<script>
import addRev from "./addRev";
import revsList from "./revsList";

import { mapActions, mapState } from "Vuex";

export default {
  components: {
    revsList,
    addRev
  },
  data() {
    return {
      blockAddRevsIsActive: false
    };
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  created() {
    this.fetchReviews();
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    showBlockAddRevs() {
      this.blockAddRevsIsActive = !this.blockAddRevsIsActive;
    }
  }
};
</script>
<style style="pcss">
.revs {
  margin-bottom: 100px;
}
.revsList__item {
  display: flex;
}
.rev__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-left: -20px;
}
.rev__item {
  display: flex;
  box-sizing: border-box;
  width: calc(100% / 3 - 20px);
  min-height: 376px;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 20px 20px;
}
.rev__add-visible {
  font-size: 72px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 300;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: transparent;
  border: 2px solid #ffffff;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rev__item--add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
}
</style>
