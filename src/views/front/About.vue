<template>
  <div class="about">
    <!-- story -->
    <section class="container-fluid position-relative mb-5 mb-md-9 py-md-5">
      <div class="row justify-content-start">
        <div class="storyImg bg-cover col-md-6 col-12 position-absolute"></div>
      </div>
      <div class="container">
        <div class="storyTxt row text-left justify-content-end mt-md-0">
          <div class="col-md-6 col-12 pl-md-5">
            <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-7">Merci à vous ! <br>將所有美好<br>濃縮進小小的果醬罐裡</p>
            <p class="fz-2-1 lh-md-1 lh-3">玫希 (Merci) 在法文中是表達感謝的禮貌用語。對於創辦人而言，感謝感恩是一份責任、一種生活態度以及生活方式。
              <br>
              <br>創辦人曾經於法國品嚐到由法國媽媽親手烹煮的果醬。
                手工果醬比起市售果醬，更多了一種溫度以及幾份幸福感。
                玫希運用台灣在地水果，手工熬煮出無添加、減糖且保有果肉的天然水果醬。
                讓您在玫希的陪伴下，活力充沛的展開每一天。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- features -->
    <section class="features container mb-5 mb-md-9">
      <div class="row align-items-center justify-content-center mb-md-4">
        <div class="col-md-5 col-12 order-1 order-md-0 text-md-right text-left mt-md-0 mt-2">
          <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">
            手工製作
          </p>
          <p class="fz-2-1 lh-md-1 lh-3">
            使用台灣在地新鮮水果，從產地直達您的口中。<br>全程手工熬煮，無添加任何香料色素及防腐劑。
          </p>
        </div>
        <div class="col-md-5 col-12 order-0 order-md-1">
          <img class="featureImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/handmade.jpg" alt="featureImg">
        </div>
      </div>

      <div class="row align-items-center justify-content-center">
        <div class="col-md-5 col-12 mt-2">
          <img class="featureImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/lessSugar.jpg" alt="featureImg">
        </div>
        <div class="col-md-5 col-12 text-left mt-md-0 mt-2">
          <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">
            健康減糖
          </p>
          <p class="fz-2-1 lh-md-1 lh-3">
            如同照顧家人般，照顧您的健康。<br>自己敢吃的才敢與您分享，玫希手工果醬採用減糖配方，並保留豐富果肉，讓您每一口都吃的到健康天然的美味。
          </p>
        </div>
      </div>
    </section>
  <Parallax />
  </div>
</template>

<script>
import Parallax from '../../components/Front/Parallax'

export default {
  data () {
    return {}
  },
  components: {
    Parallax
  }
}
</script>
