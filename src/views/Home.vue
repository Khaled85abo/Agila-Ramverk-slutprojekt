<template>
  <div class="home">
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
    <div class="filter">
      <input
        type="checkbox"
        id="Unisex"
        name="Unisex"
        value="unisex"
        v-model="categories"
      />
      <label for="Unisex">Unisex</label>

      <input
        type="checkbox"
        id="Male"
        name="Male"
        value="male"
        v-model="categories"
      />
      <label for="Male">Male</label>

      <input
        type="checkbox"
        id="Female"
        name="Female"
        value="female"
        v-model="categories"
      />
      <label for="Female">Female</label>
    </div>
    {{ categories }}

    <h4>Filtreringens resultat</h4>
    <p>{{ productsByFilter }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/SingleProduct.vue";
export default {
  name: "Home",
  components: { Product },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    toProduct(prodId) {
      this.$router.push("/product/" + prodId);
    },
    addToCart(product) {
      console.log(product.id);
    },
  },
  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
    productsByFilter() {
      console.log("Checked!");
      //Not giving any errors but not functional
      /*
      return this.$store.state.productsModule.allProductsList.filter(
        prod => prod.shortDesc == this.categories.includes(prod.shortDesc))
      */

      return this.$store.state.productsModule.allProductsList.filter((prod) =>
        this.categories.includes(prod.shortDesc)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
}
label {
  margin-right: 20px;
}

.products {
  margin: 2rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
