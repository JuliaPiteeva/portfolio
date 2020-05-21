<template lang="pug">
  .skills-add
    form.skills-add__form(id="addSkiilsForm" @submit.prevent="createCategory")
      .skills-add__group
        input(type="text" name="skillGroup" required placeholder="Название новой группы" v-model="title").skills-add__title
      .tick-cross__btns
        button(type="button").tick
        button(type="button").cross
    addInput(
      :categoryId="cat.id"
        @skillAdded='addSkill'
    )
</template>
<script>
import addInput from "./addInput";
import axios from "axios";
axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

//id 319
export default {
  inheritAttrs: false,
  data() {
    return {
      title: "",
      categories: [],
      newSkillsBlock: false,
    };
  },
  components: {
    addInput,
  },
  created() {
    this.fetchcategories();
  },
  methods: {
    createCategory() {
      axios
        .post("/categories", {
          title: this.title,
        })
        .then((response) => {
          this.categories.unshift(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    fetchcategories() {
      axios
        .get("/categories/319", { categories: this.categories })
        .then((response) => {
          this.categories = response.data;
          console.log(response.data);
        });
    },
    addSkill(newSkill) {
      this.categories = this.categories.map((category) => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
  },
};
</script>
<style lang="pcss">
.list {
  display: flex;
  flex-wrap: wrap;
}
.skills-add {
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
  .skills-add:nth-child(2n + 1) {
    margin-right: 10%;
  }

.skills-add__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.skills-add__group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedee0;
  padding: 5%;
  margin-bottom: 20px;
}
.tick-cross__btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  margin-right: 20px;}
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
