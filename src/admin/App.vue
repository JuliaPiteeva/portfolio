<template lang="pug">
main.main
  .container
    vueHeader
    nav.nav
      .nav__list
        .nav__item.nav__item-active
          a.nav__link Обо мне
        .nav__item
          a.nav__link Работы
        .nav__item
          a.nav__link Отзывы
    .block-title
      .title
        h1 Блок "Обо мне"
      .add-group__btns
        button.add-group__btn(type="submit") +
        span.add-group__exp Добавить группу
    .skills
      addSkill
      skillsList
    .block-title
      .title
         h1 Блок "Работы"  
    .works
      addWork
      worksList
    .block-title
        .title
          h1 Блок "Отзывы"
    .revs
      addRev
      revsList 
    overlay  
</template>
<script>
import addRev from "./components/addRev";
import addSkill from "./components/addSkill";
import addWork from "./components/addWork";
import overlay from "./components/overlay";
import revsList from "./components/revsList";
import skillsList from "./components/skillsList";
import worksList from "./components/worksList";
import vueHeader from "./components/vueHeader";

export default {
  name: "App",
  components: {
    addRev,
    addSkill,
    addWork,
    overlay,
    revsList,
    revsList,
    skillsList,
    worksList,
    vueHeader
  }
};
</script>
<style lang="pcss">
.btn-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  border: 0;
  cursor: pointer;
  background: transparent;
  cursor: pointer;
  &:active {
    outline: none;
  }
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
blockquote {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  &:active {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  /* max-height: 100%; */
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

footer {
  position: relative;
  width: 100%;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  &:active {
    outline: none;
  }
}

input,
textarea {
  border: none;
  box-shadow: none;
  &:active {
    border-bottom: 2px solid #383bcf;
  }
}
.main {
  background: #f7f9fe;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
.nav {
  background-color: #ffffff;
  margin-bottom: 55px;
}
.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.nav__item {
  min-height: 77px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.block-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 55px;
}
.title {
  margin-right: 60px;
  h1 {
    font-size: 21px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
  }
}

.add-group__btns {
  display: flex;
  align-items: center;
}
.add-group__btn {
  font-size: 15px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  margin-right: 20px;
}
.add-group__exp {
  font-size: 16px;
  color: #383bcf;
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
}

input {
  border: none;
  box-shadow: none;
  padding: 5px;
}
.skills {
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.works {
  margin-bottom: 100px;
}
.revs {
  margin-bottom: 100px;
}
</style>