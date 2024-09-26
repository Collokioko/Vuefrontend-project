<template>
    <div class="container text-center mt-5">
      <h1>Our Services</h1>
      <p class="lead">Explore our wide range of car wash and detailing services designed to meet your needs.</p>
  
      <!-- Cards Container -->
      <div class="row mt-4">
        <!-- Card 1 -->
        <div class="col-md-4">
          <div class="card custom-card">
            <div class="card-body">
              <h5 class="card-title">Top-Notch Cleaning</h5>
              <p class="card-text">We use advanced techniques to ensure your car looks as good as new.</p>
            </div>
            <img :src="carwash3" class="card-img-bottom" alt="Car Wash 3">
            <button class="btn btn-primary book-btn">Book Now</button>
          </div>
        </div>
  
        <!-- Card 2 -->
        <div class="col-md-4">
          <div class="card custom-card">
            <div class="card-body">
              <h5 class="card-title">Professional Detailing</h5>
              <p class="card-text">Our detailing service is designed to give your vehicle a perfect finish.</p>
            </div>
            <img :src="carwash4" class="card-img-bottom" alt="Car Wash 4">
            <button class="btn btn-primary book-btn">Book Now</button>
          </div>
        </div>
  
        <!-- Card 3 -->
        <div class="col-md-4">
          <div class="card custom-card">
            <div class="card-body">
              <h5 class="card-title">Eco-Friendly Products</h5>
              <p class="card-text">We use eco-friendly cleaning products that are safe for your car and the environment.</p>
            </div>
            <img :src="carwash5" class="card-img-bottom" alt="Car Wash 5">
            <button class="btn btn-primary book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OurServices",
    data() {
      return {
        carwash3: require('@/assets/carwash3.jpg'), 
        carwash4: require('@/assets/carwash4.jpg'),
        carwash5: require('@/assets/carwash5.jpg'),
      };
    }
  };
  </script>
  
  <style scoped>
  h1{
    color: #007bff;
    font-size: 3rem;
  }
  .custom-card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .card-body {
    z-index: 1; 
  }
  
  .card-img-bottom {
    width: 100%;
    height: auto;
  }
  
  .book-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: none; 
  }
  
  .custom-card:hover {
    transform: scale(1.05); 
  }
  
  .custom-card:hover .book-btn {
    display: block; 
    background-color: #007bff;
    color: white;
    border: none;
  }
  </style>
  