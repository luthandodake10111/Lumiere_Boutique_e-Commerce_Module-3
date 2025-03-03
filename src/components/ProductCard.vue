<template>
  <div class="grid-container">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-card"
      @click="goToProductDetail(product.id)"
    >
      <div class="image-container">
        <img
          :src="product.imageUrl"
          alt="Product Image"
          class="product-image"
        />
        <div class="overlay">
          <p class="product-price"> R {{ product.price }}</p>
        </div>
      </div>
      <h3 class="product-name">{{ product.product_name }}</h3>
      <!-- <p class="product-description">{{ product.description }}</p> -->
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  // data() {
  //   return {
  //     products: [],
  //     error: false
  //   };
  // },

  data(){
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/products"); 
      this.products = response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  methods: {
    goToProductDetail(productId) {
      this.$router.push({ name: "product-detail", params: { id: productId } });
    }
  }
};
</script>


<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.product-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover; 
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}

.product-name,
.product-price {
  margin: 0;
  padding: 0.5rem;
  font-size: 1.0rem;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin: 10px 0;
}
</style>


