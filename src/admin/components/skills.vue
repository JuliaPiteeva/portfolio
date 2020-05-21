<template lang="pug">
  .container
    .block-title
      .title
        h1 Блок "Обо мне"
    form.add-group__btns(@submit.prevent="addGroup")
      button(type="button").add-group__btn  +
      span.add-group__exp Добавить группу
    ul.skills
      li.skill__item
        addSkill
      li.skills__item
        skillsList 
</template>
<script>
import addSkill from "./addSkill";
import skillsList from "./skillsList";
export default {
  components: { addSkill, skillsList }
};
</script>
<style lang="pcss">
.title {
  margin-right: 60px;
}
.title h1 {
  font-size: 21px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 700;
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
.skills {
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
