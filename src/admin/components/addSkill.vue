<template lang="pug">
  .skills-add
    form.skills-add__form(id="addSkiilsForm")
      .skills-add__group
        input(type="text" name="skillGroup" required).skills-add__title(placeholder="Название новой группы")
        tickCrossBtns
      addInput
</template>
<script>
import addInput from "./addInput";
import tickCrossBtns from "./tickCrossBtns";
export default {
  components: {
    addInput,
    tickCrossBtns
  }
};
</script>
<style lang="pcss" scoped>
.skills-add {
  filter: drop-shadow(4.096px 2.868px 10px rgba(0, 0, 0, 0.07));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 350px;
  width: 45%;
  padding: 0 2%;

  &:nth-child(2n + 1) {
    margin-right: 10%;
  }
}
.skills-add__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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