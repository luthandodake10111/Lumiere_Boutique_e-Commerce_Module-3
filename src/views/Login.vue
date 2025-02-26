<template>
    <div>
        <div class="login-container">
        <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <br />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        </form>
    </div>
    </div>
    <div class="register-link">
      <h4>Don't have an account? </h4>
      <router-link to="/Register" class="btn"> Register </router-link>
      
    </div>
    <br>
        

        <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p><b>Email:</b> contact@lumiereboutique.org.za</p>
        <p><b>Phone:</b> +27 123 4567</p>
        <p><b>Address:</b> 123 Fashion St, Cape Town, South Africa</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/ProductPage">Products</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/Login">Login</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-media">
          <a href="https://facebook.com" target="_blank" class="social-icon">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="social-icon">Instagram</a>
          <a href="https://twitter.com" target="_blank" class="social-icon">Twitter</a>
          <a href="https://www.tiktok.com" target="_blank" class="social-icon">TikTok</a>
        </div>
      </div>
      <div class="bg-dark text-white text-center py-3 fixed-bottom">
        <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>

    
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return { email: '', password: '', message: '' };
    },
    methods: {
      ...mapActions(['login']),
      async login() {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    }
      
    
  }
};
</script>


<style scoped>
* {
  font-family: "Lato", "Montserrat", "Playfair Display", "Merriweather";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Navbar Base Styling */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  background-color: #333333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: #d4af37;
  height: 155px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 150px;
  height: auto;
  margin-right: 10px;
  border-radius: 95%;
  transition: transform 0.5s ease;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  position: relative;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 25px 15px;
  transition: color 0.3s ease;
}

/* Navbar Hover & Active Page Effect */
.nav a:hover,
.nav a.active {
  color: gold !important;
}

/* Dropdown Styling */
.dropdown {
  position: relative;
}

/* Hidden Dropdown Menu */
.dropdown-menu {
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  top: 100%;
  left: 0;
  min-width: 150px;

  /* Hidden by default */
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Dropdown Menu Links */
.dropdown-menu li {
  padding: 10px 15px;
  white-space: nowrap;
}

.dropdown-menu a {
  color: #333;
  display: block;
  padding: 10px;
  transition: background 0.3s ease, color 0.3s ease;
}

/* Hover Effect for Dropdown Links */
.dropdown-menu a:hover {
  background: gold;
  color: white;
}

.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f8f9fa, #e0e0e0);
  color: #003366;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
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
  background-color: #f0f0f0; /* Light background for contrast */
}

.login-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h2 {
  color: #003366;
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #003366;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d4af37; /* Gold hover effect */
}

.register-link {
  text-align: center;
  margin-top: 1rem;
}

.register-link button {
  background-color: transparent;
  border: none;
  color: #003366;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
}

.card {
  background: gold !important;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 1200px;
}

.feature {
  text-decoration: none;
  color: inherit;
  padding: 1.5rem;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.feature h3 {
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.feature p {
  font-size: 1rem;
  color: #777;
}

/* Footer Styles */
.footer {
  background-color: #333333;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.footer-section {
  flex: 1;
}

.footer h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #d4af37;
}

.footer p,
.footer a {
  font-size: 14px;
  color: #bbb;
  line-height: 1.4;
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  color: #d4af37;
}

.social-media {
  display: flex;
  gap: 12px;
}

.social-icon {
  font-size: 16px;
  color: #bbb;
}

.social-icon:hover {
  color: #d4af37;
}

.footer-bottom {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #bbb;
}
</style>