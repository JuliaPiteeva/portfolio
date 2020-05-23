<template lang="pug">
.works.container
  addWork
  worksList
</template>
<script>
import addWork from "./addWork";
import worksList from ".//worksList";
export default {
  components: {
    addWork,
    worksList,
  },
};
</script>
<style style="pcss">
.works {
  margin-bottom: 100px;
}
</style>
