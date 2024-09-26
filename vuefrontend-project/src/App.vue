<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">CarWash</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto"> <!-- Align to the right -->
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" active-class="active-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services" active-class="active-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" active-class="active-link">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    
    <router-view></router-view> <!-- This is where routed components will be displayed -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

.navbar {
  padding: 1rem;
}

.navbar-nav {
  margin-left: auto; 
}

.nav-link {
  padding: 0.5rem 1rem; 
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffeeba; 
}

.active-link {
  border-bottom: 2px solid #ffeeba; 
  font-weight: bold; 
}
</style>
