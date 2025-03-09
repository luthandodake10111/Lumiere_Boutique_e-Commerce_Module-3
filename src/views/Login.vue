<template>
  <div>
    <div class="login-container">
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="loginData.email" type="email" placeholder="Email" required />
          <input v-model="loginData.password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <br />
        <div class="register-link">
          <h4>Don't have an account?</h4>
          <br />
          <router-link to="/register" class="btn">Register</router-link>
        </div>
      </div>
    </div>

    <!-- Error Modal -->
    <div v-if="modalVisible" class="modal-overlay">
  <div class="modal">
    <h2>Login Failed</h2>
    <p>{{ errorMessage }}</p>
    <button @click="closeModal" class="close-modal">Close</button>
  </div>
</div>


    <FooterLine />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FooterLine from '../components/FooterLine.vue';

export default {
  components: {
    FooterLine
  },
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      },
      modalVisible: false,  // Controls modal visibility
      errorMessage: '',     // Holds error message
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.$store.dispatch('login', this.loginData);
        this.$router.push('/');
      } catch (error) {
        console.error("Login failed:", error);
        this.errorMessage = "Invalid email or password. Please try again."; // Set error message
        this.modalVisible = true;  // Show the modal
      }
    },
    closeModal() {
      this.modalVisible = false;  // Close the modal when clicked
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Roboto';
  text-align: center;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: #d4af37;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-form {
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

.register-link {
  margin-top: 10px;
}

.register-link button {
  background-color: transparent;
  border: none;
  color: #D4AF37;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
}

/* Modal Styles */
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
  visibility: visible; /* Ensure it's visible when v-if is true */
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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


/* Modal Animation */
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
  visibility: hidden; /* Initially hidden */
  opacity: 0;
  transition: visibility 0s 0.3s, opacity 0.3s ease;
}

.modal-overlay.v-enter, .modal-overlay.v-leave-to {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.3s ease;
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

.modal.v-enter, .modal.v-leave-to {
  opacity: 1;
  transform: scale(1);
}

</style>
