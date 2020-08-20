<template>
  <div class="dashboard">
    <Navbar />
    <div class="container">
      <router-view v-if="checkSuccess" :token="token"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`

      const api = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(api, { api_token: this.token })
        .then(res => {
          console.log(res)
          this.checkSuccess = true
        })
        .catch(err => {
          console.log(err)
          this.$router.push('/login')
        })
    }
  }
}

</script>
