<template lang="pug">
.skills-list
  .skills-row
    .title-group  {{category.category}}
    .edit-trash__btns-icon
      button.edit
      button.trash
  table.skills__table
    skillsListItem(
      v-for="skill in category.skills" 
      :key="skill.id"
      :skill="skill"
      )
  .add-skill-wrapper       
    addInput(
      :category="category"
    )

</template>
<script>
import addInput from "./addInput";
import skillsListItem from "./skiilsList-item";
export default {
  components: {
    addInput,
    skillsListItem,
  },
  data() {
    return {};
  },
  props: {
    category: Object,
  },
};
</script>
<style lang="pcss">
.skills-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.skills-row {
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
.edit-trash__btns-icon{
 display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
}
</style>
