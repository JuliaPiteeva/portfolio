<template lang="pug">
     button.btn__add
</template>
<script>
export default {};
</script>
<style lang="pcss">
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
</style>