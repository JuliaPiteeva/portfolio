<template lang="pug">
.rev-wrapper
  .block-title
    .title
      h1 Блок "Отзывы"
  .rev-add
    form.rev-add__form(id="addRevForm")
      .rev-add__title Новый отзыв
      .rev-add__container
        .rev-add__left
          .rev-add__img
            img.rev-add__icon
          .input(type="file" name="uploadFile" required).rev-add__upload Добавить фото
        .rev-add__right
          .rev-add__row
            label.rev-add__block
              span.rev__input-title Имя автора
              input(type="text" name="revName" required).rev__input
            label.rev-add__block
              span.rev__input-title Титул автора
              input(type="text" name="revPos" required).rev__input
          label.rev-add__block
            span.rev__input-title Отзыв
            textarea(type="text" row="3" name="revText" required).rev__textarea.rev__input
          .save-cancel__btns
            button(type="button").btn-cancel.btn Отмена
            button(type="button").btn Сохранить
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="pcss" scoped>
.rev-add {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  min-height: 350px;
  font-family: "Open Sans";
  color: rgba(65, 76, 99, 0.5);
  padding: 2%;
  margin-bottom: 30px;
}
.rev-add__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.rev-add__title {
  width: 100%;
  font-size: 18px;
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
.rev-add__container {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.rev-add__left {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rev-add__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #dee4ed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  margin-bottom: 35px;
}
.rev-add__icon {
  width: 90px;
  height: 112px;
  background: svg-load("user.svg", fill=#fff, width=90px, height=112px) center
    center no-repeat;
}
.rev-add__upload {
  font-size: 18px;
  color: #383bcf;
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
  background: transparent;
}

.rev-add__right {
  width: 55%;
}
.rev-add__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}
.rev-add__block {
  margin-bottom: 30px;
}
.rev-add__block:first-child {
  margin-right: 30px;
}
.rev__input {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  outline: none;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #dedee0;
}
.rev__input:focus {
  border-bottom: 2px solid #383bcf;
}
.rev__input-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}
.rev__input-title::placeholder {
  font-size: 16px;
  line-height: 30px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
}
.rev__textarea {
  resize: none;
  border: 1px solid rgba(65, 76, 99, 0.2);
  margin-bottom: 35px;
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
