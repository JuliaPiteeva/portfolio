<template lang="pug">
  main.main
    .container
      ul.nav__list
        li.nav__item.nav__item-active
          router-link(to="/admin/" tag="a" class="nav__link") Обо мне
        li.nav__item 
          router-link(to="/admin/works" tag="a" class="nav__link") Работы
        li.nav__item 
          router-link(to="/admin/reviews" tag="a" class="nav__link") Отзывы
    .main__block
      router-view
</template>
<script>
export default {
  components: {}
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
  min-height: 77px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav__item-active {
  color: #3d36cc;
  border-bottom: 2px solid #3d36cc;
}

.nav__link {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
  display: block;
}
</style>
