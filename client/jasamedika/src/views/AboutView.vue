<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { mapWritableState } from 'pinia'
import CardComponent from '../components/CardComponent.vue'

export default {
  components: {
    CardComponent
  },
  data() {
    return {
      kelurahanData: [],
      showForm: false,
      kelurahanForm: {
        namaKelurahan: '',
        namaKecamatan: '',
        namaKota: '',
        id: 0
      },
      whichForm: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['getKelurahan', 'putKelurahan', 'postKelurahan']),
    async fetchKelurahan() {
      try {
        const { data } = await this.getKelurahan()

        this.kelurahanData = data
        // localStorage.access_token = data.access_token
        // localStorage.role = data.role

        // this.isLogin = true

        // if (localStorage.role == 'Admin') {
        //   this.$router.push('/kelurahan')
        // } else {
        //   this.$router.push('/pasien')
        // }

      } catch (error) {
        console.log(error);
      }
    },
    async editForm(value) {
      try {
        this.kelurahanForm.namaKecamatan = value.namaKecamatan;
        this.kelurahanForm.namaKelurahan = value.namaKelurahan;
        this.kelurahanForm.namaKota = value.namaKota;
        this.kelurahanForm.id = value.id

        this.whichForm = 'edit'
        this.showForm = true
        // const { data } = await this.register(this.registerData)

        // this.form = 'login'

      } catch (error) {
        console.log(error);
      }
    },
    async submitForm() {
      try {
        if (this.whichForm == 'edit') {
          await this.putKelurahan(this.kelurahanForm)
        } else {
          await this.postKelurahan(this.kelurahanForm)
        }

        await this.fetchKelurahan()
        this.showForm = false
      } catch (error) {
        console.log(error);
      }
    },
    postForm() {
      this.kelurahanForm.namaKecamatan = '';
      this.kelurahanForm.namaKelurahan = '';
      this.kelurahanForm.namaKota = '';
      this.kelurahanForm.id = 0

      this.whichForm = 'post'
      this.showForm = true
    },
    addKelurahan() {

    }

  },
  computed: {
    ...mapWritableState(useCounterStore, ['isLogin'])
  },
  beforeMount() {
    this.fetchKelurahan()
  }
}
</script>

<template>
  <br><br>
  <div v-if="!showForm" class="container mt-5 mb-3">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <!-- Your content goes here -->
        <a @click.prevent="postForm" href="#" class="btn btn-getstarted btn-lg active" role="button" aria-pressed="true">Add New</a>
      </div>
    </div>
  </div>

  <div class="container mt-5 mb-3">
    <div v-if="!showForm" class="row">
      <CardComponent v-for="(item, index) in kelurahanData.kelurahans" :key="index" :fillData="item"
        @editForm="editForm" />

    </div>
    <div class="container" v-if="showForm">
      <br>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <!-- Your content goes here -->
          <form class="row col-lg-6" @submit.prevent="submitForm">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input v-model="kelurahanForm.namaKota" type="text" id="form1Example3" class="form-control" />
              <label class="form-label" for="form1Example1">Nama Kota</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input v-model="kelurahanForm.namaKecamatan" type="text" id="form1Example2" class="form-control" />
              <label class="form-label" for="form1Example2">Nama Kecamatan</label>
            </div>

            <div class="form-outline mb-4">
              <input v-model="kelurahanForm.namaKelurahan" type="text" id="form1Example1" class="form-control" />
              <label class="form-label" for="form1Example1">Nama Kelurahan</label>
            </div>


            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>

  </div>
  <br>
</template>

<style></style>
