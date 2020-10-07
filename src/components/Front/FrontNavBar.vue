<template>
  <div class="header d-flex justify-content-between align-items-center flex-md-wrap">

    <div class="logo">
      <router-link to="/">
        <img class="logoImg" src="@/assets/merci logo verRuta.svg" alt="logo">
      </router-link>
    </div>

      <a class="hamBtn" @click.prevent="openHam ()">
        <i class="hamIcon fas fa-bars"></i>
      </a>

      <ul class="nav">
        <li class="navItem" @click.prevent="closeHam ()"><router-link to="/" class="menu">首頁</router-link></li>
        <li class="navItem" @click.prevent="closeHam ()"><router-link to="/about" class="menu">關於玫希</router-link></li>
        <li class="navItem" @click.prevent="closeHam ()"><router-link to="/products" class="menu">產品一覽</router-link></li>
      </ul>

      <div class="cart">
        <router-link to="/cart">
          <i class="cartIcon fas fa-shopping-cart"></i>
          <span class="badge badge-pill badge-secondary" v-if="carts.length">{{ carts.length }}</span>
        </router-link>
      </div>
  </div>
</template>

<script>
/* global $ */

export default {
  data () {
    return {
      carts: {}
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  methods: {
    openHam () {
      $('.nav').toggleClass('active')
    },
    closeHam () {
      $('.nav').removeClass('active')
    },
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api)
        .then(res => {
          this.carts = res.data.data
        })
        .catch(() => {
        })
    }
  }
}
</script>
