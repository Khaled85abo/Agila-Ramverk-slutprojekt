<template>
  <div id="cart" class="cart">
    <div class="wrapper">
      <section class="order-info">
        <h1>Product</h1>
        <h1>No. of items</h1>
        <h1>Price</h1>
      </section>
      <hr />
      <section class="main">
        <article
          class="article"
          v-for="(product, index) in products"
          :key="product.id"
        >
          <div class="product-info">
            <figure>
              <img
                :src="path + product.imgFile"
                alt="productImage"
                height="150px"
                max-width="150px"
              />
            </figure>
            <div>
              <h2>{{ product.title }}</h2>
              <p>Colour: Green/Black</p>
              <p>Width: 8 Inches</p>
              <p>Length: 32 Inches</p>
            </div>
          </div>
          <div id="proInfo">
            <select
              @change="(e) => setCount(e, index)"
              name="quantity"
              :value="product.qty"
            >
              <option v-for="quantity in items" :key="quantity">
                {{ quantity }}
              </option>
            </select>
          </div>
          <div class="price">
            <h1>{{ product.price * product.qty }} €</h1>
            <img
              src="../assets/icons/Trashbin.svg"
              alt="trash-bin"
              @click="removeItem(index)"
            />
          </div>
        </article>
      </section>
      <p v-if="error" class="error">
        {{ error }}
      </p>
      <section class="total-amount">
        <h1>Total: {{ totalPrice }} €</h1>
        <h3>Down Payment from only 7€/month</h3>
      </section>

      <section class="stage">
        <Btn @click="back">Back to shop</Btn>
        <Btn @click="goToDelivery"> Next - Choose delivery </Btn>
      </section>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
import Btn from "../components/CheckoutBtn.vue";
export default {
  components: { Btn },
  name: "Cart",
  data() {
    return {
      path: "http://localhost:5000/images/",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      quantity: "",
      error: "",
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
    goToDelivery() {
      if (this.totalPrice) {
        const path = `/delivery/`;
        if (this.$route.path !== path) this.$router.push(path);
      } else {
        return (this.error =
          "Please select atleast one product to go to checkout");
      }
    },
    back() {
      const path = `/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    removeItem(index) {
      console.log(index);
      this.$store.dispatch(Actions.REMOVE_FROM_CART, index);
      // this.products.splice(index, 1);
    },
    changeItemQuantity() {
      console.log(this.quantity);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem;
  }
  .error {
    color: $warning;
  }
  .order-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: bold;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid $pitchBlack;
    align-items: center;
    .product-info {
      display: flex;
      flex-direction: row;
      gap: 10px;
      h2 {
        margin-top: 00.5rem;
        color: $monsterGreen;
      }
      p {
        margin-top: 00.5rem;
        font-weight: bold;
      }
    }
  }
  .article {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid $pitchBlack;
    align-items: center;
    select {
      width: 70px;
      height: 45px;
      border-radius: 16px;
      border: 1px solid $pitchBlack;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .total-amount {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
  .stage {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
