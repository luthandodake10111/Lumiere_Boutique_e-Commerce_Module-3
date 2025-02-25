<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4" v-for="image in images" :key="image.image_id">
        <div class="card" style="width: 18rem;">
          <img :src="image.image_url" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">Product Title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Product Subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [] // will hold the images data
    };
  },
  mounted() {
    this.fetchProductImages(1); // Fetch images for a product (productId = 1)
  },
  methods: {
    async fetchProductImages(productId) {
      try {
        const response = await fetch(`http://localhost:3000/api/product-images/${productId}`);
        const data = await response.json();
        this.images = data; // Populate images with data from API
      } catch (error) {
        console.error('Error fetching product images:', error);
      }
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
