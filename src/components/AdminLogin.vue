<template>
  
  <div class="page-container">
    <!-- Navbar -->
    <nav class="navbar">
      <!-- Back Arrow -->
      <div class="nav-left">
        <button class="back-btn" @click="$router.go(-1)">←</button>
      </div>

      <!-- Logo -->
      <div class="logo-container">
        <router-link to="/">
          <img
            src="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/est%202025/icon_logo-transparent.png"
            alt="Lumiere Logo"
            class="logo-img"
          />
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Login Form -->
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

      <!-- Error Modal -->
      <div v-if="modalVisible" class="modal-overlay">
        <div class="modal">
          <h2>Error</h2>
          <p>{{ errorMessage }}</p>
          <button @click="closeModal" class="close-modal">Close</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterLine />
  </div>
</template>

<script>
import FooterLine from './FooterLine.vue';

export default {
  components: {
    FooterLine,
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      modalVisible: false,
      correctEmail: 'admin@lumiereboutique.com',
      correctPassword: 'Lumiere@2025',
    };
  },
  methods: {
    login() {
      if (this.email === this.correctEmail && this.password === this.correctPassword) {
        localStorage.setItem('authToken', 'adminToken');
        this.$router.push('/AdminDashboard');
      } else {
        this.errorMessage = 'Invalid credentials';
        this.modalVisible = true;
      }
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
  mounted() {
    if (localStorage.getItem('authToken')) {
      this.$router.push('/AdminDashboard');
    }
  },
};
</script>

<style scoped>
/* Page Container - Flexbox for layout */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #2c3e50;
  border-radius: 10px;
  height: 75px;
  z-index: 1000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-container {
  text-align: center;
  flex: 1;
}

.logo-img {
  width: 100px;
  transition: transform 0.5s ease;
}

.back-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #2c3e50;
}

button:hover {
  color: #d4af37;
}
.main-content {
  flex: 1; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  min-height: calc(100vh - 75px); 
  padding-top: 75px;
}
.admin-login {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
  color: whitesmoke;
}

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

/* Footer Styles */
footer {
  margin-top: auto; /* Push the footer to the bottom */
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
}
</style>
