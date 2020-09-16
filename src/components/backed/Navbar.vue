<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/admin/products" class="navbar-brand">
        Merci
      </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mr-auto">
      <router-link to="/admin/products" class="nav-item nav-link">商品列表</router-link>
      <router-link to="/admin/orders" class="nav-item nav-link">訂單列表</router-link>
      <router-link to="/admin/coupons" class="nav-item nav-link">優惠券</router-link>
      <router-link to="/admin/images" class="nav-item nav-link">圖片列表</router-link>
    </div>
      <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="signout">登出</button>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    signout () {
      document.cookie = 'hexToken=; expires=; path=/'
      console.log('token 已清除')
      this.$router.push('/')
    }
  }
}
</script>
