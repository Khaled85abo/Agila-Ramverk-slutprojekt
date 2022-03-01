<template>
  <div>
    <div class="title">
      <h2>Choose Delivery</h2>
      <h2>Price</h2>
    </div>
    <br />
    <hr />

    <article>
      <section>
        <label class="container"
          >Home delivery
          <p>2-3 days or Express within 24h</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <br />
        <label class="container"
          >Instabox
          <p>1-2 days</p>
          <input type="radio" name="radio" checked />
          <span class="checkmark"></span>
        </label>
        <br />
        <label class="container"
          >Post Office (PostNord)
          <p>3-5 days</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </section>

      <section class="prices">
        <div id="home-price">
          <h2>5 $</h2>
        </div>
        <br />

        <div id="instabox-price">
          <h2>Free !</h2>
        </div>
        <br />

        <div id="postNord-price">
          <h2>7 $</h2>
        </div>
        <br />
      </section>
    </article>
    <br />

    <hr />

    <br />
    <div class="total">
      <div class="totalPrice">
        <h3>Total:{{ totalPrice }}</h3>
        <p>Down payment from only ? $/ month</p>
      </div>
      <br /><br />

      <div class="stage">
        <Btn @click="back">Back to cart</Btn>
        <Btn @click="shipping">Next - confim-purchase</Btn>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Btn from "../components/CheckoutBtn.vue";
export default {
  components: { Btn },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/cart");
    },
    shipping() {
      this.$router.push("/shipping");
    },
  },
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

article {
  margin-top: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  section {
    margin-top: 30px;
    margin-right: 30px;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 30px;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .container:hover input ~ .checkmark {
    background-color: rgba(0, 0, 0, 0.65);
  }

  .container input:checked ~ .checkmark {
    background-color: black;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  .prices {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #home-price {
    font-weight: bold;
  }

  #instabox-price {
    font-weight: bold;
    color: red;
  }

  #postNord-price {
    font-weight: bold;
  }
}

hr {
  display: block;
  border-top: 2px solid black;
}

.total {
  margin: 30px;
  display: flex;
  flex-direction: column;

  .totalPrice {
    align-self: flex-end;
  }
  .stage {
    display: flex;
    justify-content: space-between;
  }
}
</style>
