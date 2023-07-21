import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, currentPage: '' }),
  getters: {
    doubleCount: (state) => state.count * 2,
    
  },
  actions: {
    async register(value) {
      try {
        const response = await axios({
          url: 'http://localhost:3000' + '/register',
          method: 'post',
          data: value
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    },
    async login(value) {
      try {
        const response = await axios({
          url: 'http://localhost:3000' + '/login',
          method: 'post',
          data: value
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    },
    async getKelurahan() {
      try {
        const response = await axios({
          url: 'http://localhost:3000' + '/kelurahan',
          method: 'get',
          headers: {access_token: localStorage.access_token}
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    },
    async postKelurahan(value) {
      try {
        const response = await axios({
          url: 'http://localhost:3000' + '/kelurahan',
          method: 'post',
          data: value,
          headers: {access_token: localStorage.access_token}
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    },
    async putKelurahan(value) {
      try {
        const response = await axios({
          url: 'http://localhost:3000' + `/kelurahan/${value.id}`,
          method: 'put',
          data: value,
          headers: {access_token: localStorage.access_token}
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    },
    async postPasien(value) {
      try {
        console.log(value);
        const response = await axios({
          url: 'http://localhost:3000' + '/pasien',
          method: 'post',
          data: value,
          headers: {access_token: localStorage.access_token}
        })

        // console.log(response);

        return response

      } catch (error) {
        console.log(error);
      }
    }
  },
})