<template lang="pug">
  .works-wrap
    .works__img
      img.works__img-icon(:src="baseURL+work.photo")
    ul.works__tags
      li.tags__item(v-for="tag in tags") {{tag}}
    .works__content
      h2.works__title  {{work.title}}
      p.works__desc {{work.description}}
      a.works__link  {{work.link}}
      .edit-trash__btns
        label.btn-label
          span.btn-text Править
          button(type="button" @click.prevent="toggleEdit" :disabled="addModeOn || getEditModeState").edit.edit--blue
        label.btn-label
          span.btn-text Удалить
          button(type="button" @click="removeCurrentWork").cross
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  props: {
    work: Object,
    addModeOn: Boolean
  },
  data() {
    return {
      baseURL: "https://webdev-api.loftschool.com/",
      tags: []
    };
  },
  created() {
    this.tags = this.work.techs.split(" ");
  },
  computed: {
    ...mapGetters("works", ["getEditModeState"])
  },
  methods: {
    ...mapActions("works", ["removeWork", "toggleEditMode"]),
    async removeCurrentWork() {
      try {
        await this.removeWork(this.work);
      } catch (error) {
        console.log(error);
      }
    },
    toggleEdit() {
      this.toggleEditMode(this.getEditModeState);
      this.$emit("getCurrentWork", this.work);
      this.$emit("scrollToEdit");
    }
  }
};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";
.works-wrap {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.works__content {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @include phones {
    padding-left: 20px;
  }
}
.works__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  @include phones {
    flex-direction: column;
  }
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
  @include tablets {
    width: calc(100% / 2 - 10px);
  }
  @include phones {
    width: 100%;
    padding: 0;
    margin-right: 0px;
  }
}

.works__item:nth-child(3) {
  margin-right: 0;
  @include tablets {
    margin-right: 10px;
  }
}
.works__item:nth-child(2n) {
  @include tablets {
    margin-right: 0px;
  }
}

.works__img {
  max-width: 340px;
  height: 190px;
  margin-bottom: 35px;
  position: relative;
  @include beforePhones {
    max-width: 300px;
    height: 160px;
  }
  @include phones {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
}
.works__tags {
  position: absolute;
  display: flex;
  left: 10%;
  top: 28%;
  @include beforePhones {
    top: 23%;
  }
  @include phones {
    top: 36%;
  }
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
  @include beforePhones {
    margin-right: 10px;
    padding: 8px 10px;
  }
}
.tags__item:last-child {
  margin-right: 0;
}
.works__img-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  @include phones {
    margin-bottom: 20px;
  }
}
.edit-trash__btns:focus {
  outline: none;
}
.btn-text {
  font-size: 16px;
  line-height: 30px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  margin-right: 15px;
}
.btn-text:focus {
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
.edit--blue {
  background: svg-load("pencil.svg", fill=#383bcf, width=15px, height=15px)
    center center no-repeat;
}
.edit:focus {
  border: none;
  outline: none;
}

.cross {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=#bf2929, width=15px, height=15px)
    center center no-repeat;
}
.cross:focus {
  outline: none;
}
</style>
