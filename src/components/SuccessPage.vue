<template>
  <div>
    <h2 v-if="loading">Verifying Payment...</h2>
    <div v-else-if="error">
      <h2>Error</h2>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="paymentStatus === 'paid'">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase! Your payment has been approved.</p>
    </div>
    <div v-else>
      <h2>Payment Not Verified</h2>
      <p>We could not confirm your payment. Please contact support.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sessionId: null,
      paymentStatus: null,
      loading: true,
      error: null,
    };
  },
  async mounted() {
    console.log("🚀 Success page loaded!");

    // Retrieve the session_id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    this.sessionId = urlParams.get("session_id");
    console.log("🔍 Extracted session_id:", this.sessionId);

    if (!this.sessionId) {
      this.error = "No session ID found in URL.";
      this.loading = false;
      return;
    }

    // Fetch payment verification from backend
    try {
      console.log("🔄 Sending request to verify payment...");
      const response = await fetch(
        `http://localhost:5000/verify-payment?session_id=${this.sessionId}`
      );
      const data = await response.json();
      console.log(data);
      console.log("✅ Payment verification response:", data);
      if (data.session.payment_status === "paid") {
        this.paymentStatus = "paid";
      } else {
        this.paymentStatus = "unverified";
      }
    } catch (err) {
      console.error("❌ Error verifying payment:", err);
      this.error = "Failed to verify payment. Please try again.";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
