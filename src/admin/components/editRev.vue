<template lang="pug">
  .rev-edit(ref="editBlockComp")
    form(@submit.prevent="editCurrentRev").rev-add__form
      .rev-add__title Редактирование отзыва
      .rev-add__container
        .rev-add__left
          label.rev-add__label
            input.rev-add__input(
              type="file" 
              @change="handleFileChange"
              
            )
            .rev-add__img(
              :style="{backgroundImage: `url(${renderedPhoto})`}"
              :class="{'disabled': renderedPhoto.length}"
            )
              .rev-add__icon
            //- img.rev-add__icon
            span.input.rev-add__upload Добавить фото
        .rev-add__right
          .rev-add__row
            label.rev-add__block
              span.rev__input-title Имя автора
              input(type="text" required v-model="currentRev.author").rev__input
            label.rev-add__block
              span.rev__input-title Титул автора
              input(type="text" required v-model="currentRev.occ").rev__input
          label.rev-add__block
            span.rev__input-title Отзыв
            textarea(type="text" row="3" required v-model="currentRev.text").rev__textarea.rev__input
          .save-cancel__btns
            button(type="button" @click.prevent="toggleEdit").btn-cancel.btn Отмена
            button(type="submit").btn Сохранить
</template>
<script>
import { renderer } from "../helpers/pictures";
import { mapActions, mapState, mapGetters } from "Vuex";
export default {
  components: {},
  data() {
    return {
      currentRev: {},
      renderedPhoto: ""
    };
  },
  props: {
    revToEdit: Object
  },
  created() {
    this.currentRev = this.revToEdit;
  },
  computed: {
    ...mapGetters("reviews", ["getEditModeState"])
  },
  methods: {
    ...mapActions("reviews", ["editReview", "toggleEditMode"]),
    scrollTo() {
      this.$refs.editBlockComp.scrollIntoView();
    },
    handleFileChange(event) {
      this.currentRev.photo = event.target.files[0]; //кладем то что получили с инпута
      const photo = this.currentRev.photo;
      renderer(photo).then(pic => {
        this.renderedPhoto = pic;
      });
    },
    toggleEdit() {
      this.toggleEditMode(this.getEditModeState);
    },
    validForm() {
      for (let key in this.currentRev) {
        if (!this.currentRev[key]) return false;
      }
      return true;
    },
    async editCurrentRev() {
      if (this.validForm()) {
        var formData = new FormData();
        formData.set("author", this.currentRev.author);
        formData.set("occ", this.currentRev.occ);
        formData.set("text", this.currentRev.text);
        if (this.currentRev.photo.name) {
          formData.set("photo", this.currentRev.photo);
        }

        const sendData = {
          id: this.currentRev.id,
          data: formData
        };

        try {
          await this.editReview(sendData);
          this.toggleEditMode(this.getEditModeState);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Все поля формы должны быть заполнены");
      }
    }
  }
};
</script>
<style lang="pcss">
.rev-edit {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  min-height: 350px;
  font-family: "Open Sans";
  color: rgba(65, 76, 99, 0.5);
  padding: 2%;
  margin-bottom: 30px;
}
</style>