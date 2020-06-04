<template lang="pug">
  form.add-input( @submit.prevent="addNewSkill")
    input(type="text" required placeholder="Новый навык" v-model="skill.title").add-input__name
    input(type="text"  required placeholder="%" v-model="skill.percent").add-input__percent
    button(type="submit").btn__add
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: 0
      }
    };
  },
  components: {},
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      const skillData = {
        ...this.skill,
        category: this.category.id
      };
      try {
        await this.addSkill(skillData);
        this.category.title = "";
        this.category.percent = "";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="pcss">
.add-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 35px;
  margin-top: auto;
}
.add-input__name {
  border-bottom: 1px solid #dedee0;
  margin-right: 10px;
  width: 50%;
}
.add-input__name::placeholder {
  text-align: left;
  font-size: 16px;
  line-height: 32px;
  color: rgba(55, 62, 66, 0.5);
  font-family: "Open Sans";
  font-weight: 400;
}

.add-input__name:active:focus {
  outline: none;
  border-bottom: 2px solid #383bcf;
}
.add-input__percent {
  border-bottom: 1px solid #dedee0;
  margin-right: 20px;
  width: 30%;
}
.add-input__percent::placeholder {
  text-align: right;
  font-size: 16px;
  line-height: 32px;
  color: rgba(55, 62, 66, 0.5);
  font-family: "Open Sans";
  font-weight: 400;
}
.add-input__percent:focus:active {
  outline: none;
  border-bottom: 2px solid #383bcf;
}

.btn__add {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
}
.btn__add:after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: svg-load("Cross.svg", fill=#ffffff, width=10px, height=10px)
    center center no-repeat;
}
</style>
