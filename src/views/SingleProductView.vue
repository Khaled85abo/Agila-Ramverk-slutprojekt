<template>
  <div class="single-product">
    <h1>This is single product view</h1>
    <div v-if="product" class="wrapper">
      
      <section class="image">
        <!-- $TIPS: Move 'http://localhost:5000/images/' to a en environment variable  -->
        <img :src="'http://localhost:5000/images/' + product.imgFile" />
      </section>
      <section class="product-info">
        <div class="product-discription">
          <h1>{{ product.title }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
            quidem repudiandae delectus dolorem. Magni fugiat, laboriosam id
            temporibus, eos aperiam ipsam harum praesentium distinctio iure modi
            velit culpa omnis ut suscipit. Cum facere, maiores nemo deserunt, at
            nisi minus ea sequi consequuntur eligendi esse nulla harum tenetur
            doloribus rem?
          </p>
          <h3>Color: Green/Black</h3>
          <h3>Width: 8 Inches</h3>
          <h3>Length: 32 Inches</h3>
          <h3>{{ product.price }}€/ {{ product.price }} $/ {{ product.price }} sek</h3>
        </div>
        <div class="add-card">
          <select name="" id="">
            <option value="">Chose Size</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <div class="add-button">
            <button @click="addToCart">Add to cart</button>
            <div class="like">
              <img src="@/assets/icons/heart.svg" alt="Icon" />
            </div>
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
      
    }
  },
  mounted(){
    console.log("single page mounted", this.$route.params.id);
  },
  methods: {
    addToCart() {
     //this.$store.dispatch(Actions.ADD_PRODUCT, this.prod);
      this.$store.dispatch(Actions.ADD_TO_CART, this.product)
    },
  },
  computed: {
    product() {
      return this.$store.state.productsModule.allProductsObj[
        this.$route.params.id
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_functions.scss";
.single-product {
  @include flexCenter(column);
  background-color: $bgBlack;

  .wrapper {
    @include flexCenter(row);
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
        margin: 1rem;
        padding: 1rem;
        h1,
        h3 {
          color: $monsterGreenDark;
          justify-content: center;
        }
      }
      .add-card {
        margin: 1rem;
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
        .add-button {
          width: 320px;
          display: flex;
          flex-direction: row;
        }
        button {
          text-align: left;
          border-radius: 20px;
          width: 280px;
          height: 40px;
          background-color: $monsterGreenDark;
        }
        .like {
          display: flex;
          width: 40px;
          height: 40px;
          background-color: $pureWhite;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }
      }
      .general-info {
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        margin: 1rem;
        height: 122px;
        background-color: $pureWhite;
        justify-content: center;
        color: $monsterGreen;
        padding: 1rem;
      }
    }
  }
}
</style>
