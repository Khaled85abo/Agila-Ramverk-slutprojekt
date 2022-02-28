<template>
  <div class="wrapper">
    <hr />
    <h1>{{ user.role === "admin" ? "Dashboard" : "Your Profile" }}</h1>
    <hr />
    <Snackbar
      v-if="localError"
      :type="type"
      :message="localError"
      @resetError="resetError"
    />
    <Snackbar
      v-if="updateRes"
      :type="updateRes.status"
      :message="updateRes.message"
      @resetError="resetResponse"
    />
    <Snackbar
      v-if="addProductError"
      type="error"
      :message="addProductError"
      @resetError="resetResponse"
    />
    <Snackbar
      v-if="addProductSuccess"
      type="success"
      :message="addProductSuccess"
      @resetError="resetResponse"
    />
    <Snackbar
      v-if="updateStatusRes"
      :type="updateStatusRes.type"
      :message="updateStatusRes.message"
      @resetError="resetResponse"
    />

    <div class="menu">
      <div>
        <span @click="router = 'orders'">Order historik</span>
        <span @click="router = 'update'">Update profile</span>
        <span @click="addProductRouter" v-if="user.role === 'admin'"
          >Add Product</span
        >

        <span @click="signout" class="signout">Sign out</span>
      </div>
    </div>
    <div class="orders-form">
      <transition name="swap" mode="out-in">
        <UpdateForm
          v-if="router === 'update'"
          :inloggedUser="{ ...user, address: { ...user.address } }"
          @submitted="update"
          @error="setLocalError"
        />
        <AddProduct v-else-if="router === 'add'" @submitted="addProduct" />
        <div class="orders" v-else>
          <h2>
            {{ orders.length > 0 ? "Orders" : "No orders" }}
          </h2>
          <transition-group
            class="orders-wrapper"
            appear
            tag="div"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
          >
            <article
              class="order-article"
              v-for="(order, index) in orders"
              :key="order.id"
              :data-index="index"
            >
              <!-- {{ order.createdAt.split("T")[0] }} -->

              <table>
                <tr>
                  <th>Ordered:</th>
                  <td>
                    <strong> {{ date(order.createdAt) }}</strong>
                  </td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td
                    @change="(e) => updateStatus(e, order.id)"
                    :value="order.id"
                    v-html="status(order.status)"
                  ></td>
                </tr>
                <tr>
                  <th rowspan="3">Shipped to:</th>
                  <td>
                    City: <strong>{{ order.shippingCity }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    Street: <strong>{{ order.shippingStreet }}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    Zip: <strong>{{ order.shippingZip }}</strong>
                  </td>
                </tr>
              </table>

              <h4>Items:</h4>
              <div class="products">
                <article
                  class="product-article"
                  v-for="item in order.items"
                  :key="item.id"
                  @click="$router.push('/product/' + item.ProductId)"
                >
                  <img
                    :src="
                      'http://localhost:5000/images/' + item.product.imgFile
                    "
                    height="50"
                    alt=""
                  />
                  <span>{{ item.amount }} x {{ item.price }} kr</span>
                </article>
              </div>
            </article>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
import UpdateForm from "../components/UpdateUserInfoForm.vue";
import Snackbar from "../components/SnackBar.vue";
import AddProduct from "../components/AddProduct.vue";
import gsap from "gsap";
export default {
  components: { UpdateForm, Snackbar, AddProduct },
  data() {
    return {
      router: "orders",
      localError: null,
      type: "error",
    };
  },
  mounted() {
    if (!this.$store.state.userModule.user) {
      this.$router.push("/");
    }
  },
  methods: {
    date(date) {
      const [fullDate] = date.split("T");
      let [year, month, day] = fullDate.split("-");
      month = month[0] == 0 ? month[1] : month;
      const months = {
        1: "January",
        2: "February",
        3: "Mars",
        4: "April",
        5: "Mai",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      };

      return `${day}-${months[month]}-${year}`;
    },
    onBeforeEnter(el) {
      (el.style.opacity = 0), (el.style.transform = "translateY(50px)");
    },
    onEnter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
    update(user) {
      const newUser = {
        name: user.name,
        password: user.password,
        email: user.email,
        address: user.address,
      };
      this.$store.dispatch(Actions.UPDATE_USER, newUser);
    },
    updateStatus(e, orderId) {
      this.$store.dispatch(Actions.UPDATE_STATUS, {
        status: e.target.value,
        orderId,
      });
    },
    addProductRouter() {
      this.router = "add";
      if (this.allImages.length === 0) {
        this.$store.dispatch(Actions.GET_ALL_IMAGES);
      }
    },
    addProduct(data) {
      this.$store.dispatch(Actions.UPLOAD_IMAGE, data);
    },
    resetError() {
      this.localError = null;
      this.type = "error";
    },
    setLocalError(error) {
      this.localError = error;
    },
    signout() {
      this.$store.dispatch(Actions.SIGN_OUT);
    },
    resetResponse() {
      this.$store.dispatch(Actions.RESET_RESPONSE);
      this.$store.dispatch(Actions.RESET_ADD_PRODUCT_ERROR);
      this.$store.dispatch(Actions.RESET_ADD_PRODUCT_SUCCESS);
      this.$store.dispatch(Actions.RESET_UPDATE_STATUS_RESPONSE);
    },
    status(status) {
      console.log(status);
      if (this.user.role === "customer") {
        switch (status) {
          case "inProcess":
            return `<strong>In Process</strong>`;
          case "canceled":
            return `<strong>Canceled</strong>`;
          default:
            return `<strong>Shipped</strong>`;
        }
      } else {
        return `<select class="select" :value=${status} >
         <option value="inProcess"><strong>In Process</strong></option>
          <option value="shipped"><strong>Shipped</strong></option>
           <option value="canceled"><strong>Canceled</strong></option>
         </select>`;
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.userModule.user;
    },
    updateRes() {
      return this.$store.state.userModule.updateRes;
    },
    orders() {
      console.log("orders inside profile", this.$store.getters.allOrders);
      return this.$store.getters.allOrders;
    },
    addProductError() {
      return this.$store.state.productsModule.addProductError;
    },
    addProductSuccess() {
      return this.$store.state.productsModule.addProductSuccess;
    },
    allImages() {
      return this.$store.state.productsModule.allImages;
    },
    updateStatusRes() {
      return this.$store.state.ordersModules.updateStatusResponse;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  h1 {
    padding: 1rem;
    background: $bg;
    text-align: center;
    color: $pureWhite;
  }
  hr:last-of-type {
    background: $bg;
    border: 2px solid $monsterGreen;
    border-radius: 999px;
    margin: 0 0.3rem;
    padding: 0.3rem;
  }

  .menu {
    background: $bg;
    padding: 1rem;
    div {
      max-width: 500px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      span {
        display: inline-block;
        background: $monsterGreen;
        padding: 1rem;
        border-radius: 8px;
      }
      .signout {
        background: $cartCount;
        color: $pureWhite;
      }
    }
  }
  .orders-form {
    padding: 1rem 0.5rem;
    min-height: 640px;

    .orders {
      max-width: 1000px;
      margin: auto;
      h2 {
        text-align: center;
      }

      .orders-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .order-article {
          padding: 0.5rem;
          width: 300px;
          min-height: 200px;
          box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.2);
          margin: 1rem;
          border-radius: 8px;
          table {
            border-collapse: collapse;
            width: 100%;
            text-align: left;
          }

          td,
          th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }

          .products {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .product-article {
              border-radius: 8px;
              min-width: 100px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0.4rem 0;
              margin: 0.1rem;
              box-shadow: 1px 3px 5px 2px rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
}

.swap-enter {
  opacity: 0;
  transform: translateX(-20px);
}
.swap-enter-active,
.swap-leave-active {
  transition: all 0.5s ease;
}

.swap-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.orders-enter {
  opacity: 0;
  transform: translateY(10px);
}
.orders-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.orders-enter-active,
.orders-leave-active {
  transition: all 1s ease;
}
</style>
