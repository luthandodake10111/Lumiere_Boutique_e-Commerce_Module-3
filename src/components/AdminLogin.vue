<template>
  <br><br><br>
  <div class="admin-login">
    <h2>Admin Login</h2>
    <div class="login-container">
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  <br><br><br><br><br>
  <br><br><br><br><br>

  <!-- Error Modal -->
  <div v-if="modalVisible" class="modal-overlay">
    <div class="modal">
      <h2>Error</h2>
      <p>{{ errorMessage }}</p>
      <button @click="closeModal" class="close-modal">Close</button>
    </div>
  </div>

  <FooterLine />
</template>

<script>
import FooterLine from './FooterLine.vue';

export default {
  components: {
    FooterLine
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      modalVisible: false, // Controls modal visibility
      correctEmail: 'admin@lumiereboutique.com', // Set Email
      correctPassword: 'Lumiere@2025' // Set Password
    };
  },
  methods: {
    login() {
      if (this.email === this.correctEmail && this.password === this.correctPassword) {
        localStorage.setItem('authToken', 'adminToken'); // Store token in localStorage
        this.$router.push('/AdminDashboard'); // Redirect to dashboard
      } else {
        this.errorMessage = 'Invalid credentials'; // Set the error message
        this.modalVisible = true; // Show the modal
      }
    },
    closeModal() {
      this.modalVisible = false; // Close the modal
    }
  },
  mounted() {
    // Redirect to Admin Dashboard if already logged in
    if (localStorage.getItem('authToken')) {
      this.$router.push('/AdminDashboard');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

/* Modal Animation */
.modal-overlay {
  transition: opacity 0.3s ease;
}

.modal {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-overlay.v-enter, .modal-overlay.v-leave-to {
  opacity: 0;
}

.modal.v-enter, .modal.v-leave-to {
  opacity: 1;
  transform: scale(1);
}
</style>
