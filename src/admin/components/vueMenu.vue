<template lang="pug">
  main.main
    .container-nav
      .container
        ul.nav__list
          li.nav__item
            router-link(to="/about",
            tag="a",
            class="nav__link" ) Обо мне
          li.nav__item 
            router-link(to="/works",
            tag="a",
            class="nav__link" ) Работы
          li.nav__item 
            router-link(to="/revs", 
            tag="a",
            class="nav__link" ) Отзывы
    .main__block
      router-view
</template>
<script>
export default {};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";
.nav {
  margin-bottom: 55px;
}
.container-nav {
  background-color: #ffffff;
}
.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 55px;
  background-color: #ffffff;
}
.router-link-exact-active {
  color: #3d36cc;
  border-bottom: 2px solid #3d36cc;
}
.nav__item {
  min-height: 77px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-align: center;
  @include phones {
    width: 100%;
    min-width: 0px;
  }
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
  padding: 0 0 15% 0;
  @include phones {
    padding: 15% 10%;
  }
}
</style>
