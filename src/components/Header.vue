<template>
  <header>
    <nav id="nav">
      <img src="" alt="" />
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/profile">Profile</router-link></div>
      <div><router-link to="/about">About</router-link></div>

      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">Search</button>

      <div><router-link to="/cart">shopping trolly</router-link></div>
      <div><router-link to="/Profile">profile </router-link></div>
      <!-- -->
      <div>
        <router-link to="/favorite-products"> favorite products </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  background: $bg;
  padding: 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;
    max-width: 1280px;
    background: $interfaceBlack;
    border-radius: 9999px;
    a {
      color: $pureWhite;
    }
  }
}
</style>
