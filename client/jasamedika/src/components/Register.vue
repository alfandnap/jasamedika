<script>



</script>

<template>
  <div class="col-lg-8">
    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
      <div class="form-group mt-3">
        <input type="text" class="form-control" name="username" id="username" placeholder="Username" required>
      </div>
      <div class="form-group mt-3">
        <input type="text" class="form-control" name="password" id="password" placeholder="Password" required>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div class="text-center"><button type="submit">Login</button></div>
    </form>
    <div class="col-12">
      <p class="small mb-0">Don't have account? <a @click.prevent="$router.push('/register')"
          href="pages-register.html">Create an account</a></p>
    </div>
  </div><!-- End Contact Form -->
</template>

<style></style>
