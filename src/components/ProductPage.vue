<template>
  <div class="gallery">
    <div class="product" v-for="product in products" :key="product.id">
      <img src="product.image" alt="product.name">
      <h2>{{product.name}}</h2>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      products: [
        {
        id : 1,
        name : 'Product 1',
        description : 'This is Product 1',
        image : ''
        },
      ]
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  gap: 20px;
}
.product {
  text-align: center;
}
.image-container img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}
</style>
