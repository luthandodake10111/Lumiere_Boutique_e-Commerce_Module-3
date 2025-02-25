<template>
  <div>
    <nav class="nav"> 
      <div class="logo-container">
        <img src="./assets/est 2025/icon_logo-transparent.png" alt="Lumiere Logo" class="logo-img" />
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        
        <li class="dropdown">
          <a href="#">Products</a>
          <ul class="dropdown-menu">
            <li><router-link to="/all-products">All Products</router-link></li>
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
  </div>


    

  
    
    <!-- Include Carousel Component -->
    <Carousel />

    <router-view></router-view>




    <!-- Features Section Inside the Card -->
    <section class="features">
      <div class="container d-flex justify-content-center gap-3 flex-wrap">

        <div class="card" style="width: 18rem;">
    <img src="your-image.jpg" class="card-img-top" alt="Elegant Scarf">
    <div class="card-body">
      <h5 class="card-title">Luxury Silk Scarves</h5>
      <p class="card-text">Explore our finest collection of silk and cotton blend scarves, crafted for elegance.</p>
      <a href="#premium-quality" class="btn btn-primary">Learn More</a>
    </div>
  </div>
  <!-- Card 1 -->
  <div class="card" style="width: 18rem;">
    <img src="premium-quality.jpg" class="card-img-top" alt="Premium Quality">
    <div class="card-body">
      <h5 class="card-title">Premium Quality</h5>
      <p class="card-text">Our scarves are crafted with the finest silk and cotton blends.</p>
      <a href="#premium-quality" class="btn btn-primary">Learn More</a>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="card" style="width: 18rem;">
    <img src="elegant-designs.jpg" class="card-img-top" alt="Elegant Designs">
    <div class="card-body">
      <h5 class="card-title">Elegant Designs</h5>
      <p class="card-text">Timeless patterns that complement any outfit.</p>
      <a href="#elegant-designs" class="btn btn-primary">See Designs</a>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="card" style="width: 18rem;">
    <img src="worldwide-shipping.jpg" class="card-img-top" alt="Worldwide Shipping">
    <div class="card-body">
      <h5 class="card-title">Worldwide Shipping</h5>
      <p class="card-text">We deliver luxury right to your doorstep.</p>
      <a href="#worldwide-shipping" class="btn btn-primary">Order Now</a>
    </div>
  </div>
</div>
  </section>

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
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login">Login</a></li>
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
        </div>
      <div class="bg-dark text-white text-center py-3 fixed-bottom">
        <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      </div>
    </footer>
    <!-- </div> -->
</template>

<script>
import Carousel from './components/Carousel.vue';

export default {
  components: {
    Carousel
  }
}
 
</script>

<style scoped>
* {
  font-family: 'Lato', 'Montserrat', 'Playfair Display', 'Merriweather';
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
  background-color: #333333;
  color: white;
  padding: 0 30px;
  height: 100px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
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
  color: white;
  font-weight: 500;
  padding: 15px 20px;
  transition: color 0.3s ease;
}

.nav a:hover,
.nav a.active {
  color: gold !important;
}

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
  color: #D4AF37;
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
