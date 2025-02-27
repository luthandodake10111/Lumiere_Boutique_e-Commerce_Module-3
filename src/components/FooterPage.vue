<template>
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
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/AboutPage">About</router-link></li>
            <li><router-link to="/ProjectsPage">Products</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
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
      <div class="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        socialLinks: {
          instagram: "https://instagram.com",
          twitter: "https://twitter.com",
          tiktok: "https://www.tiktok.com"
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: whitesmoke;
    padding: 2rem;
    box-shadow: 0px 4px 6px #333333;

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
  
  .bg-dark {
    background-color: #333;
    color: whitesmoke;
  }
  </style>
  