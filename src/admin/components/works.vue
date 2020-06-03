<template lang="pug">
  .works.container
    .block-title
      .title
        h1 Блок "Работы" 
    .work-add-wrapper()
      addWork(v-if="blockAddWorksIsActive" @showBlockAddWorks="showBlockAddWorks")
      editWork(v-if="editModeOn")
    ul.works__list
      li(v-if="!blockAddWorksIsActive").works__item.works__item--add
        label.works__add-label
          .works__add-visible +
          input.works__add-input(type="button" @click="showBlockAddWorks")
          span.works__add-exp Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksList(
          :work="work"
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
      blockAddWorksIsActive: false,
      editModeOn: false
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
    showBlockAddWorks() {
      //toggleAddMode
      this.blockAddWorksIsActive = !this.blockAddWorksIsActive;
    },
    getCurrentWork(work) {
      this.workToEdit = this.works.find(item => item.id === work.id);
    }
  }
};
</script>
<style style="pcss">
.works {
  margin-bottom: 100px;
}
</style>
