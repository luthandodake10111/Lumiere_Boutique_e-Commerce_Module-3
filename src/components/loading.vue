<template>
    <div>
      <div v-if="loading" class="loading-message">Loading products...</div>
  
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="image-container">
          <img :src="product.imageUrl" alt="Product Image" class="product-image" />
          <div class="overlay">
            <p class="product-price">R {{ product.price }}</p>
          </div>
        </div>
        <h3 class="product-name">{{ product.product_name }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        error: false,
        loading: true, // Adding loading state
      };
    },
    async mounted() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.products = response.data;
      } catch (error) {
        this.error = true;
        console.error("Error fetching products:", error);
      } finally {
        this.loading = false; // Stop loading once done
      }
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  