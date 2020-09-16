<template>
  <div class="index">
    <!-- banner -->
    <section class=" mb-md-9 mb-5">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <router-link to="/products" class="allBanner bannerProducts">
              <div class="container">
                <div class="d-inline-block text-center">
                  <h1 class="slogan">用樸實的手工風味 <br> 勾起您的無限回味</h1>
                  <p class="bannerLink fz-2 fz-md-3">選購商品</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide>
            <router-link to="/product/76bSShcJ8DK0Pk9D9fdHewtLv1DHI45G0L8SvBzo3BRTlK4JI8puuapR926u83pH" class="allBanner bannerFeature">
              <div class="container">
                <h1 class="slogan d-inline-block bg-opacity p-1 p-md-3 text-center rounded">葡萄柚果醬<br>新鮮上市 </h1>
              </div>
            </router-link>
          </swiper-slide>

          <swiper-slide>
            <router-link to="/product/BWgwmZy97a9nnSUwKrDBQhlkAOgXbDtZ5iF5vyyd3u1Ent6iBkT7fkHaIXoTJQxj" class="allBanner bannerGift">
              <div class="container">
                <h1 class="slogan text-center"><span class="text-secondary">限定版</span>聯名禮盒<br>預購倒數中</h1>
              </div>
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>

    <div class="container">
      <!-- story -->
      <section class="indexAbout mb-5 mb-md-9">
        <div class="storyArea d-flex flex-column justify-content-center align-items-center flex-md-row">
          <div class="aboutTxt order-md-2 rounded-right">
            <p class="fz-3 fz-md-4 fw-bold text-primary letter-space-3 mb-0">關於玫希</p>
            <p class="fz-2 fw-300 text-primary letter-space-3">一段從感動開啟的新人生</p>
            <p class="fz-2 fw-300 lh-3">創辦人曾經於法國品嚐到由法國媽媽親手烹煮的果醬。
              手工果醬比起市售果醬，更多了一種溫度以及幾份幸福感。
              玫希運用台灣在地水果，手工熬煮出無添加、減糖且保有果肉的天然水果醬。
              讓您在玫希的陪伴下，活力充沛的展開每一天。</p>
            <router-link to="/about" class="storyLink fz-2 fz-md-3">更多故事</router-link>
          </div>
          <div class="aboutPhoto order-md-1">
            <img class="aboutImg rounded" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NIZbYOVgTKqoNX8nP9tVOmadbWe4DNf72Zh8xm4ezkcWFcy7223zShlK9kVUlVAlVbPoY38whVvwfkShvPTt1UMNYvuLXtvoqKDYbBCVtCCt1IeU8ew5mGt9J29JNlKU.jpg" alt="aboutImg">
          </div>
        </div>
      </section>
    </div>
      <!-- features -->
      <section class="featureBackground bg-cover">
        <div class="container">
          <p class="featureTitle fz-3 fz-md-4 fw-bold text-white text-center mb-0 letter-space-3">玫希的堅持</p>
          <p class="featureSubTitle fz-2 fw-300 text-white text-center mb-0 letter-space-3">用真心溫暖每個人</p>
        </div>
      </section>
      <section class="faetureIconsWrap d-flex justify-content-center mb-3">
        <div class="container d-flex flex-md-row flex-column justify-content-between">
          <div class=" w-md-20 ml-md-10 d-flex flex-column align-items-center mb-md-0 mb-6">
            <img class="featureIcon" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Hk1e593BLZX9nVOKRh2MSd6T9D05o90XQGvYo7BQxDMEFRab0IOUwmXkjBNdpGMhhxPKRCd0d5KqNAQ8UaAOTMbkKiVZ7gWgpy2PLoAaxRWKTOjcZVycf5bqLQ91xrEf.png" alt="featureIcon">
            <h2 class="fz-3 fw-300 text-primary text-center my-1 letter-space-3">手工製作</h2>
            <p class="fz-2 w-70 w-md-100 lh-3 fw-300 text-text text-justify">每一罐果醬及每一塊糕點，玫希總是傾注所有心力來製作。希望每位客人能夠因美味的食物露出笑容、並從中獲得慰藉。</p>
          </div>
          <div class=" w-md-20 d-flex flex-column align-items-center mb-md-0 mb-6">
            <img class="featureIcon" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/aqRlNcrhYWbOst1eDGoHmYDGLdhxnmBpsWXE2idf1zGwWMKKZsjZS7AKic1hUIH8urBivqfvMbsLBrSjWDzjGVn4NNf2KQFPfzH0ICQSu6mxZD93rtN1fTvohWniETwD.png" alt="featureIcon">
            <h2 class="fz-3 fw-300 text-primary text-center my-1 letter-space-3">在地鮮果</h2>
            <p class="fz-2 w-70 w-md-100 lh-3 fw-300 text-text text-justify">生於臺灣、回饋於臺灣。藉由親自探訪農戶交流合作，玫希要用一罐罐自然無添加的果醬，將水果王國的美好行銷世界。</p>

          </div>
          <div class="w-md-20 mr-md-10 d-flex flex-column align-items-center mb-0">
            <img class="featureIcon" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/gxladogDmHTRggBHT4SASql47ceHx4CchQy97EWeNijdTzyWHSBx09YOvrmqLerTcLoOkkkGwhIBl0Kslhw9f50Mep8LFxyrErDTON8jUEotNXmWPK1s0eQMQsesDBXV.png" alt="featureIcon">
            <h2 class="fz-3 fw-300 text-primary text-center my-1 letter-space-3">健康減糖</h2>
            <p class="fz-2 w-70 w-md-100 lh-3 fw-300 text-text text-justify">我們堅持只有自己敢吃的，才能製成商品銷售。如同照顧家人健康一般，嘗試出最美味的天然糖食譜，讓您享用美食不用擔心健康。</p>
          </div>
        </div>
      </section>
      <div class="featureBtn container d-flex justify-content-center mb-5 mb-md-9">
        <router-link to="/products" class="storyLink fz-2 fz-md-3">挑選商品</router-link>
      </div>

      <!-- subscribe -->
      <Parallax />

    <!--category -->
    <div class="container">
      <ProductFilter />
    </div>
  </div>
</template>

<script>
import ProductFilter from '@/components/Front/ProductFilter'
import Parallax from '@/components/Front/Parallax'

export default {
  data () {
    return {
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  components: {
    ProductFilter,
    Parallax
  }
}
</script>
