<template>
  <nav class="navbar">
    <div class="nav-left">
      <button class="menu-btn" @click="toggleMenu">&#9776; Menu</button>
    </div>
    
    <div class="logo-container">
      <router-link to="/">
        <img src="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/est%202025/icon_logo-transparent.png" alt="Lumiere Logo" class="logo-img" />
      </router-link>
    </div>
    
    <div class="nav-right">
    <!-- Call Us, Wishlist, and Account Buttons -->
    <!-- <button class="call-btn">Call Us</button> -->
    <button class="wishlist-btn">&#9825;</button>
    <button class="account-btn">&#128100;</button>

    <!-- Icons -->
    <a href="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/icon/notification-bell_black.png"><i class="fas fa-search"></i></a>
    <a href="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/icon/user_black.png"><i class="fas fa-user"></i></a>
    <!-- <router-link to="/cart"><i class="fas fa-shopping-bag"></i>"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/icon/add-to-cart.png"</router-link> -->
    <button class="checkout-btn">Checkout</button>
  </div>
  </nav>

  <div v-if="menuOpen" class="menu-overlay">
    <button class="close-btn" @click="toggleMenu">&times; Close</button>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/AboutPage">About</router-link></li>
      
      <li class="dropdown">
        <a href="#">Products</a>
        <ul class="dropdown-menu">
          <li><router-link to="/ProductPage">Products</router-link></li>
          <li><router-link to="/silk-scarves">Silk Scarves</router-link></li>
          <li><router-link to="/cotton-blend">Cotton Blend Scarves</router-link></li>
          <li><router-link to="/bandanas">Bandanas</router-link></li>
        </ul>
      </li>
      
      <li><router-link to="/new-arrivals">New Arrivals</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </div>
</template>

<script>

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faFire } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "NavbarPage",

  // components: { FontAwesomeIcon },

  data() {
    return {
      menuOpen: false
    };
  },
  
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding: 5px 20px; 
  box-shadow: 0px 4px 6px #333333;
  position: relative;
  border-radius: 10px;
  height: 75px; 
  z-index: 1000;
}
.navbar .logo {
  height: 35px;
}
.nav-left, .nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #2c3e50;
}

button:hover {
  color: #D4AF37;
}

.logo-container {
  text-align: center;
}

.logo-img {
  width: 100px;
  transition: transform 0.5s ease;
}

/* Icons */
.nav-right a {
  text-decoration: none;
  color: black;
  font-size: 18px;
}

/* Checkout Button */
.checkout-btn {
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background: #D4AF37;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  height: 100%;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0px 4px 6px  #2c3e50;;
}
.menu-button {
    display: block; 
    font-size: 20px;
  }

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  color: #2c3e50;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;;
  font-weight: 500;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #D4AF37;
}
</style>

