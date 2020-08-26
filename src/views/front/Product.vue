<template>
    <div class="container">
      <loading :active.sync="isLoading"></loading>
      <div class="row align-items-center">
        <div class="col-md-7">
          <!-- 商品圖片輪播 -->
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl[0]" class="d-block w-100 h-500 obj-c" alt="productImg">
              </div>
              <div class="carousel-item">
                <img :src="product.imageUrl[0]" class="d-block w-100 h-500 obj-c" alt="productImg">
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
              <li class="breadcrumb-item"><router-link to="/index" class="text-muted">首頁</router-link></li>
              <li class="breadcrumb-item"><router-link to="/products" class="text-muted">產品一覽</router-link></li>
              <li class="breadcrumb-item text-secondary" aria-current="page">{{product.title}}</li>
            </ol>
          </nav>
          <!-- 商品資料 -->
          <h2 class="font-weight-bold h1 mb-2">{{product.title}}</h2>
          <div class="">
            <p v-html="product.content" class="fz-2"></p>
          </div>
          <p class="mb-0 text-muted text-right"><del>{{product.origin_price | money}}</del></p>
          <p class="h4 font-weight-bold text-right">{{product.price | money}}</p>
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
            <a @click.prevent="addToCart(product, product.num)" :disabled="isProcessing" class="btn btn-primary btn-block py-2 rounded-50">
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>加入購物車
              </a>
          </div>

          <!-- notice -->
          <div class="">
            <p class="fz-2 pb-1 mb-0">消費滿 NT $1,500，享有免運費優惠</p>
            <p class="fz-2 pb-1 mb-0"><span class="fw-bold">[付款]</span> 信用卡(一次付清)、貨到付款、ATM 轉帳</p>
            <p class="fz-2 pb-0 mb-0"><span class="fw-bold">[運送]</span> 黑貓低溫宅配、工作室自取</p>
          </div>
        </div>

        <!-- 產品資訊 -->
        <div class="col-12 mt-5 mt-md-9 d-flex justify-content-center flex-column">
          <div class="mb-md-9 mb-5">
          <img src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/jamBanner.jpg" alt="contentImg">
          </div>

          <div class="d-flex flex-md-row flex-column justify-content-center mb-5 mb-md-9">
            <div class=" mr-md-11 d-flex flex-column align-items-center mb-md-0 mb-6">
              <h2 class="text-primary letter-space-2 text-center fw-bold">手工製作</h2>
              <img class="featureIcon" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/handMadeIcon.png" alt="featureIcon">
            </div>
            <div class=" mr-md-11 d-flex flex-column align-items-center mb-md-0 mb-6">
              <h2 class="text-primary letter-space-2 text-center fw-bold">在地鮮果</h2>
              <img class="featureIcon" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/fruitsIcon.png" alt="featureIcon">
            </div>
            <div class="d-flex flex-column align-items-center mb-md-0 mb-6">
              <h2 class="text-primary letter-space-2 text-center fw-bold">健康減糖</h2>
              <img class="featureIcon" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/lessSugarIcon.png" alt="featureIcon">
            </div>
          </div>

          <div class="innerBanner">
            <h1 class="text-primary letter-space-1 fw-bold">用心做到最好</h1>
            <h3 class="text-secondary letter-space-1 fw-bold">美味如影隨形</h3>
          </div>
        </div>

        <!-- more products -->
        <div class="moreProducts col-12 mt-5 mt-md-9">
          <div class="moreProductsTitle position-relative">
            <p class="mb-1 fz-3 text-primary fw-bold pb-md-0 mb-md-5 text-center">您可能也會喜歡</p>
          </div>
          <RelatedProducts :product="product" @update="getProduct" />
        </div>
      </div>
    </div>
</template>

<script>
import RelatedProducts from '../../components/Front/RelatedProducts'
import Toast from '../../utils/toast'

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
          }
        })
    }
  }
}
</script>
