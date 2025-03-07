<template>
  <div>
    <h1>Your Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty</div>

    <div v-else>
      <div v-for="item in cart" :key="item.product_id">
        <p>{{ item.name }} - R{{ item?.price }} x {{ item.quantity }}</p>
        <img :src="item.product.image_url" alt="Product Image" />
        <button @click="increaseQuantity(item)">+</button>
        <button @click="decreaseQuantity(item)">-</button>
        <button @click="removeFromCart(item.product_id)">Remove</button>
      </div>

      <p>Total: R{{ cartTotal }}</p>
      <button @click="proceedToCheckout()">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['cart', 'user']),
    
  
  },
  methods: {
    ...mapActions(['getCart', 'addCartItem', 'removeCartItem', 'updateQuantity']),
    
    async increaseQuantity(item) {
      await this.updateQuantity({ product_id: item.product_id, quantity: item.quantity + 1 });
    },
    async decreaseQuantity(item) {
      if (item.quantity > 1) {
        await this.updateQuantity({ product_id: item.product_id, quantity: item.quantity - 1 });
      }
    },
    async removeFromCart(product_id) {
      await this.removeCartItem(product_id);
    },
    proceedToCheckout() {
      this.$router.push('/checkout'); // Correct route path
    }
  },
  mounted() {
    if (this.user) {
      this.getCart(this.user.user_id);
    }
  }


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
  font-size: 24px;
}

.nav-btn span {
  font-size: 16px;
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

.add-btn,
.remove-btn {
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

.add-btn:hover,
.remove-btn:hover {
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
