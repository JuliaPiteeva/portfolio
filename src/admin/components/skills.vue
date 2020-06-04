<template lang="pug">
.container
  .block-title.title-skills
    .title
      h1 Блок "Обо мне"
    label.add-group__btns(v-if="!blockAddGroupIsActive")
      button(type="button" @click.prevent="blockAddGroup" ).add-group__btn  +
      span.add-group__exp Добавить группу
  ul.skills
    li.skill__item(v-if="blockAddGroupIsActive")
      addSkill(@blockAddGroup="blockAddGroup")
    li.skill__item(v-for="cat in categories" :key="cat.id")
      skillsList(
       :category="cat" 
      )
</template>
<script>
import addSkill from "./addSkill";
import skillsList from "./skillsList";
import { mapActions, mapState } from "Vuex";
export default {
  components: {
    addSkill,
    skillsList
  },
  data() {
    return {
      blockAddGroupIsActive: false
    };
  },

  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchcategories();
  },
  methods: {
    ...mapActions("categories", ["fetchcategories"]),
    blockAddGroup() {
      this.blockAddGroupIsActive = !this.blockAddGroupIsActive;
    }
  }
};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";
.title-skills {
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.title {
  margin-right: 60px;
  @include phones {
    margin-right: 0px;
    margin-bottom: 30px;
  }
}
.title h1 {
  font-size: 21px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 700;
}
.skill__item {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 350px;
  width: 45%;
  padding: 0 2%;
  margin-bottom: 20px;
  @include beforePhones {
    width: 47%;
  }
  @include phones {
    width: 100%;
  }
}

.skill__item:nth-child(2n + 1) {
  margin-right: 10%;
  @include beforePhones {
    margin-right: 3%;
  }
  @include phones {
    margin-right: 0;
  }
}
.add-group__btns {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.add-group__btn {
  font-size: 15px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  margin-right: 20px;
}
.add-group__exp {
  font-size: 16px;
  color: #383bcf;
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
}
.skills {
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @include phones {
    flex-direction: column;
    justify-content: center;
  }
  @include beforePhones {
    justify-content: center;
  }
}
</style>
