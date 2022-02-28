<template>
  <div class="modal">
    <button> View Order</button>
    <button @click="$emit(cancelEvent)">Back to Shop</button>
  </div>
</template>

<script>
export default {
  props: {
    cancelEvent: {
      type: String,
      default: 'cancel'
    }
  }
}
</script>

<style>

</style>