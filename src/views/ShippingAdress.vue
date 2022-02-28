<template>
   <div id="adress" class="adress">
    <div class="wrapper">
      <section class="order-info">
        <h1>Delivery</h1>
        <h1>Price</h1>
      </section>
      <hr />
      <section class="main">
          <div class="radio">
          <div class="instabox"> <input type="radio">
          <h3>Instabox</h3>
          </div>
          <h2>Free!</h2>
          </div>
          <label for="">Enter your information</label>
          <input type="text" placeholder="Name">
          <input type="email" placeholder="Email">
          <input type="text" placeholder="phone">
          <input type="text" placeholder="Adress">
          <input type="text" placeholder="Post code">
      </section>
      <hr />
      <section class="total-amount">
        <h1>Total: {{ totalPrice }} €</h1>
        <h3>Down Ppyment from only 7€/month</h3>
      </section>
      
      <section class ="stage">
        <button @click ="back">Back to delivery</button>
        <button @click="payment">Next - Choose Payment</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        back(){
      const path = `/delivery/`;
      if (this.$route.path !== path) this.$router.push(path);
      
    },
    payment(){
      const path = `/payment/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    }

}
</script>

<style  lang="scss" scoped>

.adress{
  display: flex;
  max-width: 100%;
    justify-content: center;
    align-items: center;
  .wrapper{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem;
  }
  .order-info{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: bold;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .main{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    border-top: 1px solid $pitchBlack;
      .radio{
          margin-top: 1rem;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        .instabox{
            display:flex;
            gap: 5px;
            flex-direction: row;
            justify-items: center;
        }
        h2{
            color:$cartCount;
        }
    }
    label{
        margin-left: 1rem;
    }
    input{
        max-width: 320px;
        height:40px;
        border-radius: 50px;
        ::placeholder{
            margin-right: 1rem;
        }
            }
  }
  .article{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid $pitchBlack;
    align-items: center;
    select{
      width: 100px;
      height: 48px;
      border-radius: 16px;
      border: 1px solid $pitchBlack;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .price{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .total-amount{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
  .stage{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    button{
      width: 240px;
      height: 40px;
      border-radius: 20px;
      background-color: $monsterGreen;
      color:$pureWhite;
      font-size: 16px;
      font-weight: bold;
    }
    
  }
  }
   

</style>
