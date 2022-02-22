<template>
  <div class="wrapper">
    <h1>Your profile</h1>
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

    <div class="menu">
      <div>
        <span @click="getOrders">Order historik</span>
        <span @click="router = 'profile'">Update profile</span>
        <span @click="signout" class="signout">Sign out</span>
      </div>
    </div>
    <div class="transition">
      <transition name="swap" mode="out-in">
        <UpdateForm
          v-if="router === 'profile'"
          :inloggedUser="{ ...user, address: { ...user.address } }"
          @submitted="update"
          @error="setLocalError"
        />
        <div v-else>
          <div class="orders">
            See all your orders history
            <ul>
              <li>Your first order</li>
              <li>Your first order</li>
              <li>Your first order</li>
              <li>Your first order</li>
              <li>Your first order</li>
              <li>Your first order</li>
              <li>Your first order</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
import UpdateForm from "../components/UpdateForm.vue";
import Snackbar from "../components/SnackBar.vue";

export default {
  components: { UpdateForm, Snackbar },
  data() {
    return {
      router: "update",
      localError: null,
      type: "error",
    };
  },
  mounted() {
    if (!this.$store.state.userModule.user) {
      this.$router.push("/login");
    }
  },
  methods: {
    getOrders() {
      this.router = "orders";
      this.$store.dispatch(Actions.GET_ALL_ORDERS);
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
    },
  },
  computed: {
    user() {
      return this.$store.state.userModule.user;
    },
    updateRes() {
      return this.$store.state.userModule.updateRes;
    },
  },
};
</script>

<style lang="scss" scoped>
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
.transition {
  padding: 1rem 0;
  min-height: 640px;
}
.orders {
  max-width: 500px;
  margin: auto;
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
</style>
