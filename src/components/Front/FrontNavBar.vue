<template>
  <div class="header d-flex justify-content-center align-items-center flex-md-wrap">

    <div class="logo mb-md-1">
      <router-link to="/">
        <img class="logoImg" src="../../assets/merci logo.png" alt="logo">
      </router-link>
    </div>

      <a class="hamBtn" href="#">
        <i class="fas fa-bars"></i>
      </a>

      <ul class="nav">
        <li class="navItem"><router-link to="/" class="menu">首頁</router-link></li>
        <li class="navItem"><router-link to="/about" class="menu">關於玫希</router-link></li>
        <li class="navItem"><router-link to="/products" class="menu">產品一覽</router-link></li>
        <li class="navItem"><router-link to="/starProduct" class="menu">主廚推薦</router-link></li>
      </ul>

      <div class="cart">
        <router-link to="/cart" class="cartIcon">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </div>
</template>

<script>
/* global $ */

$(document).ready(() => {
  $('.hamBtn').click(function (e) {
    e.preventDefault()
    $('.nav').toggleClass('active')
  })
})
</script>
