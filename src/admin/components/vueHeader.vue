<template lang="pug">
header.header
  .container.container-header
    .header__user-info
      .user__avatar 
        img.user__avatar-img(src="../../images/content/user.jpg")
      .user__info
        p.user__name Юлия Бубнова
        a(@click="logout").exit-media-phones Выйти
    .header__title
      p Панель администрирования
    a(@click="logout").exit Выйти
</template>
<script>
import { mapActions } from "Vuex";
export default {
  methods: {
    ...mapActions({
      logoutUser: "user/logout"
    }),
    logout() {
      this.logoutUser();
      this.$router.replace("/");
    }
  }
};
</script>
<style lang="postcss">
@import "../../styles/mixins.pcss";

.container-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 1000px;
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
  @include phones {
    display: none;
  }
}
.user__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  border: none;
}
.user__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  @include phones {
    display: none;
  }
}
.exit-media-phones {
  display: none;
  font-family: inherit;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  @include phones {
    display: block;
  }
}
.user__info {
  display: flex;
  flex-direction: column;
}
</style>