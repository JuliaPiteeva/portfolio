<template lang="pug">
    .save-cancel__btns
        button(type="reset").btn-cancel.btn Отмена
        button(type="submit").btn Сохранить
</template>
<style lang="pcss">
.save-cancel__btns {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
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
.btn-cancel {
  text-transform: capitalize;
  color: #383bcf;
  background: transparent;
}
</style>