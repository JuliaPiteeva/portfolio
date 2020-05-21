<template lang="pug">
  .container
    .revs
      addRev
      revsList
</template>
<script>
import addRev from "./addRev";
import revsList from "./revsList";
export default {
  components: {
    revsList,
    addRev
  }
};
</script>
<style style="pcss">
.revs {
  margin-bottom: 100px;
}
</style>
