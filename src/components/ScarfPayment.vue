<template>
  <div>
    <h2>Buy a Scarf</h2>
    <button @click="handlePayment">Pay Now</button>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
  data() {
    return {
      stripe: null,
    };
  },
  methods: {
    async handlePayment() {
      try {
        // Call your backend to create a Stripe session
        const response = await fetch(
          "http://localhost:5000/create-checkout-session",
          {
            method: "POST",
          }
        );
        const session = await response.json();
        console.log(session);
        // If the session is created successfully, redirect the user to Stripe's Checkout page
        if (session.id) {
          const stripe = await loadStripe(
            "pk_test_51QwIue05db05V780EQ7lM9cr9SCktvX94LCtnyRLLtKvSIfdQfopKWES1XuriPtA4RymnpF3nN2kQ6W3kknPNFy000rlswaOSF"
          ); // Replace with your own publishable key
          console.log("before redirect");
          try {
            let { error } = await stripe.redirectToCheckout({
              sessionId: session.id,
            }); // Redirect to Stripe Checkout page
            console.log(error);
          } catch (e) {
            console.log(e);
          }
        }
      } catch (error) {
        console.error("Payment failed:", error); // Log errors here for debugging
      }
    },
  },
  mounted() {
    // Load Stripe JS only when the component is mounted
    this.stripe = loadStripe(
      "pk_test_51QwIue05db05V780EQ7lM9cr9SCktvX94LCtnyRLLtKvSIfdQfopKWES1XuriPtA4RymnpF3nN2kQ6W3kknPNFy000rlswaOSF"
    );
  },
};
</script>

<style scoped>

</style>
