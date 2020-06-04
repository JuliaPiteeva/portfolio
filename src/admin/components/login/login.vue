<template lang="pug">
.login
  .login-wrapper
    .login__container
      .login__content(v-if='formIsActive')
        h2 Авторизация
        form.authorization(@submit.prevent="loginUser")
          label.login-block
            span.login-title Логин
            input.login-input.authorization-input(type="text" name="login" required autocomplete placeholder="Terminator_2000" v-model="user.name")
          label.login-block
            span.login-title Пароль
            input.password-input.authorization-input(type="password" name="password" required autocomplete placeholder="•••••••••••••••••••••" v-model="user.password")
          button.authorization-btn(type="submit" ) Отправить
        span.close-cross(@click.prevent="formIsActive=false") +
      button.login__btn(type="submit" @click="formIsActive=true") Войти
          //- .checkbox__row
          //-   label.robot-block
          //-     input(type="checkbox" checked  name="checkbox" value="human").input-checkbox
          //-     .input-checkbox__visible
          //-     .robot-checkbox__title Я человек
          //- span.robot-title Вы точно не робот?
          //- .radio__row
          //-   label.robot-block
          //-     input(type="radio"  name="radio" value="yes").input-radio
          //-     .input-radio__visible
          //-     .robot-radio__title Да
          //-   label.robot-block
          //-     input(type="radio" checked  name="radio" value="no").input-radio
          //-     .input-radio__visible
          //-     .robot-radio__title Не уверен
    //-     span.close-cross +
    //- .overlay-message Неверно введен логин или пароль
    //-     span.close-overlay-message
   
</template>
<script>
import { mapActions } from "vuex";
import $axios from "../../requests";
export default {
  inheritAttrs: false,
  data() {
    return {
      formIsActive: true,
      user: {
        name: "",
        password: ""
      },
      title: ""
    };
  },
  methods: {
    ...mapActions("login", ["toLogin"]),
    async loginUser() {
      if (this.validForm()) {
        try {
          const response = await this.toLogin(this.user);
          const token = response.data.token;

          localStorage.setItem("token", token);
          $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

          this.$router.replace("/about");
        } catch (error) {
          console.log(error);
        }
      }
    },
    validForm() {
      if (!this.user.name || !this.user.password) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";
.login {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url("../../images/bg-desktop.png");
  background-position: center;
  object-fit: contain;
  z-index: 1000;
}
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2d3c4e;
  opacity: 0.9;
}
.login__container {
  position: relative;
  padding: 2%;
  max-width: 563px;
  max-height: 517px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include phones {
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
}

.login__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.login__content h2 {
  font-size: 36px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  margin-bottom: 40px;
}
.login-title {
  font-size: 16px;
  color: rgba(65, 76, 99, 0.3);
  font-family: "Open Sans";
  font-weight: 600;
  margin-bottom: 10px;
  margin-left: 50px;
}
.lock {
  /* убираем скроллбары с основнового содержимого страницы */
  overflow: hidden;
}

.authorization {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 0px 20%; */
}
.login-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
}
.authorization-input {
  font-size: 18px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 700;
  padding: 15px 15px 15px 50px;
  background-size: 30px 30px;
  flex: 1;
  border-bottom: 1px solid rgba(65, 76, 99, 0.5);
  box-sizing: border-box;
}
.authorization-input:active {
  outline: none;
  border-bottom: 2px solid #3d36cc;
}
.authorization-input:focus {
  outline: none;
  border-bottom: 2px solid #3d36cc;
}
.authorization-input::placeholder {
  font-size: 18px;
  color: rgba(65, 76, 99, 0.8);
  font-family: "Open Sans";
  font-weight: 400;
}
.login-input {
  background: svg-load(
      "user.svg",
      fill=rgba(65, 76, 99, 0.3),
      width=30px,
      height=30px
    )
    center left no-repeat;
}
.password-input {
  background: svg-load(
      "Key.svg",
      fill=rgba(65, 76, 99, 0.3),
      width=30px,
      height=30px
    )
    center left no-repeat;
}
.authorization-btn {
  padding: 5% 10%;
  text-transform: uppercase;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background: linear-gradient(90deg, #9300e7 0%, #4900ed 100%);
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  transition: color 0.9s;
  margin-bottom: 25px;
  /* width: 76%; */
}

.close-cross {
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 30px;
  font-size: 36px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 800;
  transform: rotate(45deg);
}
.overlay-message {
  /* position: absolute; */
  background-color: #b13333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  padding: 30px;
  line-height: 20px;
  font-size: 18px;
  color: #fff;
  font-family: "Open Sans";
  font-weight: 600;
}
.close-overlay-message {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=white, width=15px, height=15px) center
    center no-repeat;
  margin-left: 30px;
  cursor: pointer;
}
.input-checkbox {
  display: none;
}
.input-checkbox:checked ~ .input-checkbox__visible::before {
  content: "";
  display: block;
  position: absolute;
  width: 17px;
  height: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: svg-load("tick.svg", fill=#6c23f4, width=17px, height=14px) center
    left no-repeat;
}
.robot-checkbox__title {
  font-size: 16px;
  line-height: 48px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
}
.input-checkbox__visible {
  position: relative;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #414c63;
  margin-right: 15px;
}
.robot-block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.robot-title {
  display: block;
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
  margin-bottom: 30px;
}
.robot-radio__title {
  display: block;
  font-size: 16px;
  color: #414c63;
  font-family: "Open Sans";
  font-weight: 600;
}

.checkbox__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
}
.input-radio {
  display: none;
}

.radio__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-radio:checked ~ .input-radio__visible::before {
  content: "";
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #6c23f4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input-radio__visible {
  margin-right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #414c63;
  position: relative;
}
.login__btn-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
.login__btn {
  /* padding: 1% 9%; */
  text-transform: uppercase;
  /* border-top-left-radius: 40px;
  border-bottom-right-radius: 40px; */
  background: linear-gradient(90deg, #9300e7 0%, #4900ed 100%);
  font-size: 16px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  @include phones {
    display: none;
  }
}
</style>
