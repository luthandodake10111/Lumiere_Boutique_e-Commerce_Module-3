<template>
  <NavbarPage />
<br><br><br><br><br>
  <div class="checkout-container">
    <h1>Checkout</h1>
    <form @submit.prevent="startPayment">
      <label>Shipping Address:</label>
      <br><br>
      <input 
        v-model="shippingAddress" 
        id="location-input" 
        placeholder="Search for your location"
        @focus="enableLocationSearch"
        required
      />
      <br><br>

      <label>Phone Number:</label>
      <br><br>
      <input v-model="phoneNumber" required />
      <br><br>

      <label>Email Address:</label>
      <br><br>
      <input v-model="email" required />
      <br><br>

      <label>Special Instructions:</label>
      <br><br>
      <textarea v-model="specialInstructions"></textarea>
      <br><br>

      <router-link to="/paymentConfirmation">
      <button type="submit">Proceed to Payment</button>    
      </router-link>
    </form>

    <div v-if="paymentId">
      <p>Your payment reference: <strong>{{ paymentId }}</strong></p>
      <p>Complete your payment and send proof via email or upload.</p>
      <router-link to="/PaymentConfirmation">Confirm Payment</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarPage from "./NavbarPage.vue";

export default {
  components: {
    NavbarPage
  },
  data() {
    return {
      shippingAddress: "",
      phoneNumber: "",
      email: "",
      specialInstructions: "",
      paymentId: null,
      userId: '',
      totalAmount: 100, // Example amount
      locationSearchEnabled: false,
    };
  },
  methods: {
    async startPayment() {
      if (!this.shippingAddress || !this.phoneNumber || !this.email) {
        alert("Please fill in all required fields.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/payment", {
          user_id: this.userId,
          payment_method: "bank_transfer",
          amount: this.totalAmount,
          transaction_reference: null,
        });

        this.paymentId = response.data.payment_id;
      } catch (error) {
        console.error("Payment initiation failed:", error);
      }
    },

    enableLocationSearch() {
      this.locationSearchEnabled = true;

      // Load Google Maps Places API script dynamically if it's not already loaded
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places`;
        script.async = true;
        script.onload = this.initializeLocationSearch;
        document.head.appendChild(script);
      } else {
        this.initializeLocationSearch();
      }
    },

    initializeLocationSearch() {
      const input = document.getElementById("location-input");
      const options = {
        types: ["geocode"],
      };
      const autocomplete = new google.maps.places.Autocomplete(input, options);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          this.shippingAddress = place.formatted_address;
        }
      });
    },
  },
};
</script>

<style scoped>
.checkout-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

button {
  background: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
