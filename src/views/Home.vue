<template>
  <div class="home">
    This is Home
    <ul>
      <li v-for="pro of products" :key="pro.id" @click="toProduct(pro.id)">
        {{ pro.title }}
      </li>
    </ul>
    <div class="filter">
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
    <p>{{ productsByFilter }}</p>

    <section>
      <div class="hero-products">
        <h3>
          Buy our charity<br />
          bags this Holiday!
        </h3>
        <img
          src="@/assets/icons/socialMedia/twitter.svg"
          alt="Icon"
          width="150px"
          height="100"
        />
        <img
          src="@/assets/icons/socialMedia/twitter.svg"
          alt="Icon"
          width="150px"
          height="100"
        />
        <img
          src="@/assets/icons/socialMedia/twitter.svg"
          alt="Icon"
          width="150px"
          height="100"
        />
      </div>
    </section>

    <br />

    <section class="products-collection">
      <div class="holiday-products">
        <h2>
          This holidays most <br />
          radical boards!
        </h2>
      </div>

      <div id="product1">
        <p>1</p>
        <hr />
      </div>

      <div id="product2">
        <p>1</p>
        <hr />
      </div>

      <div id="product3">
        <p>1</p>
        <hr />
      </div>

      <div id="product4">
        <p>1</p>
        <hr />
      </div>
    </section>

    <br /><br /><br /><br />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    toProduct(prodId) {
      this.$router.push("/product/" + prodId);
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

<style scoped="scss">
.filter {
  display: flex;
}
label {
  margin-right: 20px;
}

.hero-products {
  background-color: gray;
  min-width: 1100px;
  height: 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
h3 {
  transform: rotate(-20deg);
}

.products-collection {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  /*align-items: center;*/
}

.holiday-products {
  background-color: #434343;
  color: rgba(47, 255, 75, 0.52);
  width: 200px;
  height: 230px;
}

#product1,
#product2,
#product3,
#product4 {
  background-color: red;
  border: black solid 1px;
  width: 200px;
  height: 230px;
}
</style>
