<template>
  <div>
    <div class="title"> 
    <h2>Choose payment</h2>
    <h2>Price</h2>
    </div>
    <!--<br />-->
    <hr />

    <article>
      <section>

        <label class="container"
          >Instabox
          <p>1-2 days</p>
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>

        <form>
          <div id="name">
            <input type="text" name="name" placeholder="your name" />
          </div>

          <div id="email">
            <input type="text" name="email" placeholder="your email" />
          </div>

          <div id="phoneNumber">
            <input
              type="number"
              name="number"
              placeholder="your phone number"
            />
          </div>

          <div id="adress">
            <input type="text" name="adress" placeholder="your adress" />
          </div>

          <div id="postCode">
            <input type="number" name="postCode" placeholder="your post code" />
          </div>
        </form>

      </section>
      <section class="prices">

          <div id="instabox-price">
            <h2>Free !</h2>
          </div>
          <!-- <br> -->
      </section>
    </article>
    <!-- <br /> -->

    <hr />

    <!-- <br /> -->
    <div class="total">

      <div id="totalPrice">
        <h3>Total:</h3>
        <p>Down payment from only ? $/ month</p>
      </div>
      <!-- <br /> <br /> -->

      <div id="confim-purchase">
        <button>Next - confim-purchase</button>
      </div>

      <div id="back-delivery">
        <button @click="back">Back to payment</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
   methods:{
        back(){
      const path = `/shipping/`;
      if (this.$route.path !== path) this.$router.push(path);
      
    },
   }
};
</script>

<style lang="scss" scoped>

.title{
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
input {
    border: solid 1px black;
    border-radius: 20px;
    width: 300px;
    height: 30px;
    font-size: 10px;
    padding: 12px 20px;
    margin: 8px 0;
  }
  .prices {
      display: flex ;
      flex-direction: column;
      justify-content: space-between;
  }

  #instabox-price{
    font-weight: bold;
    color:red;
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
