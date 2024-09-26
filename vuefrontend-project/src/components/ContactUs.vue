<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Contact Us</h1>
      <p class="lead text-center mb-5">We’d love to hear from you! Please fill out the form below to get in touch.</p>
  
      <div class="row">
        <!-- Contact Form Column -->
        <div class="col-md-6">
          <form @submit.prevent="showAlert">
            <div class="form-group mb-4">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" required>
            </div>
            <div class="form-group mb-4">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group mb-4">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" v-model="formData.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
  
        <!-- Contact Information Column -->
        <div class="col-md-6">
          <h3>Get in Touch</h3>
          <p><strong>Email:</strong> contact@carwash.com</p>
          <p><strong>Phone:</strong> 0701423659</p>
          <p><strong>Address:</strong> Antelope Avenue, Embakasi, Nairobi city</p>
  
          <h3 class="mt-4">Follow Us</h3>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#" class="text-primary" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-primary" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-primary" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      showAlert() {
        alert(`Message sent from ${this.formData.name}`);
        // Reset form
        this.formData = { name: '', email: '', message: '' };
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #007bff;
  }
  
  h3 {
    margin-top: 20px;
    color: #333;
  }
  
  .form-control {
    border-radius: 0.25rem;
    box-shadow: none;
  }
  
  .btn {
    border-radius: 0.25rem;
  }
  
  .list-inline-item a {
    transition: color 0.3s;
    font-size: 24px; /* Increase icon size */
  }
  
  .list-inline-item a:hover {
    color: #0056b3;
  }
  </style>
  