<template>
  <div>
    <h2>Choose Payment</h2>
    <br />
    <hr />

    <article>
      <section>
        <label class="container"
          >Credit card
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>

        <h5>Enter card information:</h5>

        <div id="name">
          <input type="text" name="name" placeholder="Kayle Skateson" />
        </div>

        <div id="card-number">
          <input type="number" name="number" placeholder="222 222 222 222" />
        </div>

        <div id="mmyy">
          <input type="number" name="number" placeholder="05/25" />
        </div>

        <div id="CVC">
          <input type="number" name="number" placeholder="114" />
        </div>
      </section>

      <br />

      <section class="contact-info">
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
    </article>

    <br />
    <hr />
    <br /><br />

    <div class="total">
      <div id="totalPrice">
        <img src="@/assets/icons/profile.svg" alt="profile" />

        <img src="@/assets/icons/parcel.svg" alt="parcel" />

        <h2>Total: 69 $</h2>
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

<style lang="scss" scoped></style>
