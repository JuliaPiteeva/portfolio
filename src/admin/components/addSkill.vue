<template lang="pug">
.skills-add
  form.skills-add__form(@submit.prevent="createCategory")
    input(
      type="text"
      placeholder="Название новой группы" 
      required
      v-model="category.title").skills-add__title
    .tick-cross__btns
      button(type="submit").tick
      button(type="button" @click.prevent="$emit('blockAddGroup')").cross
  //- addInput(
  //-   :category="category"
  //- )
</template>
<script>
//id 319
import addInput from "./addInput";
import { mapActions, mapState } from "Vuex";
export default {
  inheritAttrs: false,
  components: {
    addInput
  },
  props: {
    blockAddGroupIsActive: Boolean
  },
  data() {
    return {
      category: {
        title: ""
      }
    };
  },

  methods: {
    ...mapActions("categories", ["addCategory", "fetchcategories"]),
    validForm() {
      if (!this.category.title) {
        return false;
      } else {
        return true;
      }
    },
    async createCategory() {
      if (this.validForm()) {
        try {
          await this.addCategory(this.category.title);
          this.category.title = "";
          this.$emit("blockAddGroup");
        } catch (error) {
          console.log(error.message);
        }
      } else {
        alert("Поле не может быть пустым");
      }
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
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
/* .skills-add:nth-child(2n + 1) {
  margin-right: 10%;
} */

.skills-add__form {
  width: 100%;
  border-bottom: 1px solid #dedee0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0;
  margin-bottom: 20px;
}
.skills-add__title {
  width: 100%;
  border-bottom: 1px solid #dedee0;
  padding: 1%;
  margin-right: 100px;
}
.skills-add__title:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
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
  border-bottom: 2px solid transparent;
}
.cross:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
}
.tick {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("tick.svg", fill=#00d70a, width=15px, height=15px) center
    center no-repeat;
  margin-right: 20px;
  border-bottom: 2px solid transparent;
}
.tick:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
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
.btns-row {
  margin-left: auto;
}

.editBtns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.editBtns:focus {
  outline: none;
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
.edit:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
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
.trash:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
}
</style>
