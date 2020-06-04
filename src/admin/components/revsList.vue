<template lang="pug">
  .revs-wrap
    .rev__row
      .rev__img
        img.rev__icon(:src="baseURL+rev.photo")
      .rev__info
        h3 {{rev.author}}
        p {{rev.occ}}
    .rev__content
      p {{rev.text}}
    .rev__btns
      label.btn-label
        span.btn-text Править
        button(type="button" @click.prevent="toggleEdit" :disabled="addModeOn || getEditModeState").edit.edit--blue
      label.btn-label
        span.btn-text Удалить
        button.cross(type="button" @click="removeCurrentRev") 
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  props: {
    rev: Object,
    addModeOn: Boolean
  },
  data() {
    return {
      baseURL: "https://webdev-api.loftschool.com/"
    };
  },

  computed: {
    ...mapGetters("works", ["getEditModeState"])
  },
  methods: {
    ...mapActions("reviews", ["removeRev", "toggleEditMode"]),
    async removeCurrentRev() {
      try {
        await this.removeRev(this.rev);
      } catch (error) {}
    },
    toggleEdit() {
      this.toggleEditMode(this.getEditModeState);
      this.$emit("getCurrentRev", this.rev);
      this.$emit("scrollToEdit");
    }
  }
};
</script>
<style lang="pcss">
.revs-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

.rev__add-label {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
}

.rev__add-input {
  display: none;
}
.rev__add-text {
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.rev__row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  margin-bottom: 25px;
}
.rev__info {
  flex: 1;
  margin-bottom: 20px;
}

.rev__info h3 {
  font-size: 18px;
  color: rgba(65, 76, 99, 1);
  font-weight: 700;
}
.rev__info p {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
}
.rev__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  border: none;
  margin-bottom: 20px;
}

.rev__icon {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.rev__content {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.7);
  font-family: "Open Sans";
  font-weight: 600;
}
.rev__btns {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.edit-trash__btns {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
}
.btn-text {
  font-size: 16px;
  line-height: 30px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  margin-right: 15px;
}
</style>
