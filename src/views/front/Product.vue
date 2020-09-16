<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>
      <div class="row align-items-center">
        <div class="col-md-7">
          <!-- 商品圖片輪播 -->
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner rounded">
              <div class="carousel-item active">
                <img :src="product.imageUrl[0]" class="d-block w-100 h-500 obj-c rounded" alt="productImg">
              </div>
              <div class="carousel-item">
                <img :src="product.imageUrl[1]" class="d-block w-100 h-500 obj-c rounded" alt="productImg">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <!-- 麵包屑 -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 pt-md-0 mb-0">
              <li class="breadcrumb-item"><router-link to="/index" class="text-muted fw-300">首頁</router-link></li>
              <li class="breadcrumb-item"><router-link to="/products" class="text-muted fw-300">產品一覽</router-link></li>
              <li class="breadcrumb-item text-secondary fw-300" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <!-- 商品資料 -->
          <h2 class="fw-bold h1 mb-2 letter-space-3">{{ product.title }}</h2>
          <div class="fw-300">
            <p v-html="product.content" class="fz-2"></p>
          </div>
          <p class="mb-0 text-muted text-right"><del>{{ product.origin_price | money }}</del></p>
          <p class="h4 font-weight-bold text-right">{{ product.price | money }}</p>
          <div class="d-flex align-items-center mb-md-8 mb-6">
            <div class="input-group my-3 mr-2 bg-light rounded-50">
              <div class="input-group-prepend">
                <button @click.prevent="product.num = (product.num - 1)" :disabled="product.num === 1" class="btn btn-outline-primary border-0 py-2 rounded-50" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="number" :disabled="product.num === 1" class="form-control border-0 text-center my-auto shadow-none bg-light"
              v-model.number="product.num" >
              <div class="input-group-append">
                <button @click.prevent="product.num = (product.num + 1)" class="btn btn-outline-primary border-0 py-2 rounded-50" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <a @click.prevent="addToCart(product, product.num)" :disabled="isProcessing" class="btn btn-primary btn-block py-2 rounded-50 letter-space-3">
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>加入購物車
              </a>
          </div>

          <!-- notice -->
          <div class="fw-300">
            <p class="fz-2 pb-1 mb-0">消費滿 NT $1,500，享有免運費優惠</p>
            <p class="fz-2 pb-1 mb-0">[付款] 信用卡(一次付清)、貨到付款、ATM 轉帳</p>
            <p class="fz-2 pb-0 mb-0">[運送] 黑貓低溫宅配、工作室自取</p>
          </div>
        </div>

        <!-- 產品資訊 -->
        <div class="col-12 mt-5 mt-md-9 mb-md-0 mb-5">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">產品資訊</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="FAQ-tab" data-toggle="tab" href="#FAQ" role="tab" aria-controls="FAQ" aria-selected="false">常見問題</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active mx-2 mt-10" id="description" role="tabpanel" aria-labelledby="description-tab">
              <p class="fz-3 text-primary fw-bold mb-4">產品詳細資訊</p>
              <p v-html="product.description" class="fz-2 fw-300"></p>
            </div>
            <div class="tab-pane fade mx-2 mt-10" id="FAQ" role="tabpanel" aria-labelledby="FAQ-tab">
              <p class="fz-3 text-primary fw-bold mb-4">產品常見問題</p>
              <!-- Q1 -->
              <p class="fz-2 fw-300 text-primary mb-2">果醬和糕點可以存放多久？</p>
              <p class="fz-2 fw-300 text-text pb-4 mb-4 bd-bottom">玫希的所有產品皆無添加防腐劑，開封後請放入冰箱冷藏。糕點及餅乾最佳賞味期限為三天，果醬類開封後最佳賞味期為三個禮拜，提醒您在最佳賞味期限內品嚐，才能確保享用到他最美好的滋味喔！</p>
              <!-- Q2 -->
              <p class="fz-2 fw-300 text-primary mb-2">果醬有額外添加香料嗎？</p>
              <p class="fz-2 fw-300 text-text pb-4 mb-4 bd-bottom">手工果醬所有的風味都來自水果本身的特色，絕無額外添加香料或香精。我們堅持以最原始的方始提供您最天然的風味，包準會讓您重新愛上水果的自然甜美。</p>
              <!-- Q3 -->
              <p class="fz-2 fw-300 text-primary mb-2">原料都是有機的嗎？</p>
              <p class="fz-2 fw-300 text-text pb-4 mb-4 bd-bottom">我們並沒有特別選用有機栽種作物，但所有水果及原料都是創辦人親自探訪原產地，深入了解生產過程，並與生產者多次來回對談協商後才會決定採用。為的就是不要讓消費者被某些冠上「有機」兩字的產品、但實際品質卻不好的東西所迷惑。創辦人親自挑選的原料，我們有信心能讓所有人吃的最安心。</p>
              <!-- Q4 -->
              <p class="fz-2 fw-300 text-primary mb-2">食用果醬時有哪些注意事項？</p>
              <p class="fz-2 fw-300 text-text pb-4 mb-4 bd-bottom">挖取果醬時請使用乾燥的器具挖取，以防水氣進入容易造成果醬發霉變質。若開封後果醬在氣溫較高的環境下放置過一段時間，請在食用前先挖一點點來確認是否有發霉或發酵的狀況產生，若有上述情況發生，請避免食用。</p>
              <!-- Q5 -->
              <p class="fz-2 fw-300 text-primary mb-2">下單後多久會收到？</p>
              <p class="fz-2 fw-300 text-text pb-4 mb-4 bd-bottom">為了能讓顧客品嘗到最新鮮的美味，玫希的所有手工果醬及糕點都是下單後才開始製作。一般來說，下單後約兩週內可以送達，若訂單數量超過 10 罐以上，我們會另外聯繫您告知預計送達時間。</p>
            </div>
          </div>
        </div>

        <!-- more products -->
        <div class="moreProducts col-12 my-5 my-md-9">
          <div class="d-flex justify-content-center">
            <p class="moreProductsTitle d-inline-block position-relative mb-1 fz-3 text-primary fw-bold pb-md-0 mb-md-5 text-center">您可能也會喜歡</p>
          </div>
          <RelatedProducts :product="product" @update="getProduct" />
        </div>
      </div>
    </div>
</template>

<script>
import RelatedProducts from '@/components/Front/RelatedProducts'
import Toast from '@/utils/toast'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      product: {
        num: 1,
        imageUrl: []
      },
      isLoading: false,
      isProcessing: false
    }
  },
  components: {
    RelatedProducts
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.status.loadingItem = ''
          this.product = {
            ...res.data.data,
            num: 1
          }
          this.isLoading = false
          console.log(this.product)
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料',
            icon: 'error'
          })
          this.isLoading = false
        })
    },
    addToCart (item, num) {
      this.status.loadingItem = item.id
      this.isProcessing = true
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity: num
      }
      console.log(cart)
      this.$http.post(api, cart)
        .then(() => {
          this.$bus.$emit('update-total')
          Toast.fire({
            title: '加入購物車成功',
            icon: 'success'
          })
          this.status.loadingItem = ''
          this.isProcessing = false
          this.isLoading = false
        })
        .catch((err) => {
          const errMsg = err.response.data.errors
          if (errMsg) {
            Toast.fire({
              title: `${errMsg}`,
              icon: 'warning'
            })
            this.status.loadingItem = ''
            this.isProcessing = false
            this.isLoading = false
          }
        })
    }
  }
}
</script>
