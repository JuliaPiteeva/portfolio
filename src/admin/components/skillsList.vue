<template lang="pug">
.skills-list
  .skills__row {{categName}}
      button.edit
      button(v-on:click="delCategory").trash
  table.skills__table
    tr(v-for="skill in categories.skills" key:="skill.id")
      td {{skill.title}}
      td {{skill.percent}}
      td  
        .editBtns
          button.edit
          button.trash            
  addInput

</template>
<script>
const baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token");
axios.defaults.baseURL = baseURL;
axios.defaults.headers["Authorization"] = `Bearer ${token}`;
import axios from "axios";
import addInput from "./addInput";

export default {
  data() {
    return {
      categId: "5419"
    };
  },
  props: ["categName", "categID", "categories"],
  components: {
    addInput
  },
  methods: {
    delCategory() {
      console.log(categId + "categId");
      axios.delete(`/categories/${categId}`).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
<style lang="pcss">
.skills-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
