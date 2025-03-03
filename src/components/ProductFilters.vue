<template>
    <div class="product-filter">
      <!-- Filter Section -->
      <div class="filter-container">
        <h2 class="filter-title">Filter Products</h2>
        <div class="filter-options">
          <label for="availability">
            <input
              type="checkbox"
              id="availability"
              v-model="filters.inStock"
            />
            Only show products in stock
          </label>
  
          <label for="price">
            Price Range:
            <input
              type="number"
              v-model="filters.minPrice"
              placeholder="Min Price"
              class="price-input"
            />
            -
            <input
              type="number"
              v-model="filters.maxPrice"
              placeholder="Max Price"
              class="price-input"
            />
          </label>
        </div>
      </div>
  
      <!-- Filtered Products -->
      <div class="filtered-products">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        // Filter settings
        filters: {
          inStock: false,
          minPrice: null,
          maxPrice: null
        },
        // Sample product data
        products: [
          { id: 220, product_name: 'Cotton Silk Scarf - Blue & Grey', price: 1500, stock_quantity: 100, description: 'A luxurious cotton-silk blend scarf.' },
          { id: 221, product_name: 'Cotton Silk Scarf - Brown', price: 1400, stock_quantity: 0, description: 'Elegant brown cotton-silk scarf.' },
          { id: 222, product_name: 'Cotton Silk Scarf - Blue', price: 1450, stock_quantity: 120, description: 'Soft cotton-silk scarf in blue.' },
          // Add more products as needed
        ]
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => {
          // Filter by availability
          if (this.filters.inStock && product.stock_quantity <= 0) {
            return false;
          }
  
          // Filter by price range
          if (this.filters.minPrice && product.price < this.filters.minPrice) {
            return false;
          }
  
          if (this.filters.maxPrice && product.price > this.filters.maxPrice) {
            return false;
          }
  
          return true;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Main Product Filter Layout */
  .product-filter {
    padding: 20px;
    margin-top: 100px;
  }
  
  /* Filter Section */
  .filter-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 20px;
    box-shadow: 0px 4px 6px #2c3e50;
    border-radius: 10px;
    background-color: whitesmoke;
  }
  
  .filter-title {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .filter-options label {
    font-size: 16px;
    color: #2c3e50;
  }
  
  .price-input {
    width: 120px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #2c3e50;
    border-radius: 5px;
  }
  
  /* Filtered Products Grid */
  .filtered-products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 30px;
  }
  
  /* Product Card (assumed that ProductCard.vue exists) */
  .product-card {
    background-color: whitesmoke;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px #2c3e50;
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  
  /* Button Styling for filter buttons */
  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
    color: #2c3e50;
  }
  
  button:hover {
    color: #D4AF37;
  }
  
  /* Grid responsiveness */
  @media (max-width: 768px) {
    .filtered-products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .filtered-products {
      grid-template-columns: 1fr;
    }
  }
  </style>
  