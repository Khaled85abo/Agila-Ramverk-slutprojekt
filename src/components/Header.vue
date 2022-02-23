<template>
  <header>
    <nav id="nav">
      <div class="left"></div>
      <div class="middle">
        <img @click="$router.push('/')" src="../assets/sinus-logo.png" alt="" />
        <div class="links">
          <router-link to="/">Men</router-link>
          <router-link to="/">Women</router-link>
          <router-link to="/">Skateboards</router-link>
          <router-link to="/">Accessories</router-link>
        </div>
        <div class="search">
          <input type="text" v-model="searchKeyword" />
          <img src="../assets/icons/search.svg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="cart">
          <img
            @click="$router.push('/cart')"
            src="../assets/icons/cart.svg"
            alt=""
            height="20"
          />
          <div>
            <span>{{ cartItems }}</span>
          </div>
        </div>
        <div>
          <div v-if="!user" class="login" @click="$router.push('/login')">
            <p>Log in</p>
          </div>
          <div v-else>
            <img
              @click="redirect"
              src="../assets/icons/profile.svg"
              alt=""
              height="20"
            />
            <img
              @click="$router.push('/favorites')"
              src="../assets/icons/heart.svg"
              alt=""
              height="20"
            />
          </div>
        </div>
      </div>
    </nav>
    <div class="for-test">
      <h1>For test - searchList</h1>
      <ul class="hiddenSearchList">
        <li v-for="item in items" :key="item.id" @click="toProduct(item.id)">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
    };
  },
  methods: {
    toProduct(id) {
      this.$router.push("/product/" + id);
    },
    redirect() {
      console.log("clicked");
      if (this.$store.state.userModule.user.role === "admin") {
        this.$router.push("/admin");
      } else {
        this.$router.push("/profile");
      }
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.ordersModules.cart.length;
    },
    user() {
      return this.$store.state.userModule.user;
    },

    searchProduct(){
      if(this.searchKeyword.length > 2){
        console.log("Keyword is: " + this.searchKeyword)
        //console.log(Actions.GET_PRODUCT, this.searchKeyword)
        return this.$store.dispatch('searchProducts', this.searchKeyword)
      }
        return null
    },

    items() {
      //Behövs bygga om
      //Det ksa inte gå att söka på bara de första 10 resultaten
      //Utan man ska söka igenom ALLA istället
      if (this.searchKeyword.length > 0) {
        return this.$store.state.productsModule.allProductsList.filter((str) =>
          str.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
        );
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $bg;
  padding: 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;
    max-width: 1280px;

    .left {
      width: 100px;
    }
    .middle {
      display: flex;
      align-items: center;
      background: $interfaceBlack;
      border-radius: 9999px;
      padding: 0.2rem 0.2rem;
      img {
        cursor: pointer;
        margin-right: 0.3rem;
      }
      .links {
        margin: 0 5rem 0 2rem;
        a {
          cursor: pointer;
          text-decoration: none;
          margin: 0 1rem;
          color: $pureWhite;
        }
      }
      .search {
        display: flex;
        align-items: center;
        img {
          cursor: pointer;
        }
        input {
          margin: 0 0.3rem;
          border-radius: 999px;
          padding: 0.2rem 0;
          /* height: 25px; */
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      background: $interfaceBlack;
      border-radius: 9999px;
      padding: 0 0.4rem;
      img {
        cursor: pointer;
        margin: 0.4rem;
      }
      .cart {
        position: relative;
        div {
          pointer-events: none;
          background: $monsterGreen;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: grid;
          place-items: center;
          position: absolute;
          top: 0;
          right: 0;
          span {
            font-size: 12px;
            color: $pureWhite;
          }
        }
      }
      .login {
        cursor: pointer;
        color: $pureWhite;
        white-space: nowrap;
        padding: 0 0.5rem;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    /* Behöver kolla detta, jag vill dölja listan, OM det behövs */
    .hiddenSearchList {
      display: none;
    }
    .for-test {
      display: none;
    }
  }
}

@media only screen and (max-width: 700px) {
  header {
    padding: 0.3rem;
    nav {
      flex-direction: column;
      .left {
        display: none;
      }
      .middle {
        width: 100vw;
        justify-content: space-between;
        margin-bottom: 0.4rem;
        .search {
          display: none;
        }
        .links {
          margin: 0;
          a {
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
}
</style>
