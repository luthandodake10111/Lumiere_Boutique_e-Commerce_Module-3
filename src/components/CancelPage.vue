<template>
  <div class="payment-canceled">
    <h2>Payment Canceled ❌</h2>
    <p>Your payment was not successful. Please try again later.</p>
    <router-link to="/" class="back-button">Back to Shop</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.payment-canceled {
  text-align: center;
  margin-top: 50px;
}

h2 {
  color: #e74c3c;
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
  color: #333;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #e74c3c;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #c0392b;
}
</style>
