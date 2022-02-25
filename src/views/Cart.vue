<template>
  <div id="cart">
    <div class="wrapper">
      <section class="cart-upper-section">
        <h4>Product</h4>
        <h4>No. of items</h4>
        <h4>Price</h4>
      </section>
      <hr />

      <main class="cart-main">
        <section class="products">
          <article v-for="(product, index) in products" :key="product.id">
            <!-- products, index -->

            <div class="description">
              <figure>
                <img
                  :src="path + product.imgFile"
                  alt="productImage"
                  height="150px"
                />
              </figure>
              <p>{{ product.title }}</p>
            </div>

            <select
              id="proInfo"
              name="quantity"
              @change="(e) => setCount(e, index)"
              :value="product.qty"
            >
              <option v-for="quantity in items" :key="quantity">
                {{ quantity }}
              </option>
            </select>

            <p>{{ product.price * product.qty }}</p>
            <img
              src="../assets/icons/Trashbin.svg"
              alt="trash-bin"
              @carticleck="removeItem(index)"
            />
          </article>
        </section>
      </main>

      <hr />
      <section class="cart-lower-section">
        <h4>{{ totalPrice }}</h4>

        <button>Back to shop</button>
        <button>Next - Choose delivery</button>
      </section>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  name: "Cart",
  data() {
    return {
      path: "http://localhost:5000/images/",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      quantity: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.ordersModules.cart;
    },
    // totalPrice() {
    //   const sum = this.products.map((product) => Number(product.price));
    //   console.log(typeof sum[0]);
    //   const initialValue = 0;
    //   return sum.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //     initialValue
    //   );
    // },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    setCount(e, index) {
      console.log(e.target.value, index);
      this.$store.dispatch(Actions.UPDATE_QUANTITY, {
        qty: e.target.value,
        index,
      });
    },
    removeItem(index) {
      this.$store.dispatch(Actions.REMOVE_FROM_CART, index);
      // this.products.splice(index, 1);
    },
    changeItemQuantity() {
      console.log(this.quantity);
    },
  },
};
</script>

<style scoped>
.cart-upper-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
}

hr {
  border: 2px solid black;
  background-color: black;
  margin-top: 20px;
}

.products {
  display: flex;
  justify-content: center;
  justify-content: space-around;
}

.description {
}

/*  

#total-procuts {
  width: 5px;
  height: 5px;
}

#products-price {
  display: flex;
  flex-direction: row;
}

.total {
  margin: 30px;
  display: flex;
  flex-direction: column;
}

  #totalPrice {
    align-self: flex-end;
  }

  #confim-purchase {
    align-self: flex-end;
  }

  #back-delivery {
    align-self: flex-start;
  }

  button {
    border-radius: 20px;
    background-color: #009229;
  }
*/
</style>
