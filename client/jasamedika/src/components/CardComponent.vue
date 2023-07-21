<script >
export default {
  props: ['fillData'],
  emits: ['editForm'],
  data() {
    return {
      kota: ''
    }
  },
  methods: {
    editPage() {
      this.$emit('editForm', this.fillData)
    }
  }
}
</script>

<template>
  <div class="col-md-4" @click.prevent="editPage">
    <div class="card p-3 mb-2">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
          <div class="ms-2 c-details">
            <h2 class="mb-0">{{ fillData.namaKota }}</h2>
          </div>
        </div>
        <div class="badge"> <span>Design</span> </div>
      </div>
      <div class="mt-5">
        <h3 class="heading">{{ fillData.namaKelurahan }}<br>{{ fillData.namaKecamatan }}</h3>
        <div class="mt-5">
        </div>
      </div>
    </div>
  </div>
</template>
