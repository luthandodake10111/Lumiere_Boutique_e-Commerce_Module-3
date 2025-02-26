<template>
  <div>
    <nav class="nav">
      <div class="logo-container">
        <img src="./assets/est 2025/icon_logo-transparent.png" alt="Lumiere Logo" class="logo-img" />
        <!-- <h1 class="logqo">Lumiere Boutique</h1> -->
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="dropdown">
          <router-link to="/ProductPage">Products</router-link>

          <!-- <ul class="dropdown-menu">
            <li><a href="#silk-scarves">Silk Scarves</a></li>
            <li><a href="#cotton-blend">Cotton Blend Scarves</a></li>
            <li><a href="#bandanas">Bandanas</a></li>
          </ul> -->
        </li>
        <li><router-link to="/New Arrivals">New Arrivals</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><router-link to="/Login"> Login </router-link></li>
      </ul>
    </nav>
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    sildes: [
      "https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/[…]%20and%20icons/Images/carousel%20slides/Carousel%201.jpg",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]0and%20icons/Images/carousel%20slides/Carousel%202.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]Images/carousel%20slides/Red%20and%20White%20Scarf.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]ns/Images/carousel%20slides/Scarf%20with%20a%20bag.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]ns/Images/carousel%20slides/Scarf%20with%20a%20bag.jpg?raw=true",


    ]
  })
    };
 
</script>

<style scoped>
* {
  font-family: 'Lato', 'Montserrat', 'Playfair Display', 'Merriweather';
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
  color: #D4AF37;
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
  background-color: #D4AF37;
}

.card {
  background:  gold !important;;
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
  color: #D4AF37;;
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
  color: #D4AF37;
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
  color: #D4AF37;
}

.footer-bottom {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #bbb;
}

</style>
