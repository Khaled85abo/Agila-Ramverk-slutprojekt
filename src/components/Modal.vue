<template>
  <div class="modal">
      <h2>Thank you for your order</h2>
      <p>We are skasting as fast as vi can to get your order ready!
          we will notify when it has been sent.
      </p>
      <div>
    <button @click="$emit(cancelEvent)"> View Order</button>
    <button @click="$emit('shopeMore')">Back to Shop</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cancelEvent: {
      type: String,
      default: 'cancel'
    }
    
  }
}
</script>

<style lang="scss" scoped>
.modal{
    display:flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    border-radius: 16px;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    background-color: #6CB781;
    p{
        margin: 0 1rem;
    }
    div{
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        button{
            width: 150px;
            height: 35px;
            border-radius: 16px;
            background-color: $complementary2;
            }
}
}

</style>