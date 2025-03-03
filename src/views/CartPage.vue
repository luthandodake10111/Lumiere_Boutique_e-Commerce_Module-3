<template>
    <header class="header">
      <div class="header-container">
        <h1 class="logo">Lumière Boutique</h1>
        <nav class="nav">
          <button class="nav-btn" @click="navigateTo('products')">Shop</button>
          <button class="nav-btn" @click="viewCart">
            <i class="fas fa-shopping-cart"></i> <span v-if="cart.length">({{ cart.length }})</span>
          </button>
        </nav>
      </div>
    </header>
    <main class="container">
      <section v-if="page === 'products'">
        <h1 class="section-title">Our Collection</h1>
        <div class="products">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" alt="Product image" class="product-image" />
            <div class="product-info">
              <h2>{{ product.name }}</h2>
              <p class="price">R{{ product.price.toFixed(2) }}</p>
              <div class="quantity-control">
                <button class="quantity-btn" @click="decreaseQuantity(product)">-</button>
                <span>{{ product.quantity }}</span>
                <button class="quantity-btn" @click="increaseQuantity(product)">+</button>
              </div>
              <button class="add-btn" @click="addItemToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      <section v-if="page === 'cart'">
        <h1 class="section-title">Your Cart</h1>
        <div v-if="cart.length > 0" class="cart-items">
          <div v-for="(item, index) in cart" :key="item.product.id" class="cart-item">
            <img :src="item.product.image" alt="Product image" class="cart-image" />
            <div class="cart-info">
              <h2>{{ item.product.name }}</h2>
              <p>R{{ item.product.price.toFixed(2) }}</p>
              <div class="cart-quantity">
                <button class="quantity-btn" @click="decreaseCartItemQuantity(item, index)">-</button>
                <span>{{ item.quantity }}</span>
                <button class="quantity-btn" @click="increaseCartItemQuantity(item)">+</button>
              </div>
              <p class="total-price">Total: R{{ calculateTotal(item).toFixed(2) }}</p>
              <button class="remove-btn" @click="removeItemFromCart(index)">Remove</button>
            </div>
          </div>
          <div class="cart-total">Grand Total: R{{ calculateCartTotal().toFixed(2) }}</div>
        </div>
        <div v-else class="empty-cart">Your cart is empty.</div>
      </section>
    </main>
  </template>
  <script>
  export default {
    name: "LumiereBoutique",
    data() {
      return {
        page: "products",
        cart: [],
        products: [
          {
            id: 1,
            name: "Silk and Cotton Scarf",
            price: 280,
            image: "https://www.fortheloveofsilk.co.za/Portals/16/Hotcakes/Data/products/39c6ae0f-859b-4331-8ea9-02810b87dadf/medium/City-Stripe-Blue.jpg",
            quantity: 1,
          },
          {
            id: 2,
            name: "Bandana",
            price: 150,
            image: "https://img.fruugo.com/product/0/55/317779550_0340_0340.jpg",
            quantity: 1,
          },
        ],
      };
    },
    methods: {
      increaseQuantity(product) {
        product.quantity += 1;
      },
      decreaseQuantity(product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      },
      addItemToCart(product) {
        const item = this.cart.find((item) => item.product.id === product.id);
        if (item) {
          item.quantity += product.quantity;
        } else {
          this.cart.push({ product: { ...product }, quantity: product.quantity });
        }
        product.quantity = 1;
      },
      increaseCartItemQuantity(item) {
        item.quantity += 1;
      },
      decreaseCartItemQuantity(item, index) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      },
      viewCart() {
        this.page = "cart";
      },
      removeItemFromCart(index) {
        this.cart.splice(index, 1);
      },
      navigateTo(page) {
        this.page = page;
      },
      calculateTotal(item) {
        return item.product.price * item.quantity;
      },
      calculateCartTotal() {
        return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
    },
  };
  </script>
    <style scoped>
    body {
      margin: 0;
      font-family: "Playfair Display", serif;
      background-color: #FAF7F2;
      color: #333;
    }
    .header {
      background: #222;
      padding: 20px;
      color: white;
      text-align: center;
    }
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: auto;
    }
    .nav {
      display: flex;
      gap: 15px;
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
    }
    .nav-btn:hover {
      background: #6E5C4F;
    }
    .nav-btn i {
      font-size: 24px; /* Icon size */
    }
    .nav-btn span {
      font-size: 16px; /* Cart item count size */
      margin-left: 5px;
    }
    .container {
      max-width: 1000px;
      margin: auto;
      text-align: center;
      padding: 20px;
    }
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      padding: 20px;
    }
    .product-card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .product-card:hover {
      transform: scale(1.02);
    }
    .price {
      font-weight: bold;
      color: #5A4735;
      font-size: 20px;
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
    </style>
    <!-- Add Font Awesome CDN link -->
    <!-- <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" /> -->