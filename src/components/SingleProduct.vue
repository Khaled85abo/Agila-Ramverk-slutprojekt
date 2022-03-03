<template>
  <article>
    <figure @click="$router.push('/product/' + product.id)">
      <img :src="path + product.imgFile" alt="" height="150px" />
    </figure>
    <hr />
    <div class="title-rating">
      <h4>{{ product.title }}</h4>
      <div>
        <span>4.6</span>
        <span>/5</span>
        <img src="../assets/icons/star.svg" alt="" />
      </div>
    </div>
    <h5>69$</h5>
    <button @click="$emit('addToCart', product)">Add to Cart</button>
  </article>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      path: "http://localhost:5000/images/",
    };
    
  },
};
</script>

<style lang="scss" scoped>
article {
  /* height: 230px; */
  width: 159px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 0.5px solid black;
  box-shadow: 0px 0px 10px 3px black;
  figure {
    text-align: center;
  }
  hr {
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 2px 0 0 0;
    border-radius: 20px;
  }
  hr:before {
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
  .title-rating {
    display: flex;
    justify-content: space-between;
    margin: -0.5rem 0 0.5rem 0;
    div {
      white-space: nowrap;
      img {
        margin-left: 0.2rem;
      }
    }
  }
  button {
    align-self: flex-end;
    height: 30px;
    width: 100px;
    border-radius: 999px;
    background: $monsterGreen;
    color: $pureWhite;
    border: 3px solid $monsterGreenDark;
  }
}
</style>
