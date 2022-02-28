<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <h3>Add a Product</h3>
      <label for="image">Image</label>
      <input ref="img" type="file" id="image" required />
      <label for="title">title</label>
      <input
        type="text"
        id="title"
        placeholder="Product Title"
        v-model="product.title"
        required
      />
      <label for="category">Category</label>

      <select v-model="product.category" required>
        <option value="tshirt">T-shirt</option>
        <option value="hoodie">Hoodie</option>
        <option value="sock">Sock</option>
        <option value="cap">Cap</option>
      </select>
      <label for="price">Price</label>
      <input
        type="number"
        id="price"
        placeholder="Price"
        v-model="product.price"
      />
      <label for="shortDesc">Short Description</label>
      <textarea
        rows="2"
        id="shortDesc"
        placeholder="Provide short description"
        v-model="product.shortDesc"
      />
      <label for="longDesc">Long Description</label>
      <textarea
        rows="4"
        id="longDesc"
        placeholder="Provide long description"
        v-model="product.longDesc"
      />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "new product",
        category: "tshirt",
        price: 500,
        specialEdition: "no",
        shortDesc: "short description",
        longDesc: "this is a long description",
      },
      localError: null,
    };
  },
  mounted() {
    if (this.inloggedUser) {
      this.user = { ...this.user, ...this.inloggedUser };
    }
  },
  methods: {
    submit() {
      console.log(this.$refs.img.files[0]);
      const formData = new FormData();
      formData.append("imgFile", this.$refs.img.files[0]);

      const product = {
        ...this.product,
        imgFile: this.$refs.img.files[0].name,
      };
      //   axios.post("", formData);
      this.$emit("submitted", { product, img: formData });
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
    input,
    textarea,
    select {
      display: block;
      width: 100%;
      padding: 0.3rem;
      margin: 0.3rem 0;
      border-radius: 8px;
      resize: none;
    }
    [type="submit"] {
      border-radius: 999px;
    }
  }
}
</style>
