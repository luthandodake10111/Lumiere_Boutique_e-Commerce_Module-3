<template>
    <div>
      <h1>Checkout</h1>
      <form @submit.prevent="startPayment">
        <label>Shipping Address:</label>
        <br><br>
        <input v-model="shippingAddress" required />
        <br><br>
        <router-link to="/StripePage"><button type="submit">Proceed to Payment</button></router-link>
      </form>
      
      <div v-if="clientSecret">
        <stripe-page :client-secret="clientSecret" @success="confirmPayment" />
      </div>
    </div>
  </template>
  
<script>
import { mapState, mapActions } from 'vuex';
import StripePage from './StripePage.vue';
  
  export default {
    components: { StripePage },
    data() {
      return { shippingAddress: '', paymentStatus: null };
    },
    computed: {
      ...mapState('cart', ['clientSecret']),
    },
    methods: {
      ...mapActions('cart', ['checkout', 'confirmPayment']),
      
      async startPayment() {
        try {
          const clientSecret = await this.checkout(this.shippingAddress);
          if (!this.shippingAddress) {
            alert("Please enter a shipping address");
                return;
          }
          if (clientSecret) {
            console.log('Stripe payment initiated');
          }
        } catch (error) {
          console.error('Payment initiation failed:', error);
        }
      },
  
    async confirmPayment(status) {
        this.paymentStatus = status;
        await this.confirmPayment({ order_id: this.$store.state.cart.order, payment_status: 'succeeded' });
        this.$router.push('/OrderPage');
    },
    },
};
</script>
<style scoped>
</style>
