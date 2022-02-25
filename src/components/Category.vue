<template>
  <div class="category">
      <div class="container">
          <h3>Categories</h3>
        <div>
        <input type="radio" id="skateboard" name="category" value="skateboard" @click="$emit('filterCategory', showCategory = 'skateboard')"
        checked>
        <label for="skateboard">Skateboard</label>
        </div>
        <div>
        <input type="radio" id="hoodie" name="category" value="hoodie"  @click="$emit('filterCategory', showCategory = 'hoodie')">
        <label for="hoodie">Hoodie</label>
        </div>
        <div>
        <div>
         <input type="radio" id="socks" name="category" value="socks" @click="$emit('filterCategory', showCategory = 'socks')">
        <label for="socks">Socks</label>
        </div>
        <div>
         <input type="radio" id="shorts" name="category" value="shorts" @click="$emit('filterCategory', showCategory = 'tshirt')">
        <label for="shorts">T-shirts</label>
        </div>
        <input type="radio" id="cap" name="category" value="cap" @click="$emit('filterCategory', showCategory = 'cap')">
        <label for="cap">Cap</label>
        </div>
        <dir>
            <!-- <label for=""> Pricerange(€) </label> -->

        </dir>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
    showCategory: 'cap'
 }
  },
}
</script>

<style lang="scss" scoped>
.category{
    display: flex;
    max-width: 170px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 0.5px solid black;
  box-shadow: 0px 0px 10px 3px black;
}
.container{
  display: flex;
  flex-direction: column;
  h3{
      margin:00.5rem;
  }
  label {
    font: 1rem 'Fira Sans', sans-serif;
}
  input {
    margin: 0.5rem;
}
}

</style>