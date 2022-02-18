<template>
  <div class="home">
    this is Home
    <ul>
      <li v-for="pro of products" :key="pro.id">{{ pro.title }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
  },
};
</script>
