<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">CarWash</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/aboutus">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
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
