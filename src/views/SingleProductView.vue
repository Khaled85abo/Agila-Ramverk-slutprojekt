<template>
  <div>
    <h1>This is single product view</h1>
    {{ prod }}
  </div>
</template>

<script>
export default {
  computed: {
    prod() {
      return this.$store.state.productsModule.allProductsList.find(
        (prod) => prod.id === Number(this.$route.params.id)
      );
  }
}
}
</script>

<style></style>
