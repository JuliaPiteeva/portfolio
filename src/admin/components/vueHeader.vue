<template lang="pug">
header.header
  .header__user-info
    .user__avatar 
      img.user__avatar-img
    p.user__name Юлия Бубнова
  .header__title
    p Панель администрирования
  button.exit Выйти
</template>
<script>
</script>
<style lang="pcss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 80px;
  padding: 0 15px;
  background-image: linear-gradient(90deg, #3d3d59 0%, #444472 100%);
  font-family: "Open Sans";
}
.header__user-info {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__title {
  font-family: inherit;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  opacity: 0.5;
}
.user__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  border: none;
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
</style>