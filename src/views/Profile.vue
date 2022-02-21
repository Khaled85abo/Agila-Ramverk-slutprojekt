<template>
  <div>
    <h1>Your profile</h1>
    <button @click="getOrders">Get Orders</button>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  methods: {
    getOrders() {
      this.$store.dispatch(Actions.GET_ALL_ORDERS);
    },
  },
};
</script>

<style scoped></style>
