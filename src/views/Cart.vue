<template>
  <div>
    <section class="title">
      <h4>Choose payment</h4>
      <br />
      <h4>No.of items</h4>
      <h4>Price</h4>
    </section>
    <hr />

    <section>
      <div id="chosen-product">
        <img
          src="@/assets/skateboard-greta.jpg"
          alt="skateboard-greta"
          width="80px"
          height="180"
        />
        <h4></h4>
        <p></p>
      </div>

      <div id="total-procuts">
        <input type="number" name="number" />
      </div>

      <div id="products-price">
        <p>69 $</p>
        <img
          src="@/assets/icons/Trashbin.svg"
          alt="skateboard-greta"
          width="20px"
          height="20"
        />
      </div>
    </section>

    <hr>
    <div class="total">
      <div id="totalPrice">
        <h3>Total:</h3>
        <p>Down payment from only ? $/ month</p>
      </div>
      <br /><br />

      <div id="confim-purchase">
        <button>Next - confim-purchase</button>
      </div>

      <div id="back-delivery">
        <button>Back to delivery</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
}

hr {
  border: 2px solid black;
  background-color: black;
  margin-top: 20px;
}

section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
}

#chosen-product {
}

#total-procuts {
  width: 5px;
  height: 5px;
  background-color: coral;
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

</style>
