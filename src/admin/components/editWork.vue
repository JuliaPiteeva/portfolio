<template lang="pug">
  .works-edit
    form(@submit.prevent="editCurrentWork").works-add__form
      .works-add__title Добавление работы
      .works-add__container
        .works-add__coll
          .works__drop-zone
            label.works__upload-img
              span.works__drop-exp  Перетащите или загрузите изображение
              .works__upload-btn Загрузить
              input(type="file" @change="workFileChange").works__upload
          .works__img(:style="{backgroundImage: `url(${rendererWorkPhoto})`}")
        .works-add__coll.works-add__coll--column
          label.works-add__block
            span.work__input-title Название
            input(type="text" v-model="newWorkData.title").work__name.work__input
          label.works-add__block
            span.work__input-title Ссылка
            input(type="text" v-model="newWorkData.link").work__link.work__input
          label.works-add__block
            span.work__input-title Описание
            textarea(type="text" row="3" v-model="newWorkData.desc" ).work__textarea.work__input
          label.works-add__block
            span.work__input-title Добавление тега
            input(type="text" v-model="newWorkData.tags").work__tags.work__input
          ul.tags__list 
            li.tags__item Test
              span.close-cross +
          .save-cancel__btns
            button(type="button").btn-cancel.btn Отмена
            button(type="submit").btn Сохранить
</template>
<script>
import { renderer } from "../helpers/pictures";
import { mapActions, mapState } from "Vuex";

export default {};
</script>