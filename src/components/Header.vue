<template>
  <header>
    <nav id="nav">
      <div class="middle">
        <img @click="goToHome" src="../assets/sinus-logo.png" alt="" />
        <div class="links">
          <router-link to="/">Men</router-link>
          <router-link to="/">Women</router-link>
          <router-link to="/skateboards">Skateboards</router-link>
          <router-link to="/accessories">Accessories</router-link>
        </div>
        <div class="search">
          <input
            type="text"
            v-model="searchKeyword"
            @keyup="searchProduct"
            @mouseover="hover = true"
          />
          <ul>
            <li
              v-for="item in searchResult"
              :key="item.id"
              @click="toProduct(item.id)"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              v-show="hover"
            >
              <label class="">{{ item.title }}</label>
              <label>
                <img
                  :src="path + item.imgFile"
                  alt=""
                  width="20px"
                  height="20px"
                  @click="toProduct(item.id)"
                />
              </label>
            </li>
          </ul>
        </div>
        <img src="../assets/icons/search.svg" alt="" />
      </div>
      <div class="right">
        <div class="cart">
          <img
            @click="goToCart"
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
              @click="$router.push('/profile')"
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
  </header>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  data() {
    return {
      searchKeyword: "",
      path: "http://localhost:5000/images/",
      focused: true,
      hover: true,
    };
  },

  methods: {
    toProduct(id) {
      this.$router.push("/product/" + id);
      this.searchKeyword = "";
    },
    searchProduct() {
      if (this.searchKeyword.length) {
        console.log("Keyword is: " + this.searchKeyword);
        return this.$store.dispatch(
          Actions.SEARCH_PRODUCTS,
          this.searchKeyword
        );
      }
      return null;
    },
    goToCart() {
      const path = `/cart/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    goToHome() {
      const path = `/`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    onBlur() {
      this.focused = false;
    },
    onFocus() {
      this.focused = true;
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.totalItemsCount;
    },
    user() {
      return this.$store.state.userModule.user;
    },
    searchResult() {
      if (this.searchKeyword.length > 2) {
        return this.$store.state.productsModule.searchResponse;
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
    max-width: 100%;

    .middle {
      display: flex;
      align-items: center;
      background: $interfaceBlack;
      border-radius: 999px;
      img {
        cursor: pointer;
        margin: 0.5rem;
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
        display: grid;
        align-items: center;
        height: 30px;
        input {
          height: 30px;
          padding-left: 10px;
          font-size: 16px;
          border-radius: 16px;
        }
        ul {
          padding: 0;
          margin: 0;
          position: relative;
          li {
            // border: 0.5px solid $pitchBlack;
            background-color: $pureWhite;
            padding: 5px;
            text-decoration: none;
            font-size: 16px;
            color: $pitchBlack;
            display: block;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          li:hover {
            background-color: $monsterGreen;
            color: $pureWhite;
            transition: all 0.3s ease;
          }
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
