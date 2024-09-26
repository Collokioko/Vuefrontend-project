<template>
    <div class="container text-center mt-5">
      <h1>About Us</h1>
      <p class="lead">We are dedicated to providing the best car wash and detailing services.</p>
      
      <!-- Image included from assets folder -->
      <div class="image-container">
        <img :src="carwashImage" class="img-fluid" alt="About Us - Carwash image">
      </div>
  
      <p class="about-description mt-4">
        Our mission is to ensure every car that leaves our wash is as clean as the day it left the factory. 
        We take pride in our meticulous cleaning process and customer satisfaction. Our team of professionals 
        uses only the highest quality products to make your vehicle shine. Come visit us and experience the 
        best car wash service today!
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        carwashImage: require('@/assets/carwash2.jpg'), 
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
    font-size: 1.2rem;
  }
  
  .image-container {
    margin-top: 20px;
  }
  
  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
  }
  
  .about-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
  }
  </style>
  