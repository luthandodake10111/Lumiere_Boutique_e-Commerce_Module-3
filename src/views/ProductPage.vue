<template>
  <div>
  <NavbarPage />
  <br><br><br>
  <br><br><br>
  <h1>Explore Our Elegant Collection</h1>
  {{ products.product }}

  <ProductCard :products="products" />
  <br><br><br><br>
  <FooterPage />
  <FooterLine />
</div>
</template>

<script>
import axios from "axios";
import NavbarPage from "@/components/NavbarPage.vue";
import ProductCard from "@/components/ProductCard.vue";
import FooterPage from "@/components/FooterPage.vue";
import FooterLine from "@/components/FooterLine.vue";

export default {
  components: {
    NavbarPage,
    ProductCard,
    FooterPage,
    FooterLine
  },
  data() {
    return {
      products: []
    };
  },
  
async mounted() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    
    // Check if response.data contains the products array
    if (response.data.products) {
      this.products = response.data.products; // Extract the array
    } else {
      console.error("Unexpected API response format:", response.data);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
};

</script>

<style scoped>

h1 {
  text-align: center;
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
}
</style>
