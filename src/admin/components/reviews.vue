<template lang="pug">
.revs.container
  .block-title
    .title
      h1 Блок "Отзывы"
  .rev-add-wrapper()
    addRev(v-if="addModeOn" @showBlockAddRev="showBlockAddRev" ref="addBlockCompLink")
    editRev(
      v-if="getEditModeState" 
     :revToEdit="revToEdit"
     ref="editBlockCompLink")
  ul.rev__list
    li(v-if="!addModeOn").rev-add-btn.rev__item.rev__item--add
      label.rev__add-label
        .rev__add-visible +
        input.rev__add-input(type="button" @click="showBlockAddRev" :disabled="getEditModeState")
        span.rev__add-text Добавить отзыв
    li.rev__item(v-for="rev in reviews" :key="rev.id")
      revsList(
      :rev="rev"
      @getCurrentRev="getCurrentRev"
      :addModeOn="addModeOn"
      @scrollToEdit="scrollToEdit"
      )
</template>
<script>
import addRev from "./addRev";
import revsList from "./revsList";
import editRev from "./editRev";

import { mapActions, mapState, mapGetters } from "Vuex";

export default {
  components: {
    revsList,
    addRev,
    editRev
  },
  data() {
    return {
      addModeOn: false,
      revToEdit: {}
    };
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    }),
    ...mapGetters("reviews", ["getEditModeState"])
  },
  created() {
    this.fetchReviews();
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    showBlockAddRev() {
      this.addModeOn = !this.addModeOn;
      if (this.addModeOn) {
        scroll();
      }
    },
    scroll() {
      this.$refs.addBlockCompLink.scrollTo();
    },
    scrollToEdit() {
      this.$refs.editBlockCompLink.scrollTo();
    },
    getCurrentRev(rev) {
      this.revToEdit = this.reviews.find(item => item.id === rev.id);
    }
  }
};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";
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
  @include phones {
    flex-direction: column;
  }
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
  @include tablets {
    width: calc(100% / 2 - 20px);
  }
  @include beforePhones {
    padding: 20px 10px;
  }
  @include phones {
    width: 100%;
    padding: 5% 4%;
    min-height: 100%;
  }
}
.rev__add-label {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  @include phones {
    flex-direction: row;
    justify-content: flex-start;
  }
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
  @include phones {
    width: 50px;
    height: 50px;
    font-size: 18px;
    margin-bottom: 0;
    margin-right: 20px;
  }
}
.rev__item--add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
  padding: 0 0 0 20px;
  @include phones {
    min-height: 120px;
    width: 100%;
  }
}
</style>
