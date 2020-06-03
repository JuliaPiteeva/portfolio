<template lang="pug">
    .tags
        p.tags__text {{tag}}
        button(type="button" @click.prevent="$emit('deleteTag', tag)").close-cross +
</template>
<script>
import { mapActions, mapState, mapGetters } from "Vuex";

export default {
  props: {
    tag: String
  }
};
</script>
<style lang="postcss">
.tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.close-cross {
  margin-left: 15px;
  cursor: pointer;
  font-size: 30px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 900;
  transform: rotate(45deg);
  margin-left: 15px;
}
.close-cross:active {
  outline: none;
  border: none;
  color: #3d36cc;
}
.close-cross:focus {
  outline: none;
  border: none;
  color: #3d36cc;
}
.close-cross:hover {
  color: #3d36cc;
}
.tags__text {
  font-size: 15px;
  color: #283340;
  font-family: "Open Sans";
  font-weight: 600;
}
</style>