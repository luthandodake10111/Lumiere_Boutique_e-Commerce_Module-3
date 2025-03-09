<template>
    <div class="contact-us">
      <h2>Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
  
      <!-- Modal Popup -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <p>Your message has been sent successfully!</p>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        showModal: false
      };
    },
    methods: {
      handleSubmit() {
        // Here you would send the form data to your backend
        console.log('Form data submitted:', this.formData);
  
        // Show the modal on successful submission
        this.showModal = true;
  
        // Reset form after submission
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-us {
    padding: 20px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  </style>
  