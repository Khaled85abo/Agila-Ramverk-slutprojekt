<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <h3>Add a Product</h3>
      <label for="image">Image</label>
      <input ref="img" type="file" id="image" required @change="imageAdded" />
      <transition name="warning-transition" mode="out-in">
        <p v-if="imageExist && imageName" class="warning">
          <span>Image already exists</span>
          <span>⚠</span>
        </p>
        <p v-else-if="imageName" class="success">
          <span>Image is Valid</span>
          <span>✔</span>
        </p>
      </transition>
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
      imageName: null,
      localError: null,
    };
  },
  mounted() {
    if (this.inloggedUser) {
      this.user = { ...this.user, ...this.inloggedUser };
    }
  },
  methods: {
    imageAdded() {
      console.log(this.$refs.img.files[0].name);
      this.imageName = this.$refs.img.files[0].name;
      console.log(this.imageExist);
    },
    submit() {
      if (this.imageExist) return;
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
  computed: {
    imageExist() {
      return this.$store.getters.checkImage(this.imageName);
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
    select,
    .warning,
    .success {
      display: block;
      width: 100%;
      padding: 0.3rem;
      margin: 0.6rem 0;
      border-radius: 8px;
      resize: none;
    }
    .warning {
      background: $warning;
      color: $pureWhite;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .success {
      background: $success;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* [type="file"]::after {
      content: "Image already exists ⚠";
      position: absolute;
      right: 0;
      top: -1rem;
      font-size: 1rem;
    } */
    [type="submit"] {
      border-radius: 999px;
    }
  }
}

.warning-transition-enter,
.warning-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.warning-transition-enter-active,
.warning-transition-leave-active {
  transition: all 1s ease;
}
</style>
