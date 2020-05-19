<template lang="pug">
  .overlay
    pre {{user}}
    .overlay-container
      .overlay-content
        h2 Авторизация
        form.authorization(id="authorization"  action="https://vuejs.org/" method="post" @submit.prevent="login")
          label.login-block
            span.login-title Логин
            input.login-input.authorization-input(type="text" name="login" required placeholder="Terminator_2000" v-model="user.name")
          label.login-block
            span.login-title Пароль
            input.password-input.authorization-input(type="password" name="password" required placeholder="•••••••••••••••••••••" v-model="user.password")
          button.authorization-btn(type="submit" ) Отправить
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
        span.close-cross +
    .overlay-message Неверно введен логин или пароль
        span.close-overlay-message
</template>
<script>
import axios from "axios";
const baseUrl = "https://webdev-api.loftschool.com/";
export default {
  inheritAttrs: false,
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(baseUrl + "/login", this.user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style lang="pcss" scoped>
.overlay {
  display: none;
  /* position: fixed; */

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(45, 60, 78, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  h2 {
    font-size: 36px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    margin-bottom: 40px;
  }
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

.overlay-container {
  position: relative;
  padding: 2%;
  width: 563px;
  min-height: 517px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
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
  &:active {
    outline: none;
    border-bottom: 2px solid #3d36cc;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #3d36cc;
  }
  &::placeholder {
    font-size: 18px;
    color: rgba(65, 76, 99, 0.8);
    font-family: "Open Sans";
    font-weight: 700;
  }
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
  padding: 7% 19%;
  /* width: 76%; */
  text-transform: uppercase;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background: $linear-gradient;
  font-size: 18px;
  color: #ffffff;
  font-family: "Open Sans";
  font-weight: 700;
  transition: color 0.9s;
  margin-bottom: 25px;
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
  background-color: $bg-overlay-message-red-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  padding: 30px;
  line-height: 20px;
  font-size: 18px;
  color: $white-color;
  font-family: "Open Sans";
  font-weight: 600;
}
.close-overlay-message {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=$white-color, width=15px, height=15px)
    center center no-repeat;
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
</style>
