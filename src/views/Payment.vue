<template>
  <div class="payment">
    <Overlay :show="overlay">
      <Modal
        cancelButtonText="Abort"
        cancelEvent="abort"
        @abort="overlay = false"
        @shopeMore="shopeMore"
      >
        <p>This is over module</p>
      </Modal>
    </Overlay>
    <div class="wrapper">
    <h2>Choose payment</h2>
    <article>
      <section>
        <label class="container"
          >Credit card
          <input type="radio" name="radio" checked />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Invoice
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Bank transfer
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </section>

      <section class="inputs">
        <form>
          <div id="name">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              v-model="cardInfo.fullName"
              requaird
            />
          </div>

          <div id="phoneNumber">
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              v-model="cardInfo.cardNumber"
              requaird
            />
          </div>

          <div id="adress">
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              v-model="cardInfo.cvc"
              requaird
            />
          </div>

          <div id="postCode">
            <input
              type="number"
              name="postCode"
              placeholder="Valid Till"
              v-model="cardInfo.validTill"
              requaird
            />
          </div>
        </form>
      </section>
    </article>
     <article  class ="price">
      <div class="t-price">
        <h3>Total: {{ totalPrice }}</h3>
        <p>Down payment from only ? 10 $/ month</p>
      </div>
      <div class="button">
        <Btn @click="back">Back to shipping</Btn>
        <Btn @click="confirmPurchase">Next - confim-purchase</Btn>
      </div>
     </article>
  </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
import Modal from "@/components/Modal.vue";
import Overlay from "@/components/Overlay.vue";
import Btn from "../components/CheckoutBtn.vue";
export default {
  components: {
    Modal,
    Overlay,
    Btn,
  },
  data() {
    return {
      cardInfo: {
        fullName: "",
        cardNumber: "",
        cvc: "",
        validTill: "",
      },
      overlay: false,
    };
  },
  methods: {
    shopeMore() {
      const path = `/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    back() {
      const path = `/shipping/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    confirmPurchase() {
      this.$store.dispatch(Actions.USER_CARD_INFO, {
        fullName: this.cardInfo.fullName,
        cardNumberail: this.cardInfo.cardNumber,
        cvc: this.cardInfo.cvc,
        validTill: this.cardInfo.validTill,
      });
      console.log(this.$store.state.userModule.userCardInfo);
      this.overlay = true;
      // const path = `//`;
      // if (this.$route.path !== path) this.$router.push(path);
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.userModule.anonymUser;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
.payment{
  display: flex;
  max-width: 100%;
  justify-content: center;
}
.wrapper{
   width: 80%;
    display: flex;
    flex-direction: column;
    margin: 2rem;
}
article {
  margin-top: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid $pitchBlack;
  
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

  input {
    border: solid 1px $pitchBlack;
    border-radius: 20px;
    width: 300px;
    height: 30px;
    font-size: 10px;
    padding: 12px 20px;
    margin: 8px 0;
  }
}


.price {
  display: flex;
  flex-direction: column;
  border-top: 1px solid $pitchBlack;
  margin: 1rem;
}
.t-price{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5rem;
      margin: 1rem;
}
.button {
  display: flex;
  justify-content: space-between;
  }
</style>
