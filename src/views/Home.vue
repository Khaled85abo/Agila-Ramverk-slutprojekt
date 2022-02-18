<template>
  <div class="home">
    This is Home
    <ul>
      <li v-for="pro of products" :key="pro.id"
      @click="toProduct(pro.id)">{{ pro.title }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    toProduct(prodId){
      this.$router.push('/product/' + prodId)
    }
  },
  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
  },
};
</script>
