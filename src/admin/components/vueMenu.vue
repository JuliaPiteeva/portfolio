<template lang="pug">
  main.main
    .container
      ul.nav__list
        li.nav__item
          router-link(to="/").nav__link Обо мне
        li.nav__item 
          router-link(to="/works").nav__link Работы
        li.nav__item 
          router-link(to="/revs").nav__link Отзывы
    .main__block
      router-view
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="pcss">
.nav {
  background-color: #ffffff;
  margin-bottom: 55px;
}
.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 55px;
}

.nav__item {
  /* min-height: 77px;
  min-width: 140px; */
  display: flex;
  align-items: center;
  justify-content: center;

}

.nav__item-active {
  color: #3d36cc;
  border-bottom: 2px solid #3d36cc;
}

.nav__link {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
  display: block;
  cursor: pointer;
}
</style>
