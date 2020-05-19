<template lang="pug">
    .add-input
        input(type="text" name="skillName" required).add-input__name(placeholder="Новый навык")
        input(type="text" name="skillPerc" required).add-input__percent(placeholder="%")
        addBtn
</template>
<script>
import addBtn from "./addBtn";
export default {
  components: {
    addBtn
  }
};
</script>
<style lang="pcss">
.add-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 35px;
  margin-top: auto;
}
.add-input__name{
  border-bottom: 1px solid #dedee0;
  margin-right: 10px;
  &::placeholder {
    text-align: left;
    font-size: 16px;
    line-height: 32px;
    color: rgba(55, 62, 66, 0.5);
    font-family: "Open Sans";
    font-weight: 400;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #383bcf;
  }
  &:active {
    outline: none;
    border-bottom: 2px solid #383bcf;
  }
}
.add-input__percent {
  border-bottom: 1px solid #dedee0;
  margin-right: 20px;
  &::placeholder {
    text-align: right;
    font-size: 16px;
    line-height: 32px;
    color: rgba(55, 62, 66, 0.5);
    font-family: "Open Sans";
    font-weight: 400;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #383bcf;
  }
  &:active {
    outline: none;
    border-bottom: 2px solid #383bcf;
  }
}
</style>