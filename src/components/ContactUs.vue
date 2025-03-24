<template>
  <div class="contact-page">
    <!-- Navbar for navigation -->
    <nav>
      <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/AboutPage" class="navbar-link">About Us</router-link>
      <router-link to="/contact-us" class="navbar-link">Contact Us</router-link>
    </nav>

    <div class="contact-container">
      <h1>Contact Us</h1>
      <form>
        <!-- Form Fields -->
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <!-- Contact Button -->
        <button class="btn">Send Message</button>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  // Add any necessary script logic here
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the screen */
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.navbar-link {
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
}

.navbar-link:hover {
  background-color: #D4AF37;
  color: white;
}

.contact-container {
  padding: 20px;
  background-color: #f5f5f5; /* Light grey background */
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-container h1 {
  text-align: center;
  font-size: 2rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button.btn {
  background-color: black;
  color: whitesmoke;
  padding: 10px 50px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  align-self: center;
  margin-top: 20px;
}

button.btn:hover {
  background-color: #D4AF37;
}
</style>
