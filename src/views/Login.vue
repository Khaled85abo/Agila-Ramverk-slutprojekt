<template>
  <div class="wrapper">
    <transition name="form" mode="out-in">
      <Signup v-if="show" @submitted="signup" />
      <form v-else @submit.prevent="login">
        <h3>Login</h3>
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="Your E-mail"
          v-model="user.email"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Your password"
          v-model="user.password"
          required
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
import Signup from "../components/SignupForm.vue";
export default {
  components: { Signup },
  data() {
    return {
      show: false,
      user: {
        name: "khaled",
        password: "password",
        email: "admin@example.com",
        confirmPassword: "password",
        address: {
          street: "",
          city: "",
          zip: "",
        },
      },
    };
  },

  methods: {
    login() {
      this.$store.dispatch(Actions.LOGIN, {
        email: this.user.email,
        password: this.user.password,
      });
    },

    signup(user) {
      // if (
      //   this.user.name == "" ||
      //   this.user.password == "" ||
      //   this.user.email == ""
      // )
      //   return;

      this.$store.dispatch(Actions.REGISTER_USER, user);
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
    h4 {
      margin: 0.5rem 0;
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

.form-enter-active {
  transition: all 1s ease;
}
.form-enter {
  opacity: 0;
  transform: translateY(10px);
}

.form-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.form-leave-active {
  transition: all 1s ease;
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
