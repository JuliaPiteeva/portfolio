<template lang="pug">
  .skills-list
    .skills__group
      .title-group Workflow 
      tickCrossBtns
    table.skills__table  
      -var skills=[{skill:"Git", perc:"100"}, {skill:"Terminal", perc:"90"}, {skill:"Gulp", perc:"80"},{skill:"Webpack", perc:"85"}]
        each skill in skills
          tr.skills__row
            td.skills__coll #{skill.skill}
            td.skills__coll.skills__coll--percent #{skill.perc}
            td.skills__coll.skills__coll--btn
              edidTrashBtnsIcons
    addInput
</template>
<script>
import addInput from "./addInput";
import tickCrossBtns from "./tickCrossBtns";
import edidTrashBtnsIcons from "./edidTrashBtnsIcons";
export default {
  components: {
    addInput,
    tickCrossBtns,
    edidTrashBtnsIcons
  }
};
</script>
<style lang="pcss" scoped>
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
.skills__group {
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

.skills__coll {
  &--btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &--percent {
    &:after {
      content: "%";
      margin-left: 30px;
    }
  }
}
</style>