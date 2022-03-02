<template>
  <div id="app">
    <Header />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
//import Actions from "./store/actions.types";
export default {
  components: { Header, Footer },
 
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
