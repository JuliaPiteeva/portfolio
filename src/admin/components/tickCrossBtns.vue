<template lang="pug">
    .tick-cross__btns
        button.tick
        button.cross
</template>
<style lang="pcss">
.tick-cross__btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.cross {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("Cross.svg", fill=#bf2929, width=15px, height=15px)
    center center no-repeat;
}
.tick {
  display: block;
  width: 15px;
  height: 15px;
  background: svg-load("tick.svg", fill=#00d70a, width=15px, height=15px) center
    center no-repeat;
  margin-right: 20px;
}
</style>