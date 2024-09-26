<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">CarWash</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link> <!-- Use router-link -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link> <!-- Use router-link -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link> <!-- Use router-link -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact Us</router-link> <!-- Use router-link -->
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
</style>
