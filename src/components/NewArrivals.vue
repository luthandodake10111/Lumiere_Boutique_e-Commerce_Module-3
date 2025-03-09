<template>
    <div class="new-arrivals">
      <h1 class="text-2xl font-bold text-center mb-6">New Arrivals</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="product in newArrivals" :key="product.id" class="p-4 border rounded-lg shadow-lg">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover rounded-md" />
          <h2 class="text-lg font-semibold mt-2">{{ product.name }}</h2>
          <p class="text-gray-600">{{ product.description }}</p>
          <p class="text-xl font-bold mt-2">${{ product.price }}</p>
          <button @click="addToCart(product)" class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['allProducts']),
      newArrivals() {
        return this.allProducts.filter(product => product.isNew);
      }
    },
    methods: {
      ...mapActions(['addCartItem']),
      addToCart(product) {
        this.addCartItem({ product_id: product.id, quantity: 1 });
      }
    }
  };
  </script>
  
  <style scoped>
  .new-arrivals {
    padding: 20px;
  }
  </style>
  