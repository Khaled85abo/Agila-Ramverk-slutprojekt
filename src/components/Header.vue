<template>
  <header>
    <nav id="nav">
      <!-- <div class="left"></div> -->
      <div class="middle">
        <img @click="goToHome" src="../assets/sinus-logo.png" alt="" />
        <div class="links">
          <router-link to="/">Men</router-link>
          <router-link to="/">Women</router-link>
          <router-link to="/">Skateboards</router-link>
          <router-link to="/">Accessories</router-link>
        </div>
        <div class="search">
          <input type="text" v-model="searchKeyword" @keyup="searchProduct" />
           <ul>
        <li v-for="item in searchResult" :key="item.id" @click="toProduct(item.id)">
          <label for="">{{ item.title }}</label>
        <lable>
          <img :src="path + item.imgFile" alt="" width="20px" height="20px">
        </lable>
        </li>
      </ul>
      </div>
      <!-- <div>
      <img src="../assets/icons/search.svg" alt="" />
        </div> -->
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
    <!-- <div class="for-test">
      <h1>For test - searchList</h1>
      <h1>Test for the new searchList</h1>
      <ul>
        <li v-for="result in searcheRsult" :key="result.id">
          {{searchResult}}
          <ul>
<<<<<<< HEAD
            <li v-for="res in result" :key="res.id">{{ res.title }}</li>
=======
            <li v-for="res in result" :key="res.id" @click="toProduct(item.id)"> {{ res.title }}</li>
>>>>>>> ce2ebaa19301690195b39491aae1cceee87bcfb5
          </ul>
        </li>
      </ul>
    </div> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: "",
       path: "http://localhost:5000/images/",
    };
  },

  methods: {
    toProduct(id) {
      this.$router.push("/product/" + id);
    },
    redirect() {
      this.$router.push("/profile");
    },
    searchProduct() {
      console.log("Test");
      if (this.searchKeyword.length) {
        console.log("Keyword is: " + this.searchKeyword);
        return this.$store.dispatch("searchProducts", this.searchKeyword);
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
    max-width: 100%;
    
    .middle {
      display: flex;
      align-items: center;
      background: $interfaceBlack;
      border-radius: 16px;
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
        height: 50px;
        margin-right: 1rem;
        input {
          background-image: url('../assets/icons/search.svg');
          background-position: 10px ;
          background-repeat: no-repeat;
          height: 35px;
          padding:  20px  40px;
          font-size: 16px;
          border-radius: 8px;
          margin-top: 1px;
        }
        ul{
          list-style-type: none;
          padding: 0;
          margin: 0;
          li{
              border: 1px solid $pitchBlack;
              margin-top: -1px; /* Prevent double borders */
              background-color: #f6f6f6;
              padding: 5px;
              text-decoration: none;
              font-size: 18px;
              color: $pitchBlack;
              display: block; 
              border-radius: 2px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              
          }
          li:hover{
              background-color: $monsterGreen;
              color:$pureWhite;
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
