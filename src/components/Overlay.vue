<template>
  <div class="overlay" :class="{show}">
    <div class="fade-layer"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
.fade-layer{
  position: fixed;
  top: 0;left:0;bottom:0;right:0;
  background-color: rgba(0,0,0,0.25);
}
.overlay{
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
}
.overlay.show{
  opacity: 1;
  pointer-events: all;
}
.content{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>