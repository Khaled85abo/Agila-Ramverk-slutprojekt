<template>
  <div class="delivery">
    <div class="wrapper">
      <section class="header">
      <h1>Delivery</h1>
      <h1>Price</h1>
      </section>
      <section class="main">
        <article class="article">
          <div class="radio-button">
          <input type="radio" name="radio" class="radio" />
          <div>
          <h3> Home delivery</h3>
          <p>2-3 days or Express within 24h</p>
          </div>
         </div>
        <h2>5 $</h2>
        </article>
        <article class="article">
          <div class="radio-button">
            <input type="radio" name="radio" checked  class="radio"/>
            <div>
            <h2> Instabox </h2>
            <p>1-2 days</p>
            </div>
          </div>
         <h2 class="free-delivery">Free !</h2>
        </article>
        <article class="article">
          <div class="radio-button">
           <input type="radio" name="radio" class="radio"/>
           <div>
           <h2> Post Office (PostNord)</h2>
           <p>3-5 days</p>
           </div>
          </div>
        <h2>7 $</h2>
        </article>
          
         
          
      </section>
      <section class="total-price">
        <h3>Total:{{ totalPrice }}</h3>
        <p>Down payment from only ? $/ month</p>
       </section>
      <section class="button">
      <div >
        <Btn @click="back">Back to cart</Btn>
        </div><div>
        <Btn @click="shipping">Next - Shipping</Btn>
      </div>
     
    </section>
    </div>
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
.delivery{
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
} 
.wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem;
  .header, .button{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }  
}
.total-price{
    display: flex;
    flex-direction: column;
    // $FEEDBACK: use 'flex-end' instead of 'end'
    align-items: end;
    align-self: stretch;
  }
  .main{
    display:flex;
    flex-direction: column;
    border-top: 1px solid $pitchBlack;
    border-bottom: 1px solid $pitchBlack;
    width: 100%;
    .article{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .radio-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .radio{
    margin: 1rem;
    width: 20px;
    height: 20px;
  }
  .free-delivery{
    color: $cartCount;
  }
</style>
