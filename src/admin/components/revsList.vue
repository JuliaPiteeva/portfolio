<template lang="pug">
  ul.rev__list
    li.rev__item.rev__item--add
      button.rev__add-btn(type="submit") +
      span.rev__add-text Добавить отзыв
    li.rev__item
      .rev__row
        .rev__img
          img(src="").rev__icon
        .rev__info
          h3 Владимир
          p Преподаватель
      .rev__content
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae totam minus eveniet vero eum, culpa sapiente accusantium accusamus quos. Quidem a, quia ea consequuntur ducimus nam repellat quas laudantium!
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
<style lang="pcss" scoped>
.rev__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.rev__item {
  box-sizing: border-box;
  width: calc(100% / 3 - 20px);
  min-height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 30px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 20px 20px;
  &--add {
    background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
    align-items: center;
    justify-content: center;
  }

  &:last-child {
    margin-right: 0;
  }
}
.rev__add-btn {
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

  h3 {
    font-size: 18px;
    color: rgba(65, 76, 99, 1);
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: rgba(65, 76, 99, 0.5);
    font-weight: 600;
  }
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
  object-fit: contain;
}
.rev__content {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.7);
  font-family: "Open Sans";
  font-weight: 600;
}
</style>