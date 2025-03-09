<template>
  <div>
    <NavbarPage />
    <br><br><br><br>
    
    <div v-if="product" class="product-detail">
      <!-- Back Arrow Button -->
      <router-link to="/ProductPage" class="back-arrow-link">
        <span class="back-arrow">&#8592;</span>
      </router-link>

      <div class="product-images">
        <img :src="product.image_url" alt="Product Image" class="product-main-image" />
        <div v-for="image in product.additional_images" :key="image" class="product-image">
          <img :src="image" alt="Additional Image" />
        </div>
      </div>

      <div class="product-info">
        <h2>{{ product.product_name }}</h2>
        <p>Price: R {{ product.price }}</p>
        <p>Type: {{ product.product_type }}</p>
        <p>{{ product.description }}</p>
        <p v-if="product.stock_quantity > 0" class="in-stock">In Stock</p>

        <button 
          @click="addToCart(product.product_id, product.price, 1, product.image_url)" 
          :disabled="product.stock_quantity === 0" 
          class="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>

    <div v-if="loading" class="loading">Loading product details...</div>
    <div v-else-if="error" class="error">Failed to load product. Please try again.</div>

    <!-- POPUP MODAL -->
    <div v-if="modalVisible" class="modal-overlay">
      <div class="modal">
        <h2>Please Log In</h2>
        <p>You need to log in to add items to your cart.</p>
        <button @click="modalVisible = false" class="close-modal">Close</button>
        <button @click="redirectToLogin" class="login-button">Go to Login</button>
      </div>
    </div>
  </div>
  <FooterLine />
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterLine from "@/components/FooterLine.vue";
import axios from "axios";

export default {
  components: {
    NavbarPage,
    FooterLine,
  },
  data() {
    return {
      product: {},
      loading: false,
      error: null,
      modalVisible: false, // Controls the modal visibility
    };
  },
  computed: {
    product() {
      return (
        this.$store.state.products?.find(
          (product) => product.product_id == this.$route.params.id
        ) || {}
      );
    },
    cartItemCount() {
      return this.$store.state.cartItemCount;
    },
  },
  methods: {
    async fetchProductDetails() {
      this.loading = true;
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${this.$route.params.id}`
        );
        this.product = response.data;
        this.loading = false;
      } catch (error) {
        this.error = "Failed to load product.";
        this.loading = false;
      }
    },
    addToCart(product_id, price, quantity, image_url) {
      const user = this.$store.state.user; // Get the user object

      if (!this.$store.state.isLoggedIn || !user) {
        this.modalVisible = true; // Show the modal instead of alert
        return;
      }

      const user_id = user.user_id; // Now it's safe to access user_id
      this.$store.dispatch("addCartItem", {
        user_id,
        product_id,
        price,
        quantity,
        image_url,
      });
    },
    redirectToLogin() {
      this.modalVisible = false;
      this.$router.push("/login");
    },
  },
  mounted() {
    this.fetchProductDetails();
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

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
}

.add-to-cart-button {
  background: #000;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #D4AF37;
}

.add-to-cart-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* MODAL STYLES */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-bottom: 1rem;
}

.close-modal, .login-button {
  background: #000;
  color: white;
  padding: 10px 15px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.login-button {
  background: #D4AF37;
}

.close-modal:hover {
  background: #444;
}

.login-button:hover {
  background: #B8860B;
}

/* Back Arrow Style */
.back-arrow-link {
  display: inline-block;
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
}

.back-arrow {
  display: inline-block;
  margin-right: 10px;
  font-size: 1.5rem;
}
</style>
