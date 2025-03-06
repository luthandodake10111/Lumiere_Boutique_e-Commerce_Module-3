<template>
  <NavbarPage />
  <CarouselPage />
  <router-view></router-view>

  <!-- Features Section -->
  <section class="features">
    <div class="grid-container">
      <div v-for="(feature, index) in features" :key="index" class="card">
        <img :src="feature.image" class="card-img-top" :alt="feature.alt">
        <div class="card-body">
          <h5 class="card-title">{{ feature.title }}</h5>
          <p class="card-text">{{ feature.description }}</p>
          <br><br>
          <router-link to="/AboutPage" class="btn btn-primary">Read More</router-link>
        </div>
      </div>
    </div>
  </section>

  <FooterPage />
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import CarouselPage from "@/components/CarouselPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  components: {
    NavbarPage,
    CarouselPage,
    FooterPage
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
          link: "#premium-quality"
        },
        {
          title: "Elegant Designs",
          description: "Timeless patterns that complement any outfit.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/elegant%20designs%20of%20silk%20scarves.jpg",
          alt: "Elegant Designs",
          link: "#elegant-designs"
        },
        {
          title: "Luxury Silk Scarves",
          description: "Explore our finest collection of silk and cotton blend scarves, crafted for elegance.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/silk%20cotton%20carousel%202.jpg",
          alt: "Elegant Scarf",
          link: "#premium-quality"
        },
        {
          title: "Worldwide Shipping",
          description: "We deliver luxury right to your doorstep with efficiency.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/worldwide-shipping-icon-5.jpg",
          alt: "Worldwide Shipping",
          link: "#worldwide-shipping"
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Features Section */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.card {
  background: whitesmoke !important;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: medium;
  width: 100%;
  height: 100pxy;
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
  background-color: black;
  border: none;
  border-radius: 115px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}

.btn:hover {
  background-color: #D4AF37;
}

/* Footer Styles */
.footer {
  background-color: whitesmoke;
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
  margin-bottom: 12px;
  color: #D4AF37;
}

.footer p, .footer a {
  font-size: 14px;
  color: #333333;
}

.footer a {
  text-decoration: underline;
}

.footer a:hover {
  color: #D4AF37;
}

/* Styling for Contact Info */
.contact-info {
  color: whitesmoke;
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

/* Ensure card images are sized correctly */
.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
</style>