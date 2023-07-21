<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { mapWritableState } from 'pinia'

import Register from '../components/Register.vue'

export default {
  components: {
    Register
  },
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      },
      form: 'login',
      registerData: {
        username: '',
        password: '',
        role: ''
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['login', 'register']),
    async loginHandler() {
      try {
        const { data } = await this.login(this.loginData)

        localStorage.access_token = data.access_token
        localStorage.role = data.role

        this.isLogin = true

        if (localStorage.role == 'Admin') {
          this.$router.push('/kelurahan')
        } else {
          this.$router.push('/pasien')
        }

      } catch (error) {
        console.log(error);
      }
    },
    async registerSubmit() {
      try {
        const { data } = await this.register(this.registerData)

        this.form = 'login'

      } catch (error) {
        console.log(error);
      }
    },
    async handleCredentialResponse(response) {
      try {
        const result = await this.handleGoogleLogin(response)

        if (result) {
          localStorage.access_token = result.access_token
          localStorage.username = result.username
          this.$router.push('product')
          this.isLogin = true
        }
      } catch (error) {
        console.log(error);
      }
    }

  },
  computed: {
    ...mapWritableState(useCounterStore, ['isLogin'])
  }
}

</script>

<template>
  <main id="main">
    <br><br>

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-header">
          <h2>WELCOME TO JASAMEDIKA</h2>
          <p>Kami adalah salah satu pengembang Sistem Informasi Manajemen Rumah Sakit ( SIMRS ) terkemuka di Indonesia
            dengan dukungan dari berbagai staf ahli dimulai dari bidang Kedokteran, Apoteker, Akuntansi, Informatika, dan
            Business Process Analyst sebagai Researcher dan Problem Solver</p>
        </div>

      </div>

      <div class="container">

        <div class="row gy-5 gx-lg-5">

          <div class="col-lg-4">

            <div class="info">
              <h3>Get in touch</h3>
              <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-8" v-if="form == 'login'">
            <form method="post" role="form" class="php-email-form">
              <div class="form-group mt-3">
                <input v-model="loginData.username" type="text" class="form-control" name="username" id="username"
                  placeholder="Username" required>
              </div>
              <div class="form-group mt-3">
                <input v-model="loginData.password" type="text" class="form-control" name="password" id="password"
                  placeholder="Password" required>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button @click.prevent="loginHandler" type="submit">Login</button></div>
            </form>
            <div class="col-12">
              <p class="small mb-0">Don't have account? <a @click.prevent="form = 'register'"
                  href="pages-register.html">Create an account</a></p>
            </div>
          </div><!-- End Contact Form -->

          <div class="col-lg-8" v-if="form == 'register'">
            <form @submit.prevent="registerSubmit" method="post" class="php-email-form">
              <div class="form-group mt-3">
                <input v-model="registerData.username" type="text" class="form-control" name="username" id="username" placeholder="Username" required>
              </div>
              <div class="form-group mt-3">
                <input v-model="registerData.password" type="text" class="form-control" name="password" id="password" placeholder="Password" required>
              </div>
              <div class="form-group mt-3">
                <select v-model="registerData.role" name="role" id="" class="form-control" required>
                  <option value="" disabled selected>Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Operator">Operator</option>
                </select>
              </div>
              <div class="text-center"><button type="submit">Register</button></div>
            </form>
            <div class="col-12">
              <p class="small mb-0">Already have an account? <a @click.prevent="form = 'login'"
                  href="pages-register.html">Login</a></p>
            </div>
          </div>
          <!-- End Contact Form -->

        </div>

      </div><br><br>

      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9546685306123!2d107.63525807396219!3d-6.8960257674819285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a4b3af3467%3A0x462fe925f01cacd6!2sPT%20Jasamedika%20Saranatama!5e0!3m2!1sid!2sid!4v1689764155462!5m2!1sid!2sid"
          frameborder="0" allowfullscreen></iframe>
      </div><!-- End Google Maps -->

    </section><!-- End Contact Section -->

  </main><!-- End #main -->
</template>
