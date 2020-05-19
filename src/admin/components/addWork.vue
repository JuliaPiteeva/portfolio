<template lang="pug">
  .works-add
    form.works-add__form(id="addWorksForm")
      .works-add__title Добавление работы
      .works-add__container
        .works-add__coll
          .works__drop-zone(id="dropZone")
            .works__drop-exp  Перетащите или загрузите изображение
            label.works__upload-block
              .works__upload-btn Загрузить
              input(type="file" name="uploadFile" required).works__upload
        .works-add__coll.works-add__coll--column
          label.works-add__block
            span.work__input-title Название
            input(type="text" name="workName" required).work__name.work__input
          label.works-add__block
            span.work__input-title Ссылка
            input(type="text" name="workLink" required).work__link.work__input
          label.works-add__block
            span.work__input-title Описание
            textarea(type="text" row="3" name="workDesc" required).work__textarea.work__input
          label.works-add__block
            span.work__input-title Добавление тега
            input(type="text" name="workTags" required).work__tags.work__input
          ul.tags__list 
            li.tags__item Test
              span.close-cross +
          saveCancelBtns
</template>
<script>
import saveCancelBtns from "./saveCancelBtns";
export default {
  components: {
    saveCancelBtns
  }
};
</script>
<style lang="pcss" scoped>
.works-add {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  &--column {
    flex-direction: column;
  }
}

.works__drop-zone {
  width: 494px;
  height: 276px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.work__input {
  outline: none;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #dedee0;
  &:focus {
    border-bottom: 2px solid #383bcf;
  }
}
.work__input-title {
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
  &:last-child {
    margin-right: 0;
  }
}
.close-cross {
  margin-left: 15px;
  cursor: pointer;
  font-size: 30px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 800;
  transform: rotate(45deg);
}
</style>