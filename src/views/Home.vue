<template>
  <div class="home">
    This is Home
    <ul>
      <li v-for="pro of products" :key="pro.id"
      @click="toProduct(pro.id)">{{ pro.title }}</li>
    </ul>
      <div class="filter">
        <input type="checkbox" 
          id="Unisex" 
          name="Unisex"
          value="Unisex" 
          v-model="categories"
          />
        <label for="Unisex">Unisex</label>

        <input type="checkbox" 
          id="Male" 
          name="Male" 
          value="Male"
          v-model="categories">
        <label for="Male">Male</label>

        <input type="checkbox" 
          id="Female" 
          name="Female" 
          value="Female"
          v-model="categories">
        <label for="Female">Female</label>
      </div>
      {{ categories }}

      <h3>Filtreringens resultat</h3>
      <p>{{ productsByFilter }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){return{
    categories: []
  }},
  methods: {
    toProduct(prodId){
      this.$router.push('/product/' + prodId)
    }
  },
  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
    productsByFilter(){
      console.log("Checked!")
      //Not giving any errors but not functional
      /*
      return this.$store.state.productsModule.allProductsList.filter(
        prod => prod.shortDesc == this.categories.includes(prod.shortDesc))
      */

     return this.$store.state.productsModule.allProductsList.filter(
        prod => this.categories.includes(prod.shortDesc))
    }
  },
};
</script>

<style scoped="scss">
  .filter{ 
    display: flex;
  }
  label {
    margin-right: 20px;
  }
</style>
