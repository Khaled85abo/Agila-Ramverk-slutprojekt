<template>
  <div id="cart">
    <div class="wrapper">
      <section class="cart-upper-section">
        <h4>Product</h4>
        <h4>No. of items</h4>
        <h4>Price</h4>
      </section>
      <main class="cart-main">
        <article>
          <ul>
            <li v-for="(product, index) in products" :key="product.id">
              <article class="description">
                <figure>
                  <img
                    :src="path + product.imgFile"
                    alt="productImage"
                    height="150px"
                  />
                </figure>
                <p>{{ product.title }}</p>
              </article>
              <select name="quantity"  >
                <option v-for="quantity in items"
                :key="quantity"
                >{{quantity}}</option>
              </select>
              <p>{{ product.price }}</p>
              <img
                src="../assets/icons/Trashbin.svg"
                alt="trash-bin"
                @click="removeItem(index)"
              />
            </li>
          </ul>
        </article>
      </main>
      <section class="cart-lower-section">
        <h4>{{ totalPrice }}</h4>
        <button>Back to shop</button>
        <button>Next - Choose delivery</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      path: 'http://localhost:5001/images/',
      items:[1,2,3,4,5,6,7,8,9,10],
      quantity: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.ordersModules.cart;
    },
    totalPrice() {
      const sum = this.products.map((product) => Number(product.price) );
      console.log(typeof(sum[0]));
      const initialValue = 0;
      return sum.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    },
  },
  methods: {
    removeItem(index) {
      this.products.splice(index, 1);
    },
    changeItemQuantity(){
      console.log(this.quantity);
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 500px;
}
.cart-upper-section {
  display: flex;
  flex-direction: row;
  align-items: space-around;
}
.cart-main {
  display: flex;
  flex-direction: row;
  align-content: space-between;
}

.description {
  display: flex;
  flex-direction: row;
}
</style>
