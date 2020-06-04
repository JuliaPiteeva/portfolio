<template lang="pug">
  .works.container
    .block-title
      .title
        h1 Блок "Работы" 
    .work-add-wrapper()
      addWork(v-if="addModeOn" @showBlockAddWork="showBlockAddWork" ref="addWorkCompLink")
      editWork(
        v-if="getEditModeState" 
        :workToEdit="workToEdit" 
        ref="editWorkCompLink"
        )
    ul.works__list
      li(v-if="!addModeOn").works__item.works__item--add
        label.works__add-label
          .works__add-visible +
          input.works__add-input(type="button" @click="showBlockAddWork" :disabled="getEditModeState")
          span.works__add-exp Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksList(
          :work="work"
          @getCurrentWork="getCurrentWork"
          :addModeOn="addModeOn"
          @scrollToEdit="scrollToEdit"
        )
</template>
<script>
import addWork from "./addWork";
import worksList from "./worksList";
import editWork from "./editWork";

import { mapActions, mapState, mapGetters } from "Vuex";

export default {
  components: {
    addWork,
    worksList,
    editWork
  },
  data() {
    return {
      addModeOn: false,
      workToEdit: {}
    };
  },
  computed: {
    ...mapGetters("works", ["getEditModeState"]),
    ...mapState("works", {
      works: state => state.works
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    showBlockAddWork() {
      this.addModeOn = !this.addModeOn;
      // if (this.addModeOn) {
      //   scroll();
      // }
    },
    getCurrentWork(work) {
      this.workToEdit = this.works.find(item => item.id === work.id);
    },
    // scroll() {
    //   this.$refs.addWorkCompLink.scrollTo();
    // },
    scrollToEdit() {
      this.$refs.editWorkCompLink.scrollTo();
    }
  }
};
</script>
<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.works {
  margin-bottom: 100px;
}
.works__item--add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
  padding: 0 0 0 20px;
  @include phones {
    min-height: 120px;
    width: 100%;
  }
}
.works__add-visible {
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
.works__add-exp {
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.works__add-input {
  display: none;
}
.works__add-label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  @include phones {
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
