<template>
  <NavbarPage />
  <div class="product-detail">
    <div class="product-images">
      <img :src="product.image_url" alt="Product Image" class="product-main-image" />
      <div v-for="image in product.additional_images" :key="image" class="product-image">
        <img :src="image" alt="Additional Image" />
      </div>
    </div>
    <div class="product-info">
      <h2>{{ product.product_name }}</h2>
      <p>Price: R {{ product.price }}</p>
      <p>Stock Quantity: {{ product.stock_quantity }}</p>
      <p>Type: {{ product.product_type }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
  </div>
  <FooterPage />
</template>

<script>
import axios from "axios";
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    NavbarPage,
    FooterPage,
  },
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:3000/products/${this.$route.params.id}`);
      this.product = response.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },
};
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

.product-images {
  flex: 1;
  max-width: 600px;
}

.product-main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.product-info {
  flex: 1;
  max-width: 500px;
  padding-left: 2rem;
}

.product-info h2 {
  margin-bottom: 1rem;
}
</style>
