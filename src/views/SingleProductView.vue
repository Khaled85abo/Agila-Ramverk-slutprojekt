<template>
  <div class="single-product">
    <h1>This is single product view</h1>
    <div class="wrapper">
      <section class="image">
        <img :src="require('@/assets/' + prod.imgFile)" />
      </section>
      <section class="product-info">
        <div class="product-discription">
          <h1>{{ prod.title }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
            quidem repudiandae delectus dolorem. Magni fugiat, laboriosam id
            temporibus, eos aperiam ipsam harum praesentium distinctio iure modi
            velit culpa omnis ut suscipit. Cum facere, maiores nemo deserunt, at
            nisi minus ea sequi consequuntur eligendi esse nulla harum tenetur
            doloribus rem?
          </p>
          <span>Color: Green/Black</span>
          <span>Width: 8 Inches</span>
          <span>Length: 32 Inches</span>
          <h3>{{ prod.price }}</h3>
        </div>
        <div class="add-card">
          <select name="" id="">
            <option value="">Chose Size</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <div>
            <button @click="addToCart">Add to cart</button>
            <span>icon</span>
          </div>
        </div>
        <div class="general-info">
          <h3>Size guide</h3>
          <hr />
          <h3>Shiping Information</h3>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  data() {
    return {
      //imgFile: require("@/assets/skateboard-greta.jpg")
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch(Actions.ADD_PRODUCT, this.prod);
    },
  },
  computed: {
    prod() {
      return this.$store.state.productsModule.allProductsObj[
        this.$route.params.id
      ];
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/_functions.scss";
.single-product {
  @include flexCenter(column, 1440px);
  background-color: $bgBlack;

  .wrapper {
    @include flexCenter(row, 1060px);
    gap: 28px;
    .image {
      @include twoColumnView($pureWhite, row);
    }
    .product-info {
      @include twoColumnView($interfaceBlack, column);
      .product-discription {
        display: flex;
        flex-direction: column;
        height: 308px;
        background-color: $pureWhite;
        border-radius: 16px;
        margin: 5px;
        h1 {
          color: $monsterGreenDark;
          justify-content: center;
        }
      }
      .add-card {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 140px;
        gap: 5px;
        select {
          border-radius: 20px;
          width: 320px;
          height: 40px;
        }
        button {
          text-align: left;
          border-radius: 20px;
          width: 280px;
          height: 40px;
          background-color: $monsterGreenDark;
        }
      }
      .general-info {
        height: 122px;
        background-color: $pureWhite;
      }
    }
  }
}
</style>
