<template>
  <div>
    <h1>This is single product view</h1>
    {{ prod }}
    <img :src="require('@/assets/' + prod.imgFile)" />
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  data() {
    return {
      //imgFile: require("@/assets/skateboard-greta.jpg")
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch(Actions.ADD_PRODUCT, this.prod);
    },
  },
  computed: {
    prod() {
      return this.$store.state.productsModule.allProductsObj[
        this.$route.params.id
      ];
    },
  },
};
</script>

<style></style>
