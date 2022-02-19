<template>
  <section class="cart-wrapper">
    <Breadcrumbs path1="cart" />

    <h2>SHOPPING CART</h2>
    <section class="flex-container" v-if="cartList.length > 0">
      <section class="cart-list">
        <SmallProductCard
          v-for="product in cartList"
          :key="product._id"
          :prod="product"
          class="item-summary"
        />
      </section>
      <OrderSummary class="cart-summary" />
    </section>
  </section>
</template>

<script></script>

<style lang="scss">
.shopping-trolly {
  //
}
</style>
