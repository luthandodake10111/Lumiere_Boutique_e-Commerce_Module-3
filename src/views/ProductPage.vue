<template>
   <NavbarPage />
  <div class="gallery-container">
    <h2 class="gallery-title">Luxury Silk Scarves Collection</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="image-container">
          <img :src="product.image" :alt="product.name" class="product-image">
        </div>
        <h3>{{ product.name }}</h3>
        <p class="price">${{ product.price }}</p>
        <button class="btn">Add to Cart</button>
      </div>
    </div>
  </div>
<!-- <FooterPage /> -->
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    NavbarPage,
    FooterPage
  },

  data() {
    return {
      products: []
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      this.products = response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
};
</script>

<style scoped>
/* Gallery Layout */
.gallery-container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}

.gallery-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

/* Product Card */
.product-card {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(44, 62, 80, 0.3);
  transition: transform 0.3s ease-in-out;
}

.product-card:hover {
  transform: scale(1.05);
}

/* Image Rotation on Hover */
.image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.product-image {
  width: 100%;
  height: auto;
  transition: transform 0.5s ease-in-out;
}

.product-card:hover .product-image {
  transform: rotateY(180deg);
}

/* Price & Button */
.price {
  font-size: 1.2rem;
  color: #D4AF37;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #D4AF37;
}
</style>
