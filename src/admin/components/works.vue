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
<style style="pcss">
.works {
  margin-bottom: 100px;
}
</style>
