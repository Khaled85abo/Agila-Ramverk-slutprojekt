<<<<<<< HEAD
<template>
  <div class="home">
    <div class="category">
        <Category 
        @filterCategory = "filterCategory"
        />
      </div>
      <div  class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
      </div>
        <!-- <div v-else
        class="products">
          <Product
            v-for="product in products"
            :key="product.id"
            :product="product"
            @addToCart="addToCart"
          />
        </div> -->
        
   <!--  <div class="filter">
      <input
        type="checkbox"
        id="Unisex"
        name="Unisex"
        value="Unisex"
        v-model="categories"
      />
      <label for="Unisex">Unisex</label>

      <input
        type="checkbox"
        id="Male"
        name="Male"
        value="Male"
        v-model="categories"
      />
      <label for="Male">Male</label>

      <input
        type="checkbox"
        id="Female"
        name="Female"
        value="Female"
        v-model="categories"
      />
      <label for="Female">Female</label>
    </div>
    {{ categories }}

    <h4>Filtreringens resultat</h4>
    <p>{{ productsByFilter }}</p> -->
    <!-- {{filteredProductsByCategory}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/SingleProduct.vue";
import Category from "../components/Category.vue";
import Actions from "../store/actions.types"
export default {
  name: "Home",
  components: { Product, Category },
  data() {
    return {
      categories: [],
      showCategory: 'skateboard'
    };
  },
   mounted() {
    this.$store.dispatch(Actions.GET_ALL_PRODUCTS, {category: this.showCategory});
  },
  methods: {
    toProduct(prodId) {
      this.$router.push("/product/" + prodId);
    },
    addToCart(product) {
      console.log(product.id);
      this.$store.dispatch(Actions.ADD_TO_CART, product)
    },
    filterCategory(showCategory){
      this.showCategory = showCategory
      this.$store.dispatch(Actions.GET_ALL_PRODUCTS, {category: showCategory});
    },
  },

  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
    // filteredProductsByCategory(){
    //   return this.$store.getters.getProductsByCategory(this.showCategory)  
    // },
    // productsByFilter() {
    //   console.log("Checked!");
    //   //Not giving any errors but not functional
    //   /*
    //   return this.$store.state.productsModule.allProductsList.filter(
    //     prod => prod.shortDesc == this.categories.includes(prod.shortDesc))
    //   */

    //   return this.$store.state.productsModule.allProductsList.filter((prod) =>
    //     this.categories.includes(prod.shortDesc)
    //   );
    // },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
}
label {
  margin-right: 20px;
}
.home{
  display: flex;
  max-width: 100%;
  margin: 5rem 12rem;
  justify-content: center;
  gap: 15px;
}
.category{
  flex: 1
}
.products {
   flex: 5;
   display: flex;
   flex-wrap: wrap;
   gap: 32px;
   
}
</style>
=======
<template>
  <div class="home">
    <div class="category">
        <Category 
        @filterCategory = "filterCategory"
        />
      </div>
      <div  class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
      </div>
       
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/SingleProduct.vue";
import Category from "../components/Category.vue";
import Actions from "../store/actions.types"
export default {
  name: "Home",
  components: { Product, Category },
  data() {
    return {
      categories: [],
      showCategory: 'skateboard'
    };
  },
   mounted() {
    this.$store.dispatch(Actions.GET_ALL_PRODUCTS, {category: this.showCategory});
  },
  methods: {
    toProduct(prodId) {
      this.$router.push("/product/" + prodId);
    },
    addToCart(product) {
      console.log(product.id);
      this.$store.dispatch(Actions.ADD_TO_CART, product)
    },
    filterCategory(showCategory){
      this.showCategory = showCategory
      this.$store.dispatch(Actions.GET_ALL_PRODUCTS, {category: showCategory});
    },
  },

  computed: {
    products() {
      return this.$store.state.productsModule.allProductsList;
    },
    // filteredProductsByCategory(){
    //   return this.$store.getters.getProductsByCategory(this.showCategory)  
    // },
    // productsByFilter() {
    //   console.log("Checked!");
    //   //Not giving any errors but not functional
    //   /*
    //   return this.$store.state.productsModule.allProductsList.filter(
    //     prod => prod.shortDesc == this.categories.includes(prod.shortDesc))
    //   */

    //   return this.$store.state.productsModule.allProductsList.filter((prod) =>
    //     this.categories.includes(prod.shortDesc)
    //   );
    // },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
}
label {
  margin-right: 20px;
}
.home{
  display: flex;
  max-width: 80%;
  margin: 5rem ;
  justify-content: center;
  gap: 4rem;
}
.products {
  justify-content: space-around;
  max-width: 75%;
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
   
}
</style>
>>>>>>> 4317aee062117822a1b0a0eea02efc1863b1654a
