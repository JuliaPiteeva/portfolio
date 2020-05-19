<template lang="pug">
    .edit-trash__btns
        label.btn-label
          span.btn-text Править
          button.edit.edit--blue
        label.btn-label
          span.btn-text Удалить
          button.cross 
</template>
<style lang="pcss">
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
  &--blue {
    background: svg-load("pencil.svg", fill=#383bcf, width=15px, height=15px)
      center center no-repeat;
  }
}
.cross {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=#bf2929, width=15px, height=15px)
    center center no-repeat;
}
</style>