<template>
  <NavbarPage />
  <div class="cart-container">
    <h1 class="cart-header">Your Cart</h1>
    <div v-if="cart.length === 0" class="empty-cart">Your cart is empty</div>

    <div v-else>
      <div v-for="item in cart" :key="item.product_id" class="cart-item">
        <div class="cart-item-info">
          <img v-if="item.image_url" :src="item.image_url" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <p>{{ item.name }} - R{{ item?.price }} x {{ item.quantity }}</p>
            <div class="quantity-control">
              <button @click="increaseQuantity(item)" class="quantity-btn">+</button>
              <button @click="decreaseQuantity(item)" class="quantity-btn" :disabled="item.quantity <= 1">-</button>
            </div>
            <button @click="removeFromCart(item.product_id)" class="remove-btn">Remove</button>
          </div>
        </div>
      </div>

      <div class="cart-total">
        Total: R{{ cartTotal }}
      </div>
      <button @click="proceedToCheckout()" class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import NavbarPage from './NavbarPage.vue';

export default {
  components: {
    NavbarPage
  },
  computed: {
    ...mapState(['cart', 'user']),
    cartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
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
    setTimeout(() => console.log("Cart items:", this.cart), 2000); // Delay to check after state update
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

.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.cart-header {
  font-size: 2rem;
  font-weight: bold;
}

.empty-cart {
  color: #999;
  font-style: italic;
  margin-top: 20px;
  font-size: 1.2rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-item-info {
  display: flex;
  gap: 20px;
}

.cart-item-image {
  width: 100px; /* Smaller images */
  height: auto;
  object-fit: contain;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details p {
  margin: 5px 0;
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

.remove-btn {
  background: #A48F77;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 25px;
  transition: background 0.3s;
}

.remove-btn:hover {
  background: #8B7969;
}

.cart-total {
  font-size: 22px;
  font-weight: bold;
  margin-top: 20px;
}

.checkout-btn {
  background: #8B7969;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 20px;
}

.checkout-btn:hover {
  background: #6E5C4F;
}
</style>
