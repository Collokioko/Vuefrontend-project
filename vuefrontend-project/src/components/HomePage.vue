<template>
    <div class="container text-center mt-5">
      <h1>Welcome to Our CarWash Service</h1>
      <p class="lead">Experience the best car cleaning and detailing service in town!</p>
      
      <!-- Image included from assets folder -->
      <div class="image-container">
        <img :src="carwashImage" class="img-fluid" alt="Carwash image">
        
        <!-- About Us button -->
        <router-link to="/about" class="btn btn-primary about-btn">About Us</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    data() {
      return {
        carwashImage: require('@/assets/carwash1.jpg'), // Adjust file extension if necessary
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #007bff;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  
  .image-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 600px; /* Adjust as needed */
  }
  
  img {
    width: 100%;
    border-radius: 10px;
  }
  
  .about-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .about-btn:hover {
    background-color: #0056b3;
  }
  </style>
  