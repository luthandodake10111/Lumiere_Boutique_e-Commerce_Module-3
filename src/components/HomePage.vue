<template>
  <div>
    <NavbarPage />
    <CarouselPage />
    <router-view></router-view>

    <!-- Features Section -->
    <section class="features">
      <div class="grid-container">
        <div v-for="(feature, index) in features" :key="index" class="card">
          <img :src="feature.image" 
     class="card-img-top" 
     :alt="feature.alt"
     :style="{ width: feature.size, height: feature.size }">

          <div class="card-body">
            <h5 class="card-title">{{ feature.title }}</h5>
            <p class="card-text">{{ feature.description }}</p>
            <a :href="feature.link" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p class="contact-info">Email: contact@lumiereboutique.org.za</p>
          <p class="contact-info">Phone: +27 123 4567</p>
          <p class="contact-info">Address: 123 Fashion St, Cape Town, South Africa</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
         
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/AboutPage">About</router-link></li>
            <li><router-link to="/ProjectsPage">Products</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
         
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-media">
            <a :href="socialLinks.instagram" target="_blank" class="social-icon">Instagram</a>
            <a :href="socialLinks.twitter" target="_blank" class="social-icon">Twitter</a>
            <a :href="socialLinks.tiktok" target="_blank" class="social-icon">TikTok</a>
          </div>
        </div>
      </div>
      <div class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>

import NavbarPage from "@/components/NavbarPage.vue";
import CarouselPage from "@/components/CarouselPage.vue";

export default {
  components: {
    NavbarPage,
    CarouselPage
  },
  data() {
  return {
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      tiktok: "https://www.tiktok.com"
    },
    
    features: [
      {
        title: "Premium Quality",
        description: "Our scarves are crafted with the finest silk and cotton blends.",
        image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/Brown.jpg",
        alt: "Premium Quality",
        link: "#premium-quality",
        size: "180px" 
      },
      {
        title: "Elegant Designs",
        description: "Timeless patterns that complement any outfit.",
        image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/elegant%20designs%20of%20silk%20scarves.jpg",
        alt: "Elegant Designs",
        link: "#elegant-designs",
        size: "180px"
      },
      {
        title: "Luxury Silk Scarves",
        description: "Explore our finest collection of silk and cotton blend scarves, crafted for elegance.",
        image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/silk%20cotton%20carousel%202.jpg",
        alt: "Elegant Scarf",
        link: "#premium-quality",
        size: "190px"
      },
      {
        title: "Worldwide Shipping",
        description: "We deliver luxury right to your doorstep with efficiency.",
         image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/worldwide-shipping-icon-5.jpg",
        alt: "Worldwide Shipping",
        link: "#worldwide-shipping",
        size: "190px"
      }
    ]
  };
}
}
</script>

<style scoped>
* {
  font-family: 'Lato', 'Montserrat', 'Playfair Display', 'Merriweather';
  text-align: center;
  color: black;
}

/* Features Section */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.card {
  background: whitesmoke !important;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: medium;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.card h5 {
  font-size: 20px !important;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: #333333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}

.btn:hover {
  background-color: #D4AF37;
}

/* Footer Styles */
.footer {
  background-color: #333333;
  color: whitesmoke;
  padding: 2rem;
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

.footer p, .footer a {
  font-size: 14px;
  color: whitesmoke;
}

.footer a {
  text-decoration: none;
}

.footer a:hover {
  color: #D4AF37;
}
/* Styling for Contact Info */
.contact-info {
  color: whitesmoke; 
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}

.social-media {
  display: flex;
  gap: 12px;
}

.social-icon {
  font-size: 16px;
  color: whitesmoke;
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

.card-img-top {
  width: 100px; 
  height: 100px;
  object-fit: cover;
  border-radius: 10px; 
}


</style>
