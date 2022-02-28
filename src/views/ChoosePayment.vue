<template>
  <div class="payment">
    <Overlay :show="overlay">
      <Modal
     
      cancelButtonText="Abort"
      cancelEvent='abort'
      @abort="overlay = false"
      >
        <p> This is over module </p>
      </Modal>
     </Overlay>
    <h2>Choose payment</h2>
    <hr />

    <article>
      <section>
        <label class="container"
          >Credit card
          <input type="radio" name="radio" checked/>
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
            <input type="text" name="name" placeholder="Full name" v-model="cardInfo.fullName" requaird/>
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
            <input type="text" name="cvc" placeholder="CVC" v-model="cardInfo.cvc" requaird/>
          </div>

          <div id="postCode">
            <input type="number" name="postCode" placeholder="Valid Till" v-model="cardInfo.validTill" requaird/>
          </div>
        </form>
      </section>
    </article>

    <hr />
    <div class="total">
      <div id="totalPrice">
        <h3>Total: {{totalPrice}}</h3>
        <p>Down payment from only ? 10 $/ month</p>
      </div>

      <div id="confim-purchase">
        <button @click="confirmPurchase">Next - confim-purchase</button>
      </div>

      <div id="back-delivery">
        <button @click="back">Back to delivery</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Actions from '../store/actions.types'
import Modal from '@/components/Modal.vue'
import Overlay from '@/components/Overlay.vue'
export default {
  components:{
    Modal,
    Overlay
  },
    data(){
        return{
          cardInfo:{
            fullName: '',
            cardNumber:'',
            cvc: '',
            validTill: '',
          },
          overlay: false,

        }
    },
    methods:{
        back(){
      const path = `/shipping/`;
      if (this.$route.path !== path) this.$router.push(path);
      
    },
    confirmPurchase(){
      this.$store.dispatch(Actions.USER_CARD_INFO, 
       {
        fullName: this.cardInfo.fullName,
        cardNumberail: this.cardInfo.cardNumber,
        cvc: this.cardInfo.cvc,
        validTill: this.cardInfo.validTill,
      });
      console.log(this.$store.state.userModule.userCardInfo)
      this.overlay = true
      // const path = `//`;
      // if (this.$route.path !== path) this.$router.push(path);
    },
    },
    computed:{
      userInfo(){
         return this.$store.state.userModule.anonymUser
      },
    totalPrice() {
      
    return this.$store.getters.totalPrice;
    },
    }

}
</script>

<style lang="scss" scoped>
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

  input {
    border: solid 1px black;
    border-radius: 20px;
    width: 300px;
    height: 30px;
    font-size: 10px;
    padding: 12px 20px;
    margin: 8px 0;
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
    background-color: $monsterGreen;
  }
}
</style>
