<template>
  <div>
    <h1>This is single product view</h1>
    {{ prod }}
    <img :src="require('@/assets/' + prod.imgFile)" />
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //imgFile: require("@/assets/skateboard-greta.jpg")
    };
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
