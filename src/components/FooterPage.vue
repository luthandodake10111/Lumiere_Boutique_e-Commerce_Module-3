<template>
  <footer class="footer">
    <!-- <div class="blog">
      <h3>Subscribe to our Blog</h3>
      <div class="blog-form">
        <input type="email" placeholder="Enter your email address" v-model="email" />
        <button @click="subscribe">Sign Up</button>
      </div>
    </div> -->
    <div class="footer-content">
      <div class="footer-section">
        <h3>Shopping Online</h3>
        <ul>
          <li>Delivery & Returns</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Customer Services</h3>
        <ul>
          <li><router-link to="/contact-us">Contact Us</router-link></li>
          <li><router-link to="/faqs">FAQs</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><router-link to="/AboutPage">Our Story</router-link></li>
          <li><router-link to="/social-responsibility">Social Responsibility</router-link></li>
        </ul>
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
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p class="contact-info">Email: contact@lumiereboutique.org.za</p>
      <p class="contact-info">Phone: +27 123 4567</p>
      <p class="contact-info">Address: 123 Fashion St, Cape Town, South Africa</p>
    </div>
    <FooterLine />
  </footer>
</template>
<script>
import FooterLine from "@/components/FooterLine.vue";

export default {
  data() {
    return {
      email: "",
      socialLinks: {
        instagram: "https://www.instagram.com/we_are_lumiere_boutique_/",
        twitter: "https://x.com/LumiereWe75608",
        tiktok: "https://www.tiktok.com/@we_are_lumiere_boutique_"
      }
    };
  },
  methods: {
    subscribe() {
      alert(`Subscribed with: ${this.email}`);
      this.email = "";
    },
  }
};
</script>
<style scoped>
.footer {
  background-color: whitesmoke;
  padding: 1rem; /* Reduced padding */
  color: #333;
  font-size: 14px; /* Smaller font size */
}
.blog {
  text-align: center;
  margin-bottom: 1rem; /* Reduced margin */
}
.blog h3 {
  font-size: 16px; /* Smaller heading size */
}
.blog-form {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.blog input {
  padding: 8px; /* Smaller padding */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px; /* Smaller font size */
}
.blog button {
  background-color: black;
  color: whitesmoke;
  padding: 8px 12px; /* Smaller padding */
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px; /* Smaller font size */
  transition: background 0.3s ease, color 0.3s ease;
}
.blog button:hover {
  background-color: #D4AF37;
  color: black;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem; /* Reduced gap */
  margin-bottom: 1rem; /* Reduced margin */
}
.footer-section {
  flex: 1;
  min-width: 150px; /* Ensure sections don't get too narrow */
}
.footer-section h3 {
  font-size: 16px; /* Smaller heading size */
  margin-bottom: 8px; /* Reduced margin */
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section li {
  margin-bottom: 6px; /* Reduced margin */
}
.footer a {
  text-decoration: none;
  color: #333;
  font-size: 14px; /* Smaller font size */
}
.footer a:hover {
  color: #D4AF37;
}
.social-media {
  display: flex;
  gap: 8px; /* Reduced gap */
}
.social-icon {
  font-size: 14px; /* Smaller font size */
}
.contact-info {
  font-size: 14px; /* Smaller font size */
  margin-bottom: 6px; /* Reduced margin */
}

</style>