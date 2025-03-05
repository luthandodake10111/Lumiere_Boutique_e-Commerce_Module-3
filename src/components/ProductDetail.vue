<template>
  <NavbarPage />
  <br><br><br><br>
  <div v-if="product" class="product-detail">
    <div class="product-images">
      <img :src="product.image_url" alt="Product Image" class="product-main-image" />
      <div v-for="image in product.additional_images" :key="image" class="product-image">
        <img :src="image" alt="Additional Image" />
      </div>
    </div>
    <div class="product-info">
      <h2> {{ product.product_name }}</h2>
      <p>Price: R {{ product.price }}</p>
      <!-- <p>Stock Quantity: {{ product.stock_quantity }}</p> -->
      <p>Type:  {{ product.product_type }}</p>
      <p>{{ product.description }}</p>
      <p v-if="product.stock_quantity > 0" class="in-stock">In Stock</p>
      <!-- <p v-else class="out-of-stock">Out of Stock</p> -->
      <!--Add to Cart
    </RouterLink>
     <RouterLink :to="{ name: 'CartPage' }" class="add-to-cart-button"> -->
      <router-link to="/CartPage"><button>add to cart</button></router-link>
    </div>
  </div>
<div v-if="loading" class="loading">Loading product details...</div>
<div v-else-if="error" class="error">Failed to load product. Please try again.</div>
</template>

<script>
// import axios from "axios";
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
let array = [{
      "image_id": 36,
      "image_url": [
        "https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/1/silk%20cotton%20blue%20and%20grey.jpg",
      "https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/1/silk%20cotton%20blue%20and%20grey%202.jpg"],
      "is_primary": 1,
      "product_id": 220,
      "product_name": "Cotton Silk Scarf - Blue & Grey",
      "product_type": "Scarf",
      "price": "1500.00",
      "stock_quantity": 100,
      "description": "This beautiful scarf is crafted using a luxurious cotton-silk blend, offering a soft and breathable fabric that drapes gracefully. The perfect accessory to complement your outfits. Ideal for all seasons."
    },]
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
  // async mounted() {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/products/${this.$route.params.product_id.id}`);
  //     this.product = response.data;
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //     this.product = null;
  //   }
  // },
  computed : { 
    product (){
      // console.log(this.$store.state.products?.find(product => product.product_id == 220));
      
      return this.$store.state.products?.find(product => product.product_id == this.$route.params.id)
    }
  }
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
}
</style>
