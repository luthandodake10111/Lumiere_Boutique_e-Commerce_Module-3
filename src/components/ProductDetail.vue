<template>
  <NavbarPage />
  <br><br><br><br><br>
  <div v-if="loading" class="loading">Loading product details...</div>
  <div v-else-if="error" class="error">
    <p>Failed to load product. Please try again.</p>
    <button @click="retryLoading" class="retry-button">Retry</button>
  </div>
  <div v-else-if="product" class="product-detail">
    <!-- Bootstrap Carousel -->
    <div class="product-images">
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(image, index) in productImages" :key="index" :class="['carousel-item', { active: index === 0 }]">
            <img :src="image" :alt="`Product Image ${index + 1}`" class="d-block w-100 product-main-image" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Product Info -->
    <div class="product-info">
      <h2>{{ product.product_name }}</h2>
      <p>Price: R {{ product.price }}</p>
      <p>Type: {{ product.product_type }}</p>
      <p>{{ product.description }}</p>
      <p v-if="product.stock_quantity > 0" class="in-stock">In Stock</p>
      <p v-else class="out-of-stock">Out of Stock</p>
      <br><br>
      <!-- Quantity Control -->
      <div class="quantity-control">
        <button class="quantity-btn" @click="decreaseQuantity(product)">-</button>
        <span>{{ product.quantity }}</span>
        <button class="quantity-btn" @click="increaseQuantity(product)">+</button>
      </div>
      <button class="add-btn" @click="addItemToCart(product)">Add to Cart</button>
      <RouterLink :to="{ name: 'CartPage' }">
        <button class="nav-btn">View Cart</button>
      </RouterLink>
    </div>
  </div>
  <div v-else class="error">
    <p>Product not found.</p>
  </div>
  <FooterPage />
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    NavbarPage,
    FooterPage,
  },
  data() {
    return {
      product: null,
      loading: false,
      error: false,
      quantity: 1,
    };
  },
  computed: {
    productImages() {
      if (!this.product) return [];

      // Get all images matching the current product_id
      const images = this.$store.state.products
        .filter(p => p.product_id === this.product.product_id)
        .map(p => p.image_url)
        .slice(0, 3); // Limit to only 3 images

      return images;
    }
  },
  async created() {
    await this.loadProduct();
  },
  methods: {
    async loadProduct() {
      this.loading = true;
      this.error = false;
      try {
        const productId = this.$route.params.id;
        const product = this.$store.state.products?.find(
          (p) => p.product_id == productId
        );
        if (product) {
          this.product = product;
        } else {
          this.error = true;
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    retryLoading() {
      this.loadProduct();
    },
    increaseQuantity(product) {
      product.quantity += 1;
    },
    decreaseQuantity(product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    addItemToCart(product) {
      const item = this.$store.state.cart.find((item) => item.product.id === product.id);
      if (item) {
        item.quantity += product.quantity;
      } else {
        this.$store.commit('addToCart', { product: { ...product }, quantity: product.quantity });
      }
      product.quantity = 1;
    },
  },
};
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.product-images {
  flex: 1;
  max-width: 600px;
  min-width: 300px; /* Ensure it doesn't get too small */
  height: auto; /* Remove fixed height */
}

.carousel {
  width: 100%;
  height: auto; /* Make height responsive */
}

.carousel-inner {
  height: 100%;
}

.product-main-image {
  width: 100%;
  height: auto; /* Make height responsive */
  object-fit: contain; /* Ensure the image fits within the container */
}

.product-info {
  flex: 1;
  max-width: 500px;
  padding-left: 2rem;
  margin-top: 2rem; /* Add margin for spacing on smaller screens */
}

.product-info h2 {
  margin-bottom: 1rem;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
}

.error {
  padding-top: 25%;
  padding-bottom: 25%;
  text-align: center;
  font-size: 1.5rem;
  color: #8B7969;
}

.retry-button {
  background-color: #000;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.retry-button:hover {
  background-color: #D4AF37;
}

.add-to-cart-button {
  background-color: black;
  color: whitesmoke;
  padding: 10px 50px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.add-to-cart-button:hover {
  background-color: #D4AF37;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.quantity-btn {
  background: #8B7969;
  color: white;
  border: none;
  padding: 5px 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
}

.quantity-btn:hover {
  background: #6E5C4F;
}

.add-btn, .remove-btn {
  background: #A48F77;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 25px;
  margin-top: 10px;
  transition: background 0.3s;
}

.add-btn:hover, .remove-btn:hover {
  background: #8B7969;
}

.cart-total {
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
}

.empty-cart {
  color: #999;
  font-style: italic;
  margin-top: 20px;
}

.nav-btn {
  background: #8B7969;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 30px;
  transition: background 0.3s;
  margin-top: 10px;
}

.nav-btn:hover {
  background: #6E5C4F;
}
</style>