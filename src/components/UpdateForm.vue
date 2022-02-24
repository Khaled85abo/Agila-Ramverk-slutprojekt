<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <h3>Update account</h3>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your name"
        v-model="user.name"
        required
      />
      <label for="email">E-mail</label>
      <input
        type="email"
        id="email"
        placeholder="Your E-mail"
        v-model="user.email"
        required
      />
      <label for="password">Old Password</label>
      <input
        type="password"
        id="password"
        placeholder="Your old password"
        v-model="user.oldPassword"
      />
      <label for="password">New Password</label>
      <input
        type="password"
        id="password"
        placeholder="Your new password"
        v-model="user.password"
      />
      <label for="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm your password"
        v-model="user.confirmPassword"
      />
      <h4>Address</h4>
      <label for="street">Street</label>
      <input
        type="text"
        id="street"
        placeholder="Street"
        v-model="user.address.street"
        required
      />
      <label for="city">City</label>
      <input
        type="text"
        id="city"
        placeholder="City"
        v-model="user.address.city"
        required
      />
      <label for="zip">Zip</label>
      <input
        type="text"
        id="zip"
        placeholder="Zip Code"
        v-model="user.address.zip"
        required
      />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  props: ["inloggedUser"],
  data() {
    return {
      user: {
        name: "",
        oldPassword: "",
        password: "",
        email: "",
        confirmPassword: "",
        address: {
          street: "",
          city: "",
          zip: "",
        },
        localError: null,
      },
    };
  },
  mounted() {
    if (this.inloggedUser) {
      this.user = { ...this.user, ...this.inloggedUser };
    }
  },
  methods: {
    submit() {
      if (this.user.password !== this.user.confirmPassword) {
        this.localError = "passwords don't match";
        this.$emit("error", this.localError);
        return;
      }
      console.log("user form updateForm: ", this.user);
      this.$emit("submitted", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 400px;
  margin: auto;

  form {
    margin: 0 0.5rem;
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
}
</style>
