<template>
    <div>
      <h1>{{ product.product_name }}</h1>
      <img :src="product.imageUrl" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p>Price: ₹{{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        product: null,
      };
    },
    created() {
      // Fetch the product data based on the id prop
      // For demonstration, we'll use a static array
      const products = [
        { id: 220, product_name: 'Cotton Silk Scarf - Blue & Grey', price: 1500, stock_quantity: 100, description: 'A luxurious cotton-silk blend scarf.' },
        { id: 221, product_name: 'Cotton Silk Scarf - Brown', price: 1400, stock_quantity: 0, description: 'Elegant brown cotton-silk scarf.' },
        { id: 222, product_name: 'Cotton Silk Scarf - Blue', price: 1450, stock_quantity: 120, description: 'Soft cotton-silk scarf in blue.' },
        { id: 223, product_name: 'Cotton Silk Scarf - Green', price: 1300, stock_quantity: 80, description: 'Vibrant green cotton-silk scarf.' },
        { id: 224, product_name: 'Cotton Silk Scarf - Red', price: 1350, stock_quantity: 90, description: 'Elegant red cotton-silk scarf.' },
        { id: 225, product_name: 'Cotton Silk Scarf - Black', price: 1200, stock_quantity: 70, description: 'Stylish black cotton-silk scarf.' },
        { id: 226, product_name: 'Cotton Silk Scarf - White', price: 1250, stock_quantity: 110, description: 'Elegant white cotton-silk scarf.' },
        { id: 227, product_name: 'Cotton Silk Scarf - Yellow', price: 1300, stock_quantity: 100, description: 'Bright yellow cotton-silk scarf.' },
        { id: 228, product_name: 'Cotton Silk Scarf - Pink', price: 1350, stock_quantity: 90, description: 'Soft pink cotton-silk scarf.' },
        
      ];
      this.product = products.find((p) => p.id === this.id);
    },
  };
  </script>
  