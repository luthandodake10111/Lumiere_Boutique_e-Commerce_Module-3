<template>
     <NavbarPage />
    <div class="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import emailjs from "emailjs-com";
  import NavbarPage from "../components/NavbarPage.vue";
  
  export default {
    name: "ContactPage",

    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      sendEmail() {
        // Replace with your EmailJS credentials
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const userId = "YOUR_USER_ID";
  
        emailjs
          .send(serviceId, templateId, this.formData, userId)
          .then(
            (response) => {
              console.log("Email sent successfully!", response);
              this.successMessage = "Your message has been sent successfully!";
              this.errorMessage = "";
              this.formData = { name: "", email: "", message: "" }; // Reset form
            },
            (error) => {
              console.error("Failed to send email.", error);
              this.errorMessage = "Failed to send your message. Please try again.";
              this.successMessage = "";
            }
          );
      },
    },
  };
  </script>
  
  <style scoped>
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
  
  .success-message {
    color: green;
    margin-top: 1rem;
  }
  
  .error-message {
    color: red;
    margin-top: 1rem;
  }
  </style>