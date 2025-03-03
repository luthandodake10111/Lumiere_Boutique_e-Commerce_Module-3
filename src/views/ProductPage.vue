<template>
  <NavbarPage />
  <br><br><br>
  <br><br><br>

  <h1>Explore Our Elegant Collection</h1>
  <div class="product-page">
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
  <FooterPage />
</template>

<script>
import axios from "axios";
import NavbarPage from "@/components/NavbarPage.vue";
import ProductCard from "@/components/ProductCard.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    NavbarPage,
    ProductCard,
    FooterPage
  },
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/products");
      this.products = response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  justify-content: center;
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(1, 2fr);
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
