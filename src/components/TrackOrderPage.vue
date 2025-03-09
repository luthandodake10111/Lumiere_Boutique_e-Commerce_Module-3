<template>
    <div class="track-order-page">
      <h1>Track Your Order</h1>
      <p>Enter your order number to track the status of your shipment.</p>
      <input type="text" placeholder="Order Number" />
      <button @click="trackOrder">Track</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "TrackOrderPage",
    methods: {
      trackOrder() {
        alert("Tracking your order...");
      },
    },
  };
  </script>
  
  <style scoped>
  .track-order-page {
    padding: 2rem;
    text-align: center;
  }
  
  input {
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #D4AF37;
  }
  </style>