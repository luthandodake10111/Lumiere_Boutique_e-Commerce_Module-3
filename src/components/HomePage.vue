<template>
  <div>
  <div>
    <h1>Welcome to our E-commerce Store</h1>
    <p>Browse our products</p>
  </div>
  <div>
    <header class="hero">
      <h2>Embrace Elegance, Wear Lumiere.</h2>
      <p>Elevate your style with our premium collection.</p>
      <button class="btn">Shop Now</button>

      <!-- Bootstrap Carousel -->
      <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./assets/Images/carousel slides/Carousel 1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/Images/carousel slides/Carousel 2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/Images/carousel slides/carousel 3.jpg" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/Images/carousel slides/carousel 4.jpg" alt="Fourth slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/Images/carousel slides/carousel 5.jpg" alt="Fifth slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./assets/Images/carousel slides/carousel 6.jpg" alt="Sixth slide">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->

      <!-- <div class="carousel">
  <div class="carousel-inner">
    <div class="carousel-item" v-for="slide in slides">
      <img :src="slide"/>
    </div>
  </div>
</div> -->
    </header>

    <!-- Features Section Inside the Card -->
    <section class="features">
      <div class="container d-flex justify-content-center gap-3 flex-wrap">
        <div class="card" style="width: 18rem">
          <img src="your-image.jpg" class="card-img-top" alt="Elegant Scarf" />
          <div class="card-body">
            <h5 class="card-title">Luxury Silk Scarves</h5>
            <p class="card-text">
              Explore our finest collection of silk and cotton blend scarves,
              crafted for elegance.
            </p>
            <a href="#premium-quality" class="btn btn-primary">Learn More</a>
          </div>
        </div>
        <!-- Card 1 -->
        <div class="card" style="width: 18rem">
          <img src="premium-quality.jpg" class="card-img-top" alt="Premium Quality" />
          <div class="card-body">
            <h5 class="card-title">Premium Quality</h5>
            <p class="card-text">
              Our scarves are crafted with the finest silk and cotton blends.
            </p>
            <a href="#premium-quality" class="btn btn-primary">Learn More</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card" style="width: 18rem">
          <img src="elegant-designs.jpg" class="card-img-top" alt="Elegant Designs" />
          <div class="card-body">
            <h5 class="card-title">Elegant Designs</h5>
            <p class="card-text">
              Timeless patterns that complement any outfit.
            </p>
            <a href="#elegant-designs" class="btn btn-primary">See Designs</a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card" style="width: 18rem">
          <img src="worldwide-shipping.jpg" class="card-img-top" alt="Worldwide Shipping" />
          <div class="card-body">
            <h5 class="card-title">Worldwide Shipping</h5>
            <p class="card-text">We deliver luxury right to your doorstep.</p>
            <a href="#worldwide-shipping" class="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  </div>
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
export default {
  name: "HomePage",
  data: () => ({
    sildes: [
      "https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/[…]%20and%20icons/Images/carousel%20slides/Carousel%201.jpg",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]0and%20icons/Images/carousel%20slides/Carousel%202.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]Images/carousel%20slides/Red%20and%20White%20Scarf.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]ns/Images/carousel%20slides/Scarf%20with%20a%20bag.jpg?raw=true",
      "https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/blob/mai[…]ns/Images/carousel%20slides/Scarf%20with%20a%20bag.jpg?raw=true",
    ],
  }),
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