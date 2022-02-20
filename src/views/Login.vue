<template>
  <div class="wrapper">
    <transition name="toast">
      <Snackbar
        v-if="loginError"
        type="error"
        :message="loginError"
        @resetError="resetError"
      />
      <Snackbar
        v-if="signupError"
        type="error"
        :message="signupError"
        @resetError="resetError"
      />
      <Snackbar
        v-if="localError"
        type="error"
        :message="localError"
        @resetError="resetError"
      />
    </transition>
    <transition name="form" mode="out-in">
      <form v-if="show" @submit.prevent="signup">
        <h3>Create an account</h3>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          v-model="user.name"
        />
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Your E-mail"
          v-model="user.email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Your password"
          v-model="user.password"
        />
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          v-model="user.confirmPassword"
        />
        <input type="submit" />
      </form>
      <form v-else @submit.prevent="login">
        <h3>Login</h3>
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Your E-mail"
          v-model="user.email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Your password"
          v-model="user.password"
        />
        <input type="submit" />
      </form>
    </transition>
    <div class="extra-functions">
      <span>Forgot your password?</span>
      <transition name="extra" mode="out-in">
        <span @click="show = false" v-if="show"
          >Already have an account? Sign in!</span
        >
        <span @click="show = true" v-else>Don't have an account? Sign up!</span>
      </transition>
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
import Snackbar from "../components/SnackBar.vue";
export default {
  components: { Snackbar },
  data() {
    return {
      show: false,
      user: {
        name: "",
        password: "",
        email: "",
        confirmPassword: "",
      },
      localError: null,
    };
  },
  computed: {
    loginError() {
      return this.$store.state.userModule.loginError;
    },
    signupError() {
      return this.$store.state.userModule.signupError;
    },
  },
  methods: {
    resetError() {
      this.localError = null;
      this.$store.dispatch(Actions.RESET_LOGIN_ERROR);
      this.$store.dispatch(Actions.RESET_REGISTER_ERROR);
    },
    login(e) {
      if (this.user.password == "" || this.user.email == "") return;
      console.log("event: ", e);
      console.log(this.user.email, this.user.password);
      this.$store.dispatch(Actions.LOGIN, {
        email: this.user.email,
        password: this.user.password,
      });
    },
    signup() {
      if (
        this.user.name == "" ||
        this.user.password == "" ||
        this.user.email == ""
      )
        return;
      if (this.user.password !== this.user.confirmPassword) {
        this.localError = "passwords don't match";
        return;
      }
      console.log("user to register: ", this.user);
      this.$store.dispatch(Actions.REGISTER_USER, this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 500px;
  margin: auto;
  form {
    margin: 1rem 0.5rem;
    h3 {
      text-align: center;
    }
    input {
      display: block;
      width: 100%;
      padding: 0.3rem;
      margin: 0.3rem 0;
      border-radius: 8px;
    }
    [type="submit"] {
      border-radius: 999px;
    }
  }
  .extra-functions {
    display: flex;
    justify-content: space-between;
    color: $link;
    margin: 1rem 0.5rem;
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
/* .snackbar-enter-active,
.snackbar-enter-active {
  transition: all 1s ease;
}
.snackbar-enter,
.snackbar-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.snackbar-enter-to,
.snackbar-leave {
  opacity: 1;
  transform: translateY(0);
} */

/* .toast-enter-active {
  animation: bounce 0.5s;
} */
@keyframes bounce {
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(-1%);
  }
  70% {
    transform: translateX(1%);
  }
  80% {
    transform: translateX(-1%);
  }
  90% {
    transform: translateX(1%);
  }
  100% {
    transform: translateX(0%);
  }
}
.toast-enter-to,
.toast-leave {
  opacity: 1;
}
.toast-enter,
.toast-leave-to {
  opacity: 0;
  /* transform: translateY(-10%); */
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}

.form-enter-active {
  animation: fade 1s;
}

.form-leave-active {
  animation: fade 1s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.extra-enter-active,
.extra-leave-active {
  transition: all 2s ease;
  position: absolute;
}

.extra-move {
  transition: all 0.5s ease;
}
.extra-enter,
.extra-leave-to {
  opacity: 0;
}

.extra-enter-to,
.extra-leave {
  opacity: 1;
}
</style>
