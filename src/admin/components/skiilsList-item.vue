<template lang="pug">
    tr(v-if="editModeOn").skills__row
      td.coll 
        input(type="text" v-model="editedSkill.title")
      td.coll
        input(type="text" v-model="editedSkill.percent")
      td.coll.skills__coll--btn
        .tick-cross__btns
          button(type="button" @click="editCurrentSkill").tick
          button(type="button", @click="editModeOn=false").cross
    tr(v-else).skills__row
      td.c0ll.skills__coll--title {{skill.title}}
      td.coll.skills__coll--percent {{skill.percent}}
      td.coll.skills__coll--btn
        .editBtns
          button.edit(type="button" @click="editModeOn=true")
          button(type="button" @click="removeCurrentSkill").trash
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      editModeOn: false,
      editedSkill: { ...this.skill }
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {
        console.log(error);
      }
    },

    async editCurrentSkill() {
      try {
        await this.editSkill(this.editedSkill);
      } catch (error) {
        console.log(error);
      } finally {
        this.editModeOn = false;
      }
    }
  }
};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";
.skills__row {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
}
.skills__coll--title {
  font-size: 16px;
}
.coll {
  padding: 5px 0;
}
.skills__coll--btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.skills__coll--percent {
  text-align: right;
  @include beforePhones {
    text-align: left;
  }
}
.skills__coll--percent:after {
  content: "%";
  margin-left: 30px;
  @include beforePhones {
    margin-left: 10px;
  }
}
</style>
