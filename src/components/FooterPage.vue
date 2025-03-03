<template>
  <footer class="footer">
    <div class="blog">
      <h3>Subscribe to our Blog</h3>
      <div class="blog-form">
        <input type="email" placeholder="Enter your email address" v-model="email" />
        <button @click="subscribe">Sign Up</button>
      </div>
      <br>

    </div> 
    <div class="footer-content">
      <div class="footer-section">
        <h3>Shopping Online</h3>
        <ul>
          <li><router-link to="/delivery-returns">Delivery & Returns</router-link></li>
          <!-- <li><router-link to="/size-guide">Size Guide</router-link></li> -->
        </ul>
      </div>
      <div class="footer-section">
        <h3>Customer Services</h3>
        <ul>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><router-link to="/track-order">Track Your Order</router-link></li>
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
    <!-- <div class="payment-section">
      <p>Pay securely with:</p>
      <div class="payment-icons">
        <img src="/visa.png" alt="Visa" />
        <img src="/mastercard.png" alt="MasterCard" />
        <img src="/paypal.png" alt="PayPal" />
      </div>
    </div> -->
    <div class="footer-section">
        <h3>Contact Us</h3>
        <p class="contact-info">Email: contact@lumiereboutique.org.za</p>
        <p class="contact-info">Phone: +27 123 4567</p>
        <p class="contact-info">Address: 123 Fashion St, Cape Town, South Africa</p>
      </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Lumiere Boutique. All Rights Reserved.</p>
      <div class="cookie-consent">
        <button @click="allowCookies">Allow Cookies</button>
        <button @click="learnMore">Learn More</button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      socialLinks: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        tiktok: "https://www.tiktok.com"
      }
    };
  },
  methods: {
    subscribe() {
      alert(`Subscribed with: ${this.email}`);
      this.email = "";
    },
    allowCookies() {
      alert("Cookies Allowed");
    },
    learnMore() {
      alert("More about cookies");
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: whitesmoke;
  padding: 2rem;
  color: #333;
}

.blog {
  text-align: center;
  margin-bottom: 1.5rem;
}

.blog-form {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.blog input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.blog button {
  background-color: black;
  color: whitesmoke;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;
}

.blog button:hover,
.cookie-consent button:hover {
  background-color: #D4AF37;
  color: black;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}
.footer h3 {
    margin-bottom: 12px;
    color: #D4AF37;
  }

.footer a {
  text-decoration: none;
  color: #333;
}

.footer a:hover {
  color: #D4AF37;
}

.social-media {
  display: flex;
  gap: 12px;
}

/* .payment-section {
  text-align: center;
  margin-top: 1rem;
}

.payment-icons img {
  width: 50px;
  margin: 0 10px;
} */

.footer-bottom {
  text-align: center;
  margin-top: 1.5rem;
}

.cookie-consent button {
  background-color: black;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>


  


