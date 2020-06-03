<template lang="pug">
  .works-add(ref="addWorkComp")
    form(@submit.prevent="createNewWork").works-add__form
      .works-add__title Добавление работы
      .works-add__container
        .works-add__coll
          .works__drop-zone
            label.works__upload-img
              span.works__drop-exp  Перетащите или загрузите изображение
              .works__upload-btn Загрузить
              input(type="file" @change="workFileChange").works__upload
          .works__img(:style="{backgroundImage: `url(${rendererWorkPhoto})`}")
        .works-add__coll.works-add__coll--column
          label.works-add__block
            span.work__input-title Название
            input(type="text" v-model="newWorkData.title").work__name.work__input
          label.works-add__block
            span.work__input-title Ссылка
            input(type="text" v-model="newWorkData.link").work__link.work__input
          label.works-add__block
            span.work__input-title Описание
            textarea(type="text" row="3" v-model="newWorkData.desc" ).work__textarea.work__input
          label.works-add__block
            span.work__input-title Добавление тега
            input(type="text" v-model="newWorkData.techs" @input="watchTagsToArray" placeholder="Введите теги через запятую и пробел").work__tags.work__input
          ul.tags__list 
            li.tags__item(v-for="tag in tags")
              worksTag(
                :tag="tag"
                @deleteTag="deleteTag"
                )
          .save-cancel__btns
            button(type="button" @click.prevent="$emit('showBlockAddWork')" :disabled="getEditModeState").btn-cancel.btn Отмена
            button(type="submit").btn Сохранить
</template>
<script>
import worksTag from "./worksTag";
import { renderer } from "../helpers/pictures";
import { mapActions, mapState, mapGetters } from "Vuex";

export default {
  components: {
    worksTag
  },
  data() {
    return {
      newWorkData: {
        title: "",
        link: "",
        desc: "",
        techs: [],
        photo: {}
      },
      rendererWorkPhoto: "",
      tags: []
    };
  },
  computed: {
    ...mapGetters("works", ["getEditModeState"])
  },
  methods: {
    ...mapActions("works", ["addWork"]),
    scrollTo() {
      this.$refs.addWorkComp.scrollIntoView();
    },
    validForm() {
      for (let key in this.newWorkData) {
        if (!this.newWorkData[key]) return false;
      }
      if (!this.newWorkData.photo.name) {
        return false;
      }
      return true;
    },
    workFileChange(event) {
      this.newWorkData.photo = event.target.files[0];
      const photo = this.newWorkData.photo;
      renderer(photo).then(pic => {
        this.rendererWorkPhoto = pic;
      });
    },
    async createNewWork() {
      if (this.validForm()) {
        try {
          this.addWork(this.newWorkData);

          this.newWorkData.title = "";
          this.newWorkData.link = "";
          this.newWorkData.desc = "";
          this.newWorkData.techs = "";
          this.newWorkData.photo = "";
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("Поля формы должны быть заполнены");
      }
    },
    watchTagsToArray() {
      this.tags = this.newWorkData.techs.split(", ");
    },
    deleteTag(tag) {
      let index = parseInt(this.tags.indexOf(tag));

      this.tags.splice(index, 1);
      this.newWorkData.techs = this.tags.join(", ");
    }
  }
};
</script>
<style lang="pcss" scoped>
.works-add {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;
  margin-bottom: 30px;
}
.works-add__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-bottom: 35px;
}
.works-add__title {
  width: 100%;
  font-size: 18px;
  line-height: 34px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  min-height: 70px;
  margin-bottom: 50px;
}
.works__img {
  width: 100%;
  height: 100%;
}
.works-add__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.works-add__coll {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
}
.works-add__coll:last-child {
  margin-right: 0;
}
.works-add__coll--column {
  flex-direction: column;
}

.works__drop-zone {
  min-width: 450px;
  min-height: 250px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.works__upload-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
}
.works__drop-exp {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
.works__upload {
  display: none;
}
.works__upload-btn {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  font-size: 16px;
  line-height: 48px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.works__img {
  min-width: 450px;
  min-height: 250px;
  background-size: cover;
  background-position: center;
}
.works-add__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 95%;
  font-size: 16px;
  color: rgba(65, 76, 99, 1);
  font-family: "Open Sans";
  font-weight: 600;
}
.work__tags {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
}
.work__input {
  outline: none;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #dedee0;
}
.work__input:focus {
  border-bottom: 2px solid #383bcf;
}
.work__input-title,
.work__input-title::placeholder {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
}

.work__textarea {
  resize: none;
  border: 1px solid rgba(65, 76, 99, 0.2);
}
.tags__list {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8%;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.tags__item {
  font-size: 13px;
  color: rgba(40, 51, 64, 0.7);
  font-family: "Open Sans";
  font-weight: 600;
  background-color: #f4f4f4;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 25px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tags__item:last-child {
  margin-right: 0;
}

.save-cancel__btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.btn {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  font-size: 16px;
  line-height: 48px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.btn-cancel {
  text-transform: capitalize;
  color: #383bcf;
  background: transparent;
}
</style>
