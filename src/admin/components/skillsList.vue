<template lang="pug">
.skills-list
    .skills__row
      .title-group {{title}}
      .editBtns
        button.edit
        button.trash
    table.skills__table
      tr(v-for="skill in cat.skills" :key="skill.id")
        td {{skill.title}} 
        td {{skill.percent}}
        td  
          .editBtns
            button.edit
            button.trash            
    addInput
//- li.skills-add(v-for="cat in categories" :key="cat.id")
</template>
<script>
import addInput from "./addInput";

export default {
  components: {
    addInput
  }
};
</script>
<style lang="pcss">
.skills-list {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 350px;
  width: 45%;
  padding: 0 2%;
}
.skills__row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedee0;
  padding: 5%;
  margin-bottom: 20px;
}
.title-group {
  width: 80%;
  font-size: 18px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  border-bottom: 2px solid #dedee0;
}
.skills__table {
  margin-bottom: 35px;
  width: 100%;
  border-spacing: 0px 20px;
}
.skills__row {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
}

.skills__coll--btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.skills__coll---percent:after {
  content: "%";
  margin-left: 30px;
}
</style>
