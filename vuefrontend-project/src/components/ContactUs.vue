<template>
    <div class="container mt-5">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to contact us. We're happy to assist you.</p>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactUs",
  };
  </script>
  
  <style scoped>
  h2 {
    color: #007bff;
    margin-bottom: 20px;
  }
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  