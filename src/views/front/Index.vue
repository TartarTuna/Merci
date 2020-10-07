<template>
  <div class="index">
    <!-- banner -->
    <section class=" mb-md-9 mb-5">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <router-link to="/products">
              <img src="@/assets/banner1.svg" alt="banner1" class="bannerImg">
            </router-link>
          </swiper-slide>

          <swiper-slide>
            <router-link to="/product/udw4Ah8ycIiJVqMz8XS4PMciDEvgEV8oT38lzlh1K94U1EFuSBuzOv5eyn2VZ34n">
              <img src="@/assets/banner2.svg" alt="banner2" class="bannerImg">
            </router-link>
          </swiper-slide>

          <swiper-slide>
            <router-link to="/product/BWgwmZy97a9nnSUwKrDBQhlkAOgXbDtZ5iF5vyyd3u1Ent6iBkT7fkHaIXoTJQxj" class="allBanner bannerGift">
              <img src="@/assets/banner3.svg" alt="banner3" class="bannerImg">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>

      <!-- story -->
      <section class="container position-relative mb-11 mb-md-26 py-md-5 px-0">
        <div class="row container justify-content-start d-none d-md-block">
          <div class="indexAboutImg bg-cover rounded col-md-7 col-12 position-absolute"></div>
        </div>
        <div class="row container text-left justify-content-end mt-md-0" data-aos="fade-left">
          <div class="aboutTxt col-md-6 col-12 rounded py-md-7 px-md-7 mt-md-12 mt-0 text-justify">
            <h1 class="f-Serif fw-600 fz-5 text-primaryOp text-left letter-space-4 mt-2 d-block d-md-none">關於玫希</h1>
            <p class="f-Serif fz-2 fw-300 text-primary text-left mb-md-4 mb-2 letter-space-3 d-block d-md-none">一段從感動開啟的新人生</p>
            <p class="fz-3 fz-md-4 fw-bold text-primary letter-space-3 mb-0 d-none d-md-block">關於玫希</p>
            <p class="fz-2 fw-300 text-primarySm letter-space-3 d-none d-md-block">一段從感動開啟的新人生</p>
            <p class="fz-2 fw-300 lh-3">創辦人曾經於法國品嚐到由法國媽媽親手烹煮的果醬。
              手工果醬比起市售果醬，更多了一種溫度以及幾份幸福感。</p>
            <p class="fz-2 fw-300 lh-3 mb-3">
              玫希運用台灣在地水果，手工熬煮出無添加、減糖且保有果肉的天然水果醬。
              讓您在玫希的陪伴下，活力充沛的展開每一天。</p>
            <router-link to="/about" class="storyLink fz-2 fz-md-3">更多故事</router-link>
          </div>
        </div>
      </section>

      <!--category -->
      <div class="container">
        <h1 class="f-Serif fw-600 fz-5 fz-md-7 text-primaryOp text-right letter-space-4 mt-11 mt-md-17">產品分類</h1>
        <p class="f-Serif fz-2 fw-300 text-primary text-right mb-md-4 mb-2 letter-space-3">天然美味陪伴您每個美好時刻</p>
        <ProductFilter />
      </div>

      <!-- features -->
      <section class="container">
        <h1 class="f-Serif fw-600 fz-5 fz-md-7 text-primaryOp text-left letter-space-4 mt-6 mt-md-12">玫希的堅持</h1>
        <p class="f-Serif fz-2 fw-300 text-primary text-left mb-md-6 mb-4 letter-space-3">用真心溫暖每個人</p>

        <div class="mb-3 mb-md-2 d-flex flex-md-row flex-column">
          <div class="rounded w-md-60 mr-md-2 mb-3 mb-md-0">
            <img class="featureImg obj-c rounded" src="https://images.unsplash.com/photo-1528751759124-8e326442575c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="featureImg">
          </div>
          <div class="featureContents d-flex flex-column justify-content-center align-items-center text-left bg-lightest rounded px-md-4 p-3">
            <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">全程手工製作</p>
            <p class="fz-2 lh-3 fw-300 mb-0 text-justify">每一罐果醬及每一塊糕點，玫希團隊的每位員工都將它當作是一生只有一次的機會ㄧ樣，全心全意希望給您最佳美味。
              希望每位客人能夠因美味的食物露出笑容、並從中獲得慰藉，讓玫希陪伴您在繁忙生活中能夠喘口氣，用美妙的食物撫慰您的身心。</p>
            <div class="featureBtn container d-flex justify-content-center mt-md-3 mt-4">
              <router-link to="/products" class="storyLink fz-2 fz-md-3">挑選商品</router-link>
            </div>
          </div>
        </div>
        <div class="mb-3 mb-md-2 d-flex flex-md-row flex-column">
          <div class="featureContents d-flex flex-column justify-content-center align-items-center text-left bg-lightest rounded mr-md-2 px-md-4 p-3 order-md-1 order-2">
            <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">使用在地鮮果</p>
            <p class="fz-2 lh-3 fw-300 mb-0 text-justify">生於臺灣、回饋於臺灣。
              <br>創辦人熱愛臺灣在地出產的水果，希望經由果醬的甜蜜滋味將臺灣農產的美味及精彩成果讓全世界知道。藉由親自探訪農戶交流並爭取合作，玫希決心要用一罐罐自然無添加的果醬，將水果王國的美好行銷世界。</p>
            <div class="featureBtn container d-flex justify-content-center mt-md-3 mt-4">
              <router-link to="/products" class="storyLink fz-2 fz-md-3">挑選商品</router-link>
            </div>
          </div>
          <div class="rounded w-md-60 order-md-2 order-1">
            <img class="featureImg obj-c rounded mb-3 mb-md-0" src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="featureImg">
          </div>
        </div>
        <div class="mb-3 mb-md-2 d-flex flex-md-row flex-column">
          <div class="rounded w-md-60 mr-md-2">
            <img class="featureImg obj-c rounded mb-3 mb-md-0" src="https://images.unsplash.com/photo-1596367376034-d0dd49a837eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="featureImg">
          </div>
          <div class="featureContents d-flex flex-column justify-content-center align-items-center text-left bg-lightest rounded px-md-4 p-3">
            <p class="mb-1 fz-3 fz-md-4 text-primary fw-bold pb-md-0 mb-md-3">減糖關心健康</p>
            <p class="fz-2 lh-3 fw-300 mb-0 text-justify">我們堅持只有自己敢吃的，才能製成商品銷售。
              <br>身邊長輩或多或少都有些血糖控制的煩惱，看著長輩們想吃卻又不能吃的狀況實在於心不忍，於是著手改良出代糖及減糖食譜。如同照顧家人健康一般，嘗試出最美味的天然糖食譜，讓您享用美食不用擔心健康。</p>
            <div class="featureBtn container d-flex justify-content-center mt-md-3 mt-4">
              <router-link to="/products" class="storyLink fz-2 fz-md-3">挑選商品</router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- cooperation partners -->
      <section class="container mb-5 mb-md-11">
        <h1 class="f-Serif fw-600 fz-5 fz-md-7 text-primaryOp text-right letter-space-4 mt-11 mt-md-17">合作夥伴</h1>
        <p class="f-Serif fz-2 fw-300 text-primary text-right mb-md-6 mb-4 letter-space-3">珍惜每次相遇用心給予最好</p>

        <swiper class="swiper" :options="swiperOption2">
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/76tTkHcUh2LI0T5FDbG8UlGBd9Un9dCjJu1iKLYsqxNT1EkiKIS2vka3rNl2STeKc15N30KUuElEFTMo6BriHiwk9bcmcXxHIRKFM9FSgPgIcjokDOHWHx1gPYbJTNyL.png" alt="logos">
          </swiper-slide>
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/u82rhqsioeXZAEdrt6k22bodlwks3dZZdKvWK2T7fFHAaNYKqBgyxCrx2Rc3w2g1Jj10JMPTL8spmWynd2Tiu9h4cPWuKRYUbkVUidrY3qyLvlSYZ8qIC3yIbkqKzw3x.png" alt="logos">
          </swiper-slide>
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/TNgieAgZ4tJQVyE9Ag417CbPhYNBZjCsyN5t3wCtdszdnbfv6vAuWm4ZCW4OXKRCMY3v27zqRCcBRN72VKhe69tnFkQCqBeeC4PgTYIAAWxejlK05Ton32j6VT75yEJ5.png" alt="logos">
          </swiper-slide>
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SreaBgAoxAzzyj3vC1POVX5s6uPfGol47TW6O5n67caCT7KYVwaqro3z0N9coKrlcVqPpxqdsw8AW4cKTJ3rdSyN6AEB7EnEtdpVDrdA3izLxgbJ6Ewjleh8nwi3CsmV.png" alt="logos">
          </swiper-slide>
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/H6ycXGSCXMSxYRQtaMpE0VmZ56cE5EXwhgd6xoCLrP4RhPttAHXCYANE4z4FTPD3xY23occRC1VEPgnQXumW9XE0JlqsA3k9mUXKYsOP07wikCa2onepLW3DdUyvazRQ.png" alt="logos">
          </swiper-slide>
          <swiper-slide>
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/r3BwiHlBFzV0aa7IQLQev1Pld4Thmp4BTfqgG8tAVnzmvHsNZxoLWjFU2xyTaT2YoeReY07F2R7BZVHzMy68YeZRES5nbsiZwS5f2mXCi8a3TtRzPBbqj3jVSYMyoBPx.png" alt="logos">
          </swiper-slide>
        </swiper>
      </section>

      <!-- subscribe -->
      <Parallax />

      <!-- find us -->
      <section class="bg-lightest">
        <div class="container pb-4 pb-md-7">
          <h1 class="f-Serif fw-600 fz-5 fz-md-7 text-primary text-left letter-space-4 pt-4 pt-md-7">聯絡我們</h1>
          <p class="f-Serif fz-2 fw-300 text-primarySm text-left mb-md-6 mb-4 letter-space-3">歡迎來工作室直接品嚐美味</p>

          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div class="findUsContent mr-md-4 mb-3 mb-md-0">
              <p class="fz-2 lh-3 fw-300 mb-1 mb-md-3"><span class="text-primarySm">聯絡窗口：</span>Célimène 薩麗曼娜</p>
              <p class="fz-2 lh-3 fw-300 mb-1 mb-md-3"><span class="text-primarySm">電話：</span>0972 000 000</p>
              <p class="fz-2 lh-3 fw-300 mb-1 mb-md-3"><span span class="text-primarySm">E-mail：</span>merciService@cmerci.com.tw</p>
              <p class="fz-2 lh-3 fw-300 mb-1 mb-md-3"><span span class="text-primarySm">地址：</span>新北市蘆洲區三民路 120 號 55 樓</p>
              <p class="fz-2 lh-3 fw-300 mb-1 mb-md-3"><span span class="text-primarySm">開放時間：</span>週一至週五 10:00 – 18:00 (國定假日不開放)</p>
              <div class="findUsIcons">
                <a class="mr-3" href="https://www.facebook.com/cmerci/" target="_blank" title="merciFB">
                  <i class="fab fa-facebook-square text-primary fz-5"></i>
                </a>
                <a class="mr-3" href="https://www.instagram.com/cmerci2019/" target="_blank" title="merciIG">
                  <i class="fab fa-instagram text-primary fz-5"></i>
                </a>
                <a class="mr-3" href="#" target="_blank" title="merciLINE">
                  <i class="fab fa-line text-primary fz-5"></i>
                </a>
              </div>
            </div>

            <div class="findUsMap rounded">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.7150418942606!2d121.47023815800763!3d25.08729869598686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8ca4d533d9d%3A0x6a07176d8617c8b8!2zMjQ35paw5YyX5biC6JiG5rSy5Y2A5LiJ5rCR6LevMTIw6Jmf!5e0!3m2!1szh-TW!2stw!4v1601370590084!5m2!1szh-TW!2stw" width="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </section>

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
      },
      swiperOption2: {
        speed: 900,
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: false,
        autoResize: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        breakpoints: {
          768: {
            slidesPerView: 5
          },
          425: {
            slidesPerView: 3
          }
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
