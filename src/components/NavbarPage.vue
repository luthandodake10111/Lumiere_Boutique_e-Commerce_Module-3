<template>
  <nav class="navbar">
    <div class="nav-left">
      <button class="menu-btn" @click="toggleMenu">&#9776; Menu</button>
    </div>

    <div class="logo-container">
      <router-link to="/">
        <img
          src="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/est%202025/icon_logo-transparent.png"
          alt="Lumiere Logo"
          class="logo-img"
        />
      </router-link>
    </div>

    <div class="nav-right">
      <!-- Wishlist and Account Buttons -->
      <!-- <button class="wishlist-btn">&#9825;</button> -->
      <button class="account-btn">&#128100;</button>

      <!-- Icons -->
      <a href="#"><i class="fas fa-search"></i></a>
      <a href="#"><i class="fas fa-bell"></i></a>

      <router-link to="/cart">
        <i class="fas fa-shopping-bag"></i>
      </router-link>

      <button class="checkout-btn">Checkout</button>
    </div>
  </nav>

  <!-- Menu Overlay -->
  <div v-if="menuOpen" class="menu-overlay">
    <button class="close-btn" @click="toggleMenu">&times; Close</button>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/AboutPage">About</router-link></li>

      <!-- Dropdown for Products -->
      <li class="dropdown">
  <a href="#" @click="showDropdown = !showDropdown">Products</a>
  <ul v-if="showDropdown" class="dropdown-menu">
    <li><router-link to="/ProductPage">All Products</router-link></li>
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
export default {
  name: "NavbarPage",

  data() {
    return {
      menuOpen: false,
      showDropdown: false,
    };
  },

  methods: {
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  },
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #2c3e50;
  border-radius: 10px;
  height: 75px;
  width: 100%;
  z-index: 1000;
  position: fixed;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Logo */
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

/* Buttons */
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

/* Checkout Button */
.checkout-btn {
  background-color: black;
  color: whitesmoke;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

}

.checkout-btn:hover {
  background: #D4AF37;
  color: whitesmoke;

}

/* Menu Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000; 
  box-shadow: 0px 4px 6px #2c3e50;
  font-size:24px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  color: #2c3e50;
}

/* Nav Links */
.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #D4AF37;
}

/* Dropdown Menu */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: whitesmoke;
  list-style: none;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 3000;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 8px 12px;
}

.dropdown-menu li a {
  color: black;
}

.dropdown-menu li a:hover {
  color: #D4AF37;
}
</style>
