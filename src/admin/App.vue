<template lang="pug">
  main.main
    .container
      header.header
        .header__user-info
          .user
            .user__avatar 
              img.user__avatar-img
            p.user__name Юлия Бубнова
        .header__title
          p Панель администрирования
        button.exit Выйти
      nav.nav
        .nav__list
          .nav__item.nav__item-active
            a.nav__link Обо мне
          .nav__item
            a.nav__link Работы
          .nav__item
            a.nav__link Отзывы
      .title-block
        .title
          h1 Блок "Обо мне"
        .title-block__btns
          button.add-group-btn(type="submit") +
          span.add-group-exp Добавить группу
      .skills
        .block.skills-add
          .skills-add__group
            input(type="text").skills-add__title(placeholder="Название новой группы")
            .skills-add__btns
              button.tick
              button.cross
          .skills-add__skill
            input(type="text").skill-add__name(placeholder="Новый навык")
            input(type="text").skill-add__percent(placeholder="%")
            button.btn__add
        .block.skills-list
          .skills__group
            .title-group Workflow
            .skills__btns
              button.tick
              button.cross
          table.skills__table  
            -var skills=[{skill:"Git", perc:"100"}, {skill:"Terminal", perc:"90"}, {skill:"Gulp", perc:"80"},{skill:"Webpack", perc:"85"}]
              each skill in skills
                tr.skills__row
                  td.skills__coll #{skill.skill}
                  td.skills__coll.skills__coll--percent #{skill.perc}
                  td.skills__coll.skills__coll--btn
                    button.edit
                    button.trash
          .skills-add__skill
            input(type="text").skill-add__name(placeholder="Новый навык")
            input(type="text").skill-add__percent(placeholder="%")
            button.btn__add
      .title-block
        .title
          h1 Блок "Работы"  
      .works
        .block.works-add
          .works-add__title Добавление работы
          .works-add__container
            .works-add__coll
              .works__drop-zone(id="dropZone")
                .works__drop-text  Перетащите или загрузите изображение
                label.works__upload-block
                  .works__upload-btn Загрузить
                  input(type="file").works__upload
            .works-add__coll.work.works-add__coll--column
              label.works-add__block
                span.work__input-title Название
                input(type="text").work__name.work__input
              label.works-add__block
                span.work__input-title Ссылка
                input(type="text").work__link.work__input
              label.works-add__block
                span.work__input-title Описание
                textarea(type="text" row="3").work__textarea.work__input
              label.works-add__block
                span.work__input-title Добавление тега
                input(type="text").work__tags.work__input
              .works-add__btns
                button(type="reset").btn-cancel.btn Отмена
                button(type="submit").btn-download.btn Сохранить
        ul.works__list
          li.works__item.works__item-add
            button.works__add-btn(type="submit") +
            span.works__add-text Добавить фото
          li.works__item
            .works__img
              img.works__img-icon(src="../images/content/prj1.png")
            .works__tags
            h2.works__title Сайт школы образования
            p.works__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam neque tenetur est excepturi quidem praese
            a.works__link http://loftschool.ru
            .works__btns
              label.btn-label
                span.btn-text Править
                button.edit.edit--blue
              label.btn-label
                span.btn-text Удалить
                button.cross 
          li.works__item
            .works__img
              img.works__img-icon(src="../images/content/prj2.png")
            .works__tags
            h2.works__title Сайт школы образования
            p.works__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam neque tenetur est excepturi quidem praese
            a.works__link http://loftschool.ru
            .works__btns
              label.btn-label
                span.btn-text Править
                button.edit.edit--blue
              label.btn-label
                span.btn-text Удалить
                button.cross
      .rev
        .title-block
          .title
            h1 Блок "Работы"
        .block.rev-add
          .rev-add__title Новый отзыв
          .rev-add__container
            .rev-add__left
              .rev-add__img
                img.rev__add-icon
              .rev-add__exp Добавить фото
            .rev-add__right
              .rev-add__row
                label.rev-add__block
                  span.rev__input-title Имя автора
                  input(type="text").rev__input
                label.rev-add__block
                  span.rev__input-title Титул автора
                  input(type="text").rev__input
              label.rev-add__block
                  span.rev__input-title Отзыв
                  textarea(type="text" row="3").rev__textarea.rev__input
              .rev-add__btns
                button(type="reset").btn-cancel.btn Отмена
                button(type="submit").btn-download.btn Сохранить       
        ul.rev__list
          li.rev__item.rev__item-add
            button.rev__add-btn(type="submit") +
            span.rev__add-text Добавить работу
          li.rev__item
            .rev__row
              .rev__img
                img(src="../images/content/user.jpg").rev__icon
              .rev__info
                h3 Владимир
                p Преподаватель
            .rev__content
              p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repudiandae totam minus eveniet vero eum, culpa sapiente accusantium accusamus quos. Quidem a, quia ea consequuntur ducimus nam repellat quas laudantium!
            .rev__btns
              label.btn-label
                span.btn-text Править
                button.edit.edit--blue
              label.btn-label
                span.btn-text Удалить
                button.cross


</template>
<style>
button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
blockquote {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  &:active {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  /* max-height: 100%; */
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

footer {
  position: relative;
  width: 100%;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  &:active {
    outline: none;
  }
}

input,
textarea {
  border: none;
  box-shadow: none;
  &:active {
    border-bottom: 2px solid #383bcf;
  }
}
.main {
  background: #f7f9fe;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 80px;
  padding: 0 15px;
  background-image: linear-gradient(90deg, #3d3d59 0%, #444472 100%);
  font-family: "Open Sans";
}
.user {
  margin-right: 20px;
}
.header__title {
  font-family: inherit;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  opacity: 0.5;
}
.user__name {
  font-family: inherit;
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
}
.exit {
  font-family: inherit;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  margin-left: auto;
}
.nav {
  background-color: #ffffff;
  margin-bottom: 55px;
}
.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.nav__item {
  min-height: 77px;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__item-active {
  color: #3d36cc;
  border-bottom: 2px solid #3d36cc;
}

.nav__link {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 400;
  display: block;
}

.title-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 55px;
}
.title {
  margin-right: 60px;
  h1 {
    font-size: 21px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
  }
}

.title-block__btns {
  display: flex;
  align-items: center;
}
.add-group-btn {
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
.add-group-exp {
  font-size: 16px;
  color: #383bcf;
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
}

input {
  border: none;
  box-shadow: none;

  padding: 5px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.block {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 350px;
}

.skills-add {
  width: 45%;
  justify-content: space-between;

  &:nth-child(2n + 1) {
    margin-right: 10%;
  }
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
.skills-add__title {
  font-size: 18px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  border-bottom: 2px solid #dedee0;

  &::placeholder {
    font-size: 18px;
    color: rgba(65, 76, 99, 0.5);
    font-family: "Open Sans";
    font-weight: 600;
  }
}
.skills-add__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skills-add__skill {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 35px;
  margin-top: auto;
}

.skills-list {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.skills__group {
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
.skills__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:last-child {
  }
}

.skills__coll {
  &--btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &--percent {
    &:after {
      content: "%";
      margin-left: 30px;
    }
  }
}
.skill-add__name {
  border-bottom: 1px solid #1f232d;
  margin-right: 10px;
  &::placeholder {
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    color: rgba(55, 62, 66, 0.5);
    font-family: "Open Sans";
    font-weight: 400;
  }
}
.skill-add__percent {
  border-bottom: 1px solid #1f232d;
  margin-right: 20px;
  &::placeholder {
    text-align: right;
    font-size: 16px;
    line-height: 32px;
    color: rgba(55, 62, 66, 0.5);
    font-family: "Open Sans";
    font-weight: 400;
  }
}
/* .title-group {
  margin-right: auto;
  border-bottom: 1px solid #000000;
  min-width: 70%;
  &::placeholder {
    font-size: 18px;
    opacity: 0.5;
    color: rgba(65, 76, 99, 0.5);
    font-family: "Open Sans";
    font-weight: 600;
  }
} */
button {
  border: none;
  background: transparent;
  cursor: pointer;
  &:active {
    outline: none;
  }
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
.btn__add {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  &:after {
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
  &--blue {
    background: svg-load("pencil.svg", fill=#383bcf, width=15px, height=15px)
      center center no-repeat;
  }
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
.works-add {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-bottom: 35px;
}
.works-add__title {
  width: 100%;
  font-size: 18px;
  line-height: 34px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #1f232d;
  min-height: 70px;
  margin-bottom: 50px;
}
.work__input-title {
  font-size: 16px;

  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
}
.work__textarea {
  resize: none;
  border: 1px solid rgba(65, 76, 99, 0.2);
}
.works-add__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.works-add__coll {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  &--column {
    flex-direction: column;
  }
}
.works-add__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
}
.works__drop-zone {
  width: 494px;
  height: 276px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.works__drop-text {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}
.works__upload {
  display: none;
}
.works__upload-btn,
.btn {
  width: 181px;
  height: 50px;
  border-radius: 25px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  font-size: 16px;
  line-height: 48px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.works-add__btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.btn-cancel {
  text-transform: capitalize;
  color: #383bcf;
  background: transparent;
}
.works-add__block {
  width: 95%;
  font-size: 16px;
  color: rgba(65, 76, 99, 1);
  font-family: "Open Sans";
  font-weight: 600;
}

.work__input {
  outline: none;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #dedee0;
  &:focus {
    border-bottom: 2px solid #383bcf;
  }
}
.btn-cancel {
}
.btn-download {
}
.works {
  margin-bottom: 100px;
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
  margin-right: 30px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 10px 20px;

  &:last-child {
    margin-right: 0;
  }
}
.works__item-add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
}
.works__add-btn {
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
}
.works__add-text {
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
.works__btns {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
}
.btn-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-text {
  font-size: 16px;
  line-height: 30px;
  color: rgba(65, 76, 99, 0.5);
  font-family: "Open Sans";
  font-weight: 600;
  margin-right: 15px;
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

.rev-add {
  font-family: "Open Sans";
  color: rgba(65, 76, 99, 0.5);
  padding: 2%;
  margin-bottom: 30px;
}

.rev-add__title {
  width: 100%;
  font-size: 18px;
  color: rgba(65, 76, 99, 1);
  font-family: "Open Sans";
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  min-height: 70px;
  margin-bottom: 50px;
}
.rev-add__container {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.rev-add__left {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rev-add__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #dee4ed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  margin-bottom: 35px;
}
.rev__add-icon {
  width: 90px;
  height: 112px;
  background: svg-load("user.svg", fill=#fff, width=90px, height=112px) center
    center no-repeat;
}

.rev-add__exp {
  font-size: 18px;
  color: #383bcf;
  font-family: "Open Sans";
  font-weight: 600;
  text-align: center;
}
.rev-add__right {
  width: 55%;
}
.rev-add__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
}
.rev-add__block {
  margin-bottom: 30px;
  &:first-child {
    margin-right: 30px;
  }
}
.rev__input {
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  outline: none;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #dedee0;
  &:focus {
    border-bottom: 2px solid #383bcf;
  }
}
.rev__input-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 16px;
    line-height: 30px;
    color: rgba(65, 76, 99, 0.5);
    font-family: "Open Sans";
    font-weight: 600;
  }
}
.rev__textarea {
  resize: none;
  border: 1px solid rgba(65, 76, 99, 0.2);
  margin-bottom: 35px;
}
.rev-add__btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.rev__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.rev__item {
  box-sizing: border-box;
  width: calc(100% / 3 - 20px);
  min-height: 376px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 30px;
  color: #414c63;
  font-family: "Open Sans";
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  padding: 20px 20px;

  &:last-child {
    margin-right: 0;
  }
}
.rev__item-add {
  background: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  align-items: center;
  justify-content: center;
}
.rev__add-btn {
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
}
.rev__add-text {
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
}
.rev__row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(31, 35, 45, 0.15);
  margin-bottom: 25px;
}
.rev__info {
  flex: 1;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    color: rgba(65, 76, 99, 1);
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: rgba(65, 76, 99, 0.5);
    font-weight: 600;
  }
}
.rev__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  border: none;
  margin-bottom: 20px;
}
.rev__icon {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}
.rev__content {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.7);
  font-family: "Open Sans";
  font-weight: 600;
}
.rev__btns {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  width: 100%;
}
</style>
