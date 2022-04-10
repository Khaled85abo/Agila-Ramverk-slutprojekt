<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  width: 240px;
  height: 40px;
  border-radius: 20px;
  background-color: $monsterGreen;
  color: $pureWhite;
  font-size: 16px;
  font-weight: bold;
}
</style>
