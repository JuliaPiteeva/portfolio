<template lang="pug">
  .works-wrap
    .works__img
      img.works__img-icon(:src="baseURL+work.photo")
    ul.works__tags
      li.tags__item {{work.techs}}
    h2.works__title  {{work.title}}
    p.works__desc {{work.description}}
    a.works__link  {{work.link}}
    .edit-trash__btns
      label.btn-label
        span.btn-text Править
        button(type="button" @click.prevent='editModeOn=true').edit.edit--blue
      label.btn-label
        span.btn-text Удалить
        button(type="button" @click="removeCurrentWork").cross
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      baseURL: "https://webdev-api.loftschool.com/"
    };
  },
  props: {
    work: Object
  },
  computed: {
    ...mapGetters("works", ["editModeOn"])
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    async removeCurrentWork() {
      try {
        await this.removeWork(this.work);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="pcss">
.works-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.works__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.works__item {
  box-sizing: border-box;
  width: calc(100% / 3 - 20px);
  min-height: 556px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 10px 20px;
  margin-bottom: 30px;
}
.works__item--add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
}

.works__item:nth-child(3) {
  margin-right: 0;
}
.works__add-label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
}
.works__add-input {
  display: none;
}
.works__add-visible {
  font-size: 72px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 300;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: transparent;
  border: 2px solid #ffffff;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.works__add-exp {
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.works__img {
  max-width: 340px;
  max-height: 190px;
  margin-bottom: 35px;
}
.works__img-icon {
  width: 100%;
  height: 100%;
}

.works__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}
.works__desc {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.7);
  margin-bottom: 25px;
}
.works__link {
  font-size: 16px;
  color: #383bcf;
  font-weight: 600;
  margin-bottom: 45px;
}
.edit-trash__btns {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
}
.btn-text {
  font-size: 16px;
  line-height: 30px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  margin-right: 15px;
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

.cross {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=#bf2929, width=15px, height=15px)
    center center no-repeat;
}
.tags__item {
  font-size: 13px;
  color: rgba(40, 51, 64, 0.7);
  font-family: "Open Sans";
  font-weight: 600;
  background-color: #f4f4f4;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 25px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tags__item:last-child {
  margin-right: 0;
}
</style>
