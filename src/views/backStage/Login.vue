<template>
<div class="container mt-5">
  <loading :active.sync="isLoading"></loading>
    <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal">
            請先登入
        </h1>
        <div class="form-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input id="inputEmail" v-model="user.email" type="email" class="form-control"
            placeholder="Email address" required autofocus>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input id="inputPassword" v-model="user.password" type="password" class="form-control"
            placeholder="Password" required>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
        </button>
        <p class="mt-5 mb-3 text-muted">
            &copy; 2020~∞ - 六角學院
        </p>
    </form>
</div>
</template>

<script>
import Toast from '../../utils/toast'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    signin () {
      const url = `${process.env.VUE_APP_APIPATH}auth/login`
      this.isLoading = true
      this.$http.post(url, this.user)
        .then(res => {
          const token = res.data.token
          const expired = res.data.expired
          // 把 token 和 expire 寫入 cookie
          // 把 expire 轉換成固定格式
          document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
          this.$router.push('/admin/products')
          this.isLoading = false
          Toast.fire({
            title: '登入成功',
            icon: 'success'
          })
        })
        .catch(err => {
          this.isLoading = false
          Toast.fire({
            title: '帳號或密碼錯誤',
            icon: 'error'
          })
          console.log(err)
        })
    }
  }
}
</script>
