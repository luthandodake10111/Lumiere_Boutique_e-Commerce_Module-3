<template>
    <nav class="nav">
      <div class="logo-container">
        <img src="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/est%202025/icon_logo-transparent.png" alt="Lumiere Logo" class="logo-img" />
      </div>
  
      <ul class="nav-links">
        <li><router-link to="/HomePage">Home</router-link></li>
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
    </nav>
  </template>
  
  <script>
  
  export default {
    name: "NavbarPage",
  };
  </script>
  
  <style scoped>

  
 * {
  font-family: 'Hello Paris Light', 'maragsa', 'Role Model', '';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

/* Navbar Styling */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  color: whitesmoke;
  padding: 0 30px;
  height: 100px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  box-shadow: 0px 4px 6px #333333;
  font-family: "maragsa" ;

}

/* Logo Styling */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  width: 120px;
  height: auto;
  border-radius: 50%;
  transition: transform 0.5s ease;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  padding: 0;
}

.nav-links li {
  display: flex;
  align-items: center;
}

/* Link Styling */
.nav a {
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  padding: 15px 20px;
  transition: color 0.3s ease;
}

.nav a:hover,
.nav a.active {
  color: gold !important;
}

/* Make Login Turn Red on Hover */
/* .nav-links li:last-child a:hover {
  color: red !important;
} */

/* Dropdown Styling */
.dropdown {
  position: relative;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  background: whitesmoke;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  top: 100%;
  left: 0;
  /* min-width: 180px; */
  opacity: 0;
  /* visibility: hidden; */
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  /* visibility: visible; */
  transform: translateY(0);
}

/* Dropdown Links */
.dropdown-menu li {
  padding: 10px 15px;
}

.dropdown-menu a {
  color: #333;
  display: block;
  padding: 10px;
  transition: background 0.3s ease, color 0.3s ease;
}

/* .dropdown-menu a:hover {
  background: gold;
  color: black;
} */
  </style>
   