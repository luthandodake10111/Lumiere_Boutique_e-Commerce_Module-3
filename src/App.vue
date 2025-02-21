<template>
  <div>
    <nav class="nav">
      <div class="logo-container">
        <img src="./assets/est 2025/icon_logo-transparent.png" alt="Lumiere Logo" class="logo-img" />
        <!-- <h1 class="logo">Lumiere Boutique</h1> -->
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li class="dropdown">
          <a href="#products">Products</a>
          <ul class="dropdown-menu">
            <li><a href="#silk-scarves">Silk Scarves</a></li>
            <li><a href="#cotton-blend">Cotton Blend Scarves</a></li>
            <li><a href="#bandanas">Bandanas</a></li>
          </ul>
        </li>
        <li><a href="#new-arrivals">New Arrivals</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
    
    <header class="hero">
      <h2>Embrace Elegance, Wear Lumiere.</h2>
      <p>Elevate your style with our premium collection.</p>
      <button class="btn">Shop Now</button>
  
    
    <!-- Bootstrap Carousel -->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://via.placeholder.com/800x400/ff7f7f/333333?text=Image+1" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/800x400/7f7fff/333333?text=Image+2" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/800x400/7fff7f/333333?text=Image+3" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/800x400/7fff7f/333333?text=Image+4" alt="Four slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://via.placeholder.com/800x400/7fff7f/333333?text=Image+5" alt="Five slide">
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
    </div>
  </header>

  <div class="card" style="width: 18rem;">
  <img src="your-image.jpg" class="card-img-top" alt="Elegant Scarf">
  <div class="card-body">
    <h5 class="card-title">Luxury Silk Scarves</h5>
    <p class="card-text">Explore our finest collection of silk and cotton blend scarves, crafted for elegance.</p>
    
    <!-- Features Section Inside the Card -->
    <section class="features">
      <div class="container d-flex justify-content-center gap-3 flex-wrap">
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
  </div>
</div>
  </div>
  <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p><b>Email:</b> contact@lumiereboutique.org.za</p>
          <p><b>Phone:</b> +27 123 456</p>
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
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      </div>
    </footer>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: [
        'https://via.placeholder.com/800x400/ff7f7f/333333?text=Image+1',
        'https://via.placeholder.com/800x400/7f7fff/333333?text=Image+2',
        'https://via.placeholder.com/800x400/7fff7f/333333?text=Image+3'
      ]
    };
  }
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

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0px; */
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

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  position: relative;
}

.nav a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 25px 15px;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  top: 100%;
  left: 0;
  min-width: 150px;
}

.dropdown:hover .dropdown-menu {
  display: block;
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
  background: #fff;
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
