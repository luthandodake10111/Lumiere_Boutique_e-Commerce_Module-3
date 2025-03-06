<template>
    <div class="faqs-page">
      <h1>FAQs</h1>
      <div class="faq-item">
        <h3>How do I place an order?</h3>
        <p>You can place an order by browsing our products and adding them to your cart.</p>
      </div>
      <div class="faq-item">
        <h3>What payment methods do you accept?</h3>
        <p>We accept Visa, MasterCard, and PayPal.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQsPage",
  };
  </script>
  
  <style scoped>
  .faqs-page {
    padding: 2rem;
  }
  
  .faq-item {
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #D4AF37;
  }
  </style>