<template>
  <div>
    <h1>This is single product view</h1>
    {{ prod }}
    <img :src="require('@/assets/' + prod.imgFile)">
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  data(){return{
      //imgFile: require("@/assets/skateboard-greta.jpg")
    }},
    methods: {
      addToCart(){
        this.$store.commit('addToCart', this.prod)
      }
    },
  computed: {
    prod() {
      return this.$store.state.productsModule.allProductsList.find(
        (prod) => prod.id === Number(this.$route.params.id)
      );
  }
}
}
</script>

<style></style>
