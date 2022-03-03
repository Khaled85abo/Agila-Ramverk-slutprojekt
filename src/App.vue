<template>
  <div id="app">
    <transition name="toast">
      <SnackBar
        v-if="response"
        :type="response.type"
        :message="response.message"
      />
    </transition>
    <Header />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SnackBar from "./components/SnackBar.vue";
//import Actions from "./store/actions.types";
export default {
  components: { Header, Footer, SnackBar },
  computed: {
    response() {
      return this.$store.state.userModule.response;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
</style>
