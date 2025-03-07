<template>
  <div class="contact-container">
    <h2>Contact Us</h2>

    <p>If you have any questions or need assistance, feel free to reach out to us.</p>

    <form @submit.prevent="sendMessage">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      successMessage: "",
    };
  },
  methods: {
    async sendMessage() {
      try {
        const response = await axios.post("http://localhost:3000/contact/send-message", {
          name: this.name,
          email: this.email,
          message: this.message,
        });

        this.successMessage = "Message sent successfully!";
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        console.error("Error sending message:", error);
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
input,
textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid black; /* Added border */
  border-radius: 5px; /* Rounded corners */
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #D4AF37; /* Change border color on focus */
  outline: none; /* Remove default focus outline */
}

button {
  background: black;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
.success {
  color: green;
  margin-top: 10px;
}

.contact-page {
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
  height: 150px;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #D4AF37;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn {
  background: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.close-btn:hover {
  background: darkred;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.checkout-btn {
  background-color: black;
  color: whitesmoke;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.checkout-btn:hover {
  background: #D4AF37;
}

</style>