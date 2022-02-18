<template>
  <header>
    <nav id="nav">
      <div><router-link to="/">Home</router-link></div>
      <div>
        <router-link to="/about">About</router-link>
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
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    max-width: 600px;
    background: $interfaceBlack;
    border-radius: 9999px;
    a {
      color: $pureWhite;
    }
  }
}
</style>
