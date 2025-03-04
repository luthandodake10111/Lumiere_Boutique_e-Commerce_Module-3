<template>
  <div class="register-container">
    <div class="register-form">
      <h2>Create Account</h2>
      <form @submit.prevent="register">
        <input v-model="userData.first_name" placeholder="First Name" required />
        <input v-model="userData.last_name" placeholder="Last Name" required />
        <input v-model="userData.email" type="email" placeholder="Email" required />
        <input v-model="userData.password" type="password" placeholder="Password" required />
        <input v-model="userData.phone_number" type="tel" placeholder="Phone Number" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      userData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: ''
      }
    };
  },
  methods: {
    ...mapActions(['register']),
    async register() {
      await this.$store.dispatch('register', { userData: this.userData, router: this.$router });
    }
  }
};
</script>

<style scoped>
*{
  font-family: 'Roboto';
  text-align: center;
}
/* Full height container */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: whitesmoke;
}

/* Registration form styles */
.register-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

input {
  width: 100%;
  padding: 0.8rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h2 {
  color: black;
  margin-bottom: 1.5rem;
}

/* Button styling */
button {
  width: 100%;
  padding: 0.8rem;
  background-color: black;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d4af37;
}
</style>
