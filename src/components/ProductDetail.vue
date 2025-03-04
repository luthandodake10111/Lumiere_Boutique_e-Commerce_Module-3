<template>
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      
      <div v-if="loading" class="loading">Loading product details...</div>
      <div v-else-if="error" class="error">Failed to load product. Please try again.</div>
      
      <div v-else-if="product && Object.keys(product).length > 0" class="product-detail">
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
    </div>
  </div> 
</template>

<script>
import axios from "axios";

export default {
  props: ["productId", "showModal"],
  data() {
    return {
      product: {},
      loading: true,
      error: false,
    };
  },
  watch: {
    productId: {
      immediate: true,
      handler(newId) {
        if (newId) {
          this.fetchProduct(newId);
        }
      }
    }
  },
  methods: {
    async fetchProduct(id) {
      this.loading = true;
      this.error = false;
      
      try {
        console.log("Fetching product with ID:", id);
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        console.log("Product data:", response.data);
        this.product = response.data;
      } catch (error) {
        console.error("Error fetching product details:", error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  max-width: 700px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: #e0c4a8; /* Soft Champagne Gold */
  color: #4a3f35; /* Elegant Brown */
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.2s;
}

.close-button:hover {
  background: #d4b28c; /* Slightly darker champagne gold */
  transform: scale(1.1);
}

/* Product Details */
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-images {
  max-width: 600px;
}

.product-main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
}

.product-info {
  text-align: center;
}
</style>
