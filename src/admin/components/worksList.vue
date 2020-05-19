<template lang="pug">
  ul.works__list
    li.works__item.works__item--add
      button.works__add-btn(type="submit") +
      span.works__add-exp Добавить фото
    li.works__item
      .works__img
        img.works__img-icon(src="")
      .works__tags
      h2.works__title Сайт школы образования
      p.works__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam neque tenetur est excepturi quidem praese
      a.works__link http://loftschool.ru
      editTrashBtns
    li.works__item
      .works__img
          img.works__img-icon(src="")
      .works__tags
      h2.works__title Сайт школы образования
      p.works__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam neque tenetur est excepturi quidem praese
      a.works__link http://loftschool.ru
      editTrashBtns
</template>
<script>
import editTrashBtns from "./editTrashBtns";
export default {
  components: {
    editTrashBtns
  }
};
</script>
<style lang="pcss">
.works__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.works__item {
  box-sizing: border-box;
  width: calc(100% / 3 - 20px);
  min-height: 556px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 10px 20px;
  &--add {
    background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
    align-items: center;
    justify-content: center;
  }

  &:nth-child(3) {
    margin-right: 0;
  }
}
.works__add-btn {
  font-size: 72px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 300;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: transparent;
  border: 2px solid #ffffff;
  margin-bottom: 25px;
}
.works__add-exp {
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.works__img {
  max-width: 340px;
  max-height: 190px;
  margin-bottom: 35px;
}
.works__img-icon {
  width: 100%;
  height: 100%;
}

.works__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}
.works__desc {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.7);
  margin-bottom: 25px;
}
.works__link {
  font-size: 16px;
  color: #383bcf;
  font-weight: 600;
  margin-bottom: 45px;
}
</style>