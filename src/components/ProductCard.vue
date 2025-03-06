<template>
  <!-- Product Cards -->
  <div class="product-page">
    <div class="product-list">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
        @click="goToProductDetail(product.product_id)"
      >
        <div class="product-image" :style="{ backgroundImage: 'url(' + product.image_url + ')' }">
          <div class="product-info">
            <p class="product-name">{{ product.product_name }}</p>
            <p class="product-price">R {{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  
  methods: {
    goToProductDetail(productId) {
      console.log(productId);
      
      this.$router.push({ name: 'productDetail', params: { id: productId } });
    }
  }
};
</script>

<style scoped>
  .card {
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
  }
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  justify-content: center;
}
.product-card {
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: whitesmoke;
}

.product-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* padding: 15px; */
}
.product-image:hover {
  transform: scale(1.05);
}
.product-info {
  color: whitesmoke;
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  left: 15px;
  background-color: rgba(0, 0, 0, 0.6); 
  padding: 10px;
  border-radius: 4px;
}

.product-name {
  margin: 0;
}

.product-price {
  margin-top: 5px;
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
