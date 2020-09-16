<template>
  <div class="about">
    <!-- story -->
    <section class="container position-relative mb-5 mb-md-17 py-md-5">
      <div class="row justify-content-start">
        <div class="storyImg bg-cover rounded col-md-6 col-12 position-absolute"></div>
      </div>
      <div class="row text-left justify-content-end mt-md-0">
        <div class="storyTxt col-md-7 col-12 rounded py-md-5 px-md-7 mt-md-11">
          <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">Merci à vous ! <br>將所有美好<br>濃縮進小小的果醬罐裡</p>
          <p class="fz-2 lh-3 fw-300 mb-0">玫希 (Merci) 在法文中是表達感謝的禮貌用語。對於創辦人而言，感謝感恩是一份責任、一種生活態度以及生活方式。
            <br>
            <br>創辦人曾於法國品嚐到由法國媽媽親手烹煮的果醬。
              手工果醬比起市售果醬，更多了一種溫度以及幾份幸福感。
              玫希運用臺灣在地水果，手工熬煮出無添加、減糖且保有果肉的天然水果醬。
              讓您在玫希的陪伴下，活力充沛的展開每一天。</p>
        </div>
      </div>
    </section>

    <!-- 顧客心得 -->
    <section class="customerFeedback mb-5 mb-md-12 bg-cover d-flex justify-content-center flex-column">
      <p class="featureTitle fz-3 fz-md-4 fw-bold text-white text-center mt-3 mb-0 letter-space-3">玫子粉這樣說</p>
      <p class="featureSubTitle fz-2 fw-300 text-white text-center mb-0 letter-space-3">來自客人的真實回饋</p>

      <swiper class="swiper text-center container" :options="swiperOption">
        <swiper-slide class="text-text fz-2 fw-300 d-flex align-items-center flex-column">
          <img class="obj-c h-100 w-100px my-5 rounded-circle" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" alt="avatar">
          <p class="mx-md-15 mx-4 mb-3 lh-2">
          原本想說沒聽過的牌子不太敢買，沒想到一吃就愛上了。<br>整罐果醬滿滿果肉，老公第一次吃到馬上就問說是哪裡買的，現在已經變成我們家早餐的常備醬了。
          </p>
          <p class="primary mb-3">台北 吳小姐</p>
        </swiper-slide>

        <swiper-slide class="text-text fz-2 fw-300 d-flex align-items-center flex-column">
          <img class="obj-c h-100 w-100px my-5 rounded-circle" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" alt="avatar">
          <p class="mx-md-15 mx-4 mb-3 lh-2">
          之前情人節時買了情人節限定的巧克力布朗尼，女友一看到包裝眼睛都亮了。<br>巧克力很濃郁，而且不死甜，對巧克力很有研究的女友說這是真的比利時特選巧克力的味道，整個超級高興。
          </p>
          <p class="primary mb-5">新竹 Alexis</p>
        </swiper-slide>

        <swiper-slide class="text-text fz-2 fw-300 d-flex align-items-center flex-column">
          <img class="obj-c h-100 w-100px my-5 rounded-circle" src="https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="avatar">
          <p class="mx-md-15 mx-4 mb-3 lh-2">
          愛吃甜食的爸爸因為血糖過高只好忍痛暫停吃甜食，但看到他嘴饞的樣子覺得很不忍心，意外在搜尋到這家用甜菊糖作的天然餅乾。
          <br>老闆人很親切回答我的問題，還幫爸爸客製化餅乾，真的很高興能夠找到玫希 : )
          </p>
          <p class="primary mb-5">金門 Trista</p>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>

    <!-- features -->
    <section class="features container mb-5 mb-md-9">
      <div class="row align-items-center justify-content-center mb-md-12">
        <div class="featureDetailUp col-md-5 col-12 order-1 order-md-0 text-md-right text-left my-md-0 my-5 py-md-4 px-md-6 bg-lightOp bg-pure rounded">
          <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-2">
            手工製作
          </p>
          <p class="fz-2 lh-md-1 lh-3 fw-300 mb-0">
            使用臺灣在地新鮮水果，實地走訪農家，了解每一顆水果背後都是農民的心血及驕傲。從產地摘採後 72 小時內製成果醬封罐，讓新鮮直達您的口中。全程手工熬煮，無添加任何香料、色素及防腐劑。
          </p>
        </div>
        <div class="featureImgWrap col-md-5 col-12 order-0 order-md-1 ml-md-2">
          <img class="featureImg rounded" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MWh5ZwgkbPBQCMqwuW5fspJFNvQ9GpuVQcM3XcuFTlWdeg8Iw1lam2ZZIzp685Fb9pqsIuyn4t3QrS4OLXm7AGlmE0a4LaEM2B8vuOV4vEt5zwm8LRYxPCYyx6PeUVT1.jpg" alt="featureImg">
        </div>
      </div>

      <div class="row align-items-center justify-content-center">
        <div class="featureImgWrap col-md-5 col-12 mr-md-2">
          <img class="featureImg rounded" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ULVqow359EWdAK5wmDbBvGKOr02tAlQlChcVxKIjrfz2umGBYzkcCCAz0z4sbrQW1dxSC0eHiVL9AGXp0GPMvDjmDhqkPn9XuhfbAJBFoJI99Fx2sT8AD1R7jcRtqXUb.jpg" alt="featureImg">
        </div>
        <div class="featureDetailDown col-md-5 col-12 text-left my-md-0 my-5 py-md-4 px-md-6 bg-lightOp bg-pure rounded">
          <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-2">
            健康減糖
          </p>
          <p class="fz-2 lh-md-1 lh-3 fw-300 mb-0">
            如同照顧家人般，照顧您的健康。<br>自己敢吃的才敢與您分享，玫希手工果醬採用減糖配方，選用天然果糖及甜菊糖，並保留豐富果肉，讓您每一口都吃的到健康天然的美味。
          </p>
        </div>
      </div>
    </section>

    <!-- 訂閱電子報 -->
    <Parallax />
  </div>
</template>

<script>
import Parallax from '@/components/Front/Parallax'

export default {
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        speed: 900,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }
      }
    }
  },
  components: {
    Parallax
  }
}
</script>
