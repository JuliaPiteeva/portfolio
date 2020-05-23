<template lang="pug">
.skills-add
  form.skills-add__form(id="addSkiilsForm" @submit.prevent="createCategory")
    input(type="text" name="skillGroup" required placeholder="Название новой группы" v-model="title").skills-add__title
    .tick-cross__btns
      button(type="submit").tick
      button(type="submit").cross
  addInput(
    :categoryId="categories.id"
    @skillAdded='addSkill'
  )
</template>
<script>
const baseURL = "https://webdev-api.loftschool.com/";
const token = localStorage.getItem("token");
//|| ""
axios.defaults.baseURL = baseURL;
axios.defaults.headers["Authorization"] = `Bearer ${token}`;
import axios from "axios";
import addInput from "./addInput";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

//id 319
export default {
  inheritAttrs: false,
  props: ["categories"],
  data() {
    return {
      title: ""
    };
  },
  components: {
    addInput
  },
  methods: {
    createCategory() {
      axios
        .post("/categories", {
          title: this.title
        })
        .then(response => {
          this.categories.unshift(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },

    addSkill(newSkill) {
      // this.categories = this.categories.map(category => {
      //   if (category.id === newSkill.category) {
      //     category.skills.push(newSkill);
      //   }
      //   return category;
      // });
      console.log(newSkill);
    }
  }
};
</script>
<style lang="pcss">
.list {
  display: flex;
  flex-wrap: wrap;
}
.skills-add {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
/* .skills-add:nth-child(2n + 1) {
  margin-right: 10%;
} */

.skills-add__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  margin-bottom: 20px;
}
.skills-add__title {
  width: 100%;
  border-bottom: 1px solid #dedee0;
  padding: 1%;
}
.tick-cross__btns {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cross {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=#bf2929, width=15px, height=15px)
    center center no-repeat;
}
.tick {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("tick.svg", fill=#00d70a, width=15px, height=15px) center
    center no-repeat;
  margin-right: 20px;
}
.skills-add__title {
  font-size: 18px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  border-bottom: 2px solid #dedee0;
}
.skills-add__title::placeholder {
  font-size: 18px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
}
.skills-add__title:focus:active {
  outline: none;
  border-bottom: 2px solid #383bcf;
}

.editBtns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.edit {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load(
      "pencil.svg",
      fill=rgba(65, 76, 99, 0.5),
      width=15px,
      height=15px
    )
    center center no-repeat;
  margin-right: 20px;
}
.edit--blue {
  background: svg-load("pencil.svg", fill=#383bcf, width=15px, height=15px)
    center center no-repeat;
}

.trash {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load(
      "trash.svg",
      fill=rgba(65, 76, 99, 0.5),
      width=15px,
      height=15px
    )
    center center no-repeat;
}
</style>
