<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  data() {
    return {
      pasienForm: {
        nama: '',
        alamat: '',
        telepon: '',
        rt_rw: '',
        kelurahanId: 0,
        tanggalLahir: '',
        kelamin: ''
      },
      kelurahanData: []
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['getKelurahan', 'postPasien']),
    async fetchKelurahan() {
      try {
        const { data } = await this.getKelurahan()

        this.kelurahanData = data.kelurahans

      } catch (error) {
        console.log(error);
      }
    },
    async submitHandler() {
      try {
        console.log(this.pasienForm);
        await this.postPasien(this.pasienForm)
  
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.fetchKelurahan()
  }
}
</script>

<template>
  <br><br><br>
  <div>
    <div class="container mt-3">
      <br>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <!-- Your content goes here -->
          <form class="row col-lg-6" @submit.prevent="submitHandler">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input v-model="pasienForm.nama" type="text" id="form1Example3" class="form-control" />
              <label class="form-label" for="form1Example1">Nama</label>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input v-model="pasienForm.alamat" type="text" id="form1Example2" class="form-control" />
              <label class="form-label" for="form1Example2">Alamat</label>
            </div>

            <div class="form-outline mb-4">
              <input v-model="pasienForm.telepon" type="number" class="form-control" />
              <label class="form-label" for="form1Example1">No. telepon</label>
            </div>

            <div class="form-outline mb-4">
              <input v-model="pasienForm.rt_rw" type="text" class="form-control" />
              <label class="form-label" for="form1Example1">RT/RW</label>
            </div>

            <div class="form-outline mb-4">
              <select v-model="pasienForm.kelurahanId" name="role" id="" class="form-control" required>
                <option v-for="perKelurahan in kelurahanData" :value="perKelurahan.id" :key="perKelurahan.id">
                  {{ perKelurahan.namaKelurahan }}</option>
              </select>
              <label class="form-label" for="form1Exa">Kelurahan</label>
            </div>

            <div class="form-outline mb-4">
              <input v-model="pasienForm.tanggalLahir" type="date" class="form-control" />
              <label class="form-label" for="form1Example1">Tanggal Lahir</label>
            </div>

            <div class="form-outline mb-4">
              <select v-model="pasienForm.kelamin" name="role" id="" class="form-control" required>
                <option value="Laki">Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              <label class="form-label" for="form1Exampl">Jenis Kelamin</label>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>