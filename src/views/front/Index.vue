<template>
  <div class="index">
    <!-- banner -->
    <section class="banner mb-md-9 mb-5">
      <div class="container">
        <h1 class="slogan">用樸實的手工風味， <br> 勾起您的無限回味。</h1>
      </div>
    </section>

    <div class="container">
      <!-- story -->
      <section class="indexAbout mb-5 mb-md-9">
        <div class="d-flex flex-column justify-content-center align-items-center flex-md-row">
          <div class="aboutTxt order-md-2">
            <div class="">
              <p class="mb-1 fz-3 fz-md-4 text-primary">關於玫希</p>
              <p class="fz-2 fz-md-3 lh-md-1 lh-2">創辦人曾經於法國品嚐到由法國媽媽親手烹煮的果醬。
              手工果醬比起市售果醬，更多了一種溫度以及幾份幸福感。
              玫希運用台灣在地水果，手工熬煮出無添加、減糖且保有果肉的天然水果醬。
              讓您在玫希的陪伴下，活力充沛的展開每一天。</p>
            </div>
          </div>
          <div class="aboutPhoto order-md-1 mr-md-6">
            <img class="aboutImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/about.jpg" alt="aboutImg">
          </div>
        </div>
      </section>
      <!--category -->
      <ProductFilter />
    </div>
      <!-- subscribe -->
      <Parallax />
  </div>
</template>

<script>
import ProductFilter from '../../components/Front/ProductFilter'
import Parallax from '../../components/Front/Parallax'

export default {
  data () {
    return {}
  },
  components: {
    ProductFilter,
    Parallax
  }
}
</script>
