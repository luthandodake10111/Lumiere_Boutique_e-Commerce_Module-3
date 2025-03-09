<template>
  <NavbarPage />
  <div class="payment-container">
    <h1>Confirm Your Payment</h1>
    <p>Please enter your transaction reference to complete your payment.</p>
    
    <div class="input-group">
      <label for="transactionReference">Transaction Reference:</label>
      <input 
        v-model="transactionReference" 
        id="transactionReference" 
        placeholder="Enter reference" 
        required 
      />
    </div>
    
    <button :disabled="loading" @click="confirmPayment">
      <span v-if="loading">Processing...</span>
      <span v-else>Confirm Payment</span>
    </button>
    
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";
import NavbarPage from "./NavbarPage.vue";

export default {
  name: "PaymentConfirmation",
  components: { NavbarPage },
  data() {
    return {
      transactionReference: "",
      loading: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  computed: {
    userId() {
      return this.$store.state.user?.user_id || null;
    },
  },
  methods: {
    async confirmPayment() {
      if (!this.transactionReference) {
        this.errorMessage = "Please enter your transaction reference.";
        return;
      }

      if (!this.userId) {
        this.errorMessage = "User ID is missing. Please log in.";
        return;
      }

      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";

      try {
        const response = await axios.post("http://localhost:3000/confirm-payment", {
          user_id: this.userId,
          transaction_reference: this.transactionReference,
        });
        
        this.successMessage = response.data.message;
        setTimeout(() => this.$router.push("/OrderPage"), 2000);
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Payment confirmation failed. Please try again.";
        console.error("Payment confirmation error:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.payment-container {
  max-width: 400px;
  margin: 80px auto 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  background-color: #28a745;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.success-message {
  color: green;
  font-size: 14px;
  margin-top: 10px;
}
</style>
