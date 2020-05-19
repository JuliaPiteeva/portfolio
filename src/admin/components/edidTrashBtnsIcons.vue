<template lang="pug">
    .editBtns
        button.edit
        button.trash
</template>
<style lang="pcss">
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
</style>