<template lang="pug">
.skills-wrap
  .skills-row(v-if="editCategOn")
    input(type="text" v-model="editedCateg.category").title-group.title-group--edit
    .tick-cross__btns
      button(type="button" @click="editCurrentCategory").tick
      button(type="button", @click="editCategOn=false").cross
  .skills-row(v-else)
    .title-group  {{category.category}}
    .edit-trash__btns-icon
      button.edit(@click="editCategOn=true")
      button.trash(type="button" @click="removeCurrentCategory")
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
import { mapActions } from "vuex";
import addInput from "./addInput";
import skillsListItem from "./skiilsList-item";
export default {
  components: {
    addInput,
    skillsListItem
  },
  props: {
    category: Object
  },
  data() {
    return {
      editCategOn: false,
      editedCateg: { ...this.category }
    };
  },
  methods: {
    ...mapActions("categories", ["editCategory", "removeCategory"]),
    async editCurrentCategory() {
      try {
        await this.editCategory(this.editedCateg);
      } catch (error) {
        console.log(error);
      } finally {
        this.editCategOn = false;
      }
    },
    async removeCurrentCategory() {
      try {
        await this.removeCategory(this.category);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="pcss">
.skills-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.skills-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedee0;
  padding: 5% 0;
  margin-bottom: 20px;
}
.title-group {
  width: 80%;
  font-size: 18px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
}
.title-group--edit {
  border-bottom: 2px solid #dedee0;
}
.skills__table {
  margin-bottom: 35px;
  width: 100%;
  border-spacing: 0px 20px;
  margin-bottom: auto;
}
.edit-trash__btns-icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
}
</style>
