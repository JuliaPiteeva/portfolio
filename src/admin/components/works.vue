<template lang="pug">
  .works.container
    .block-title
      .title
        h1 Блок "Работы" 
    .work-add-wrapper(v-if="blockAddWorksIsActive")
      addWork
    ul.works__list
      li.works__item.works__item--add
        label.works__add-label
          .works__add-visible +
          input.works__add-input(type="button" @click="blockAddWorks")
          span.works__add-exp Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksList(
          :work="work"
        )
</template>
<script>
import addWork from "./addWork";
import worksList from "./worksList";

import { mapActions, mapState } from "Vuex";

export default {
  components: {
    addWork,
    worksList
  },
  data() {
    return {
      blockAddWorksIsActive: false
    };
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    blockAddWorks() {
      this.blockAddWorksIsActive = !this.blockAddWorksIsActive;
    }
  }
};
</script>
<style style="pcss">
.works {
  margin-bottom: 100px;
}
</style>
