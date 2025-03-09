<template>
  <div>
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

    <!-- Error Modal -->
    <div v-if="modalVisible" class="modal-overlay">
      <div class="modal">
        <h2>Registration Failed</h2>
        <p>{{ errorMessage }}</p>
        <button @click="closeModal" class="close-modal">Close</button>
      </div>
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
      },
      modalVisible: false,  // Controls the modal visibility
      errorMessage: '',     // Holds the error message
    };
  },
  methods: {
    ...mapActions(['register']),
    async register() {
      try {
        await this.$store.dispatch('register', this.userData);
        this.$router.push('/login');
      } catch (error) {
        console.error("Registration failed:", error);
        this.errorMessage = "Registration failed. Please try again."; // Set error message
        this.modalVisible = true;  // Show the modal
      }
    },
    closeModal() {
      this.modalVisible = false;  // Close the modal when the button is clicked
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Roboto';
  text-align: center;
}
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: whitesmoke;
}
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-bottom: 1rem;
}

.close-modal {
  background: #000;
  color: white;
  padding: 10px 15px;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.close-modal:hover {
  background: #444;
}
</style>
