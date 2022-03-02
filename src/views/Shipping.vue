<template>
  <div id="adress" class="adress">
    <div class="wrapper">
      <section class="order-info">
        <h1>Shipping</h1>
        <h1>Price</h1>
      </section>
      <section class="main">
        <div class="radio">
          <article>
            <input type="radio" checked />
            <div class="instabox">
              <h3>Instabox</h3>
              <p>1-2 days</p>
            </div>
          </article>
          
          <h2>Free!</h2>
        </div>
       
        <div class="info" v-if="checkUser">
          <label for="">Enter your information</label>
          <input type="text" placeholder="Name" v-model="checkUser.name" />
          <input type="email" placeholder="Email" v-model="checkUser.email" />
          <input type="text" placeholder="12345 6789" />
          <input
            type="text"
            placeholder="Adress"
            v-model="checkUser.address.street"
          />
          <input
            type="text"
            placeholder="Post code"
            v-model="checkUser.address.zip"
          />
        </div>
        <div class="info" v-else>
          <label for="">Enter your information</label>
          <input type="text" placeholder="Name" v-model="user.name" />
          <label v-if="error && !user.name" class= "error">{{errorMessage("name")}}</label>
          <input type="email" placeholder="Email" v-model="user.email" />
          <label v-if="error && !user.email" class= "error">{{errorMessage("eamil")}}</label>
          <input type="text" placeholder="12345 6789" />
          <input
            type="text"
            placeholder="Adress"
            v-model="user.address.street"
          />
          <label v-if="error && !user.address.street" class= "error">{{errorMessage("street")}}</label>
          <input
            type="text"
            placeholder="Post code"
            v-model="user.address.zip"
          />
          <label v-if="error && !user.address.zip" class= "error">{{errorMessage("zip")}}</label>
        </div>
      </section>
      <section class="total-amount">
        <h1>Total: {{ totalPrice }} €</h1>
        <h3>Down Ppyment from only 7€/month</h3>
      </section>

      <section class="stage">
        <button @click="back">Back to delivery</button>
        <button @click="payment">Next - Choose Payment</button>
      </section>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        address: {
          street: "",
          zip: "",
        },
      },
      error: false
    };
  },
  methods: {
    back() {
      this.$router.push("/delivery");
    },
    // anonymUser(){
    //          this.$store.dispatch(Actions.ANONYM_USER, this.user)
    // },
    payment() {
     if(!this.user.name.length || !this.user.email.length ||
     !this.user.address.street.length || !this.user.address.zip.length ){
        this.error = true
        this.errorMessage()
        console.log(this.error);
      }
      else{
      this.$store.dispatch(Actions.ANONYM_USER, {
        name: this.user.name,
        email: this.user.email,
        street: this.user.address.street,
        zip: this.user.address.zip,
      });
      this.$router.push("/payment");
      }
    },
    errorMessage(message){
      return this.error = "you need to put " + message
    },
  },
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    checkUser() {
      return this.$store.state.userModule.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.adress {
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
    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .error{
    color:$warning;
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
    gap: 1rem;
    border-top: 1px solid $pitchBlack;
    .radio {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      article {
        display: flex;
        flex-direction: row;
        gap: 15px;
        input {
          width: 20px;
        }
      }
      .instabox {
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-items: center;
      }
      h2 {
        color: $cartCount;
      }
    }
    label {
      margin-left: 1rem;
    }
    input {
      max-width: 320px;
      height: 40px;
      border-radius: 50px;
      padding: 12px 20px;
    }
  }

  .price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .total-amount {
    border-top: 1px solid $pitchBlack;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
  .stage {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    button {
      width: 240px;
      height: 40px;
      border-radius: 20px;
      background-color: $monsterGreen;
      color: $pureWhite;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
