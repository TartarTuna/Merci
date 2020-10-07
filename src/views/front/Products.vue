<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <!-- banner -->
    <section class="productsBanner"></section>

    <div class="container" v-if=" products.length > 0">
      <!-- 分類標題 -->
      <div class="categoryTitleArea py-3">
        <p class="mb-0 f-Serif fw-600 fz-5 fz-md-7 text-primaryOp text-center letter-space-4" v-if="filterCategory">
          {{ filterCategory }}
        </p>

        <p class="mb-0 f-Serif fw-600 fz-5 fz-md-7 text-primaryOp text-center letter-space-4" v-else>所有商品</p>
        <p class="f-Serif fz-2 fw-300 text-primary text-center mb-md-6 mb-4 letter-space-3">全天然純手工，美味也能吃得健康無負擔</p>
      </div>

      <!-- 分類按鈕 -->
      <section class="categoryBtns mb-3">
        <ul class="categories d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
          <li class="categoryItem bd-b-sm rounded-md-top" >
            <a href="#" @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }">
              <i class="categoryIcon fas fa-seedling rounded-md-top" @click.prevent="selected = filterCategory" :class="{ activeEffect: filterCategory === '' }"> 所有商品</i>
            </a>
          </li>
          <li class="categoryItem bd-b-sm rounded-md-top">
            <a href="#" @click.prevent="filterCategory = '果醬'" :class="{ active: filterCategory === '果醬' }">
              <i class="categoryIcon fas fa-apple-alt rounded-md-top" @click.prevent="selected = filterCategory" :class="{ activeEffect: filterCategory === '果醬' }"> 果醬</i>
            </a>
          </li>
          <li class="categoryItem bd-b-sm rounded-md-top">
            <a href="#" @click.prevent="filterCategory = '餅乾'" :class="{ active: filterCategory === '餅乾' }">
              <i class="categoryIcon fas fa-cookie-bite rounded-md-top"  @click.prevent="selected = filterCategory" :class="{ activeEffect: filterCategory === '餅乾' }"> 餅乾</i>
            </a>
          </li>
          <li class="categoryItem bd-b-sm rounded-md-top">
            <a href="#" @click.prevent="filterCategory = '糕點'" :class="{ active: filterCategory === '糕點' }">
              <i class="categoryIcon fas fa-birthday-cake rounded-md-top" @click.prevent="selected = filterCategory" :class="{ activeEffect: filterCategory === '糕點' }"> 糕點</i>
            </a>
          </li>
          <li class="categoryItem rounded-md-top">
            <a href="#" @click.prevent="filterCategory = '優惠套組'" :class="{ active: filterCategory === '優惠套組' }">
              <i class="categoryIcon fas fa-gift rounded-md-top" @click.prevent="selected = filterCategory" :class="{ activeEffect: filterCategory === '優惠套組' }"> 優惠套組</i>
            </a>
          </li>
        </ul>
      </section>

      <!-- 產品列表 -->
      <div class="productList">
        <ul class="productCards flex-md-row flex-column">
          <li class="productCard" v-for="item in filterCategories" :key="item.id">
            <router-link :to="`/product/${item.id}`" class="productInfo">
              <div class="productImgWrap">
                <div class="productImg" :style="{backgroundImage: `url(${item.imageUrl[0]})`}"></div>
              </div>
            </router-link>
            <p class="productTitle mt-2 mb-1">{{ item.title }}</p>
            <div class="productPrice">
              <del class="delPrice">原價 ${{ item.origin_price }}</del>
              <span class="salePrice">特價 ${{ item.price }}</span>
            </div>
            <a class="addCartBtn" @click.prevent="addToCart(item.id)" :disabled="isProcessing">
              <i class="fas fa-spinner fa-spin" v-if="item.id === status.loadingItem"></i>加入購物車
              </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/toast'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      products: [],
      categories: ['果醬', '餅乾', '糕點', '優惠套組'],
      filterCategory: '',
      isLoading: false,
      isProcessing: false,
      selected: ''
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.products = res.data.data
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterCategory = categoryName
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
    addToCart (id, quantity = 1) {
      this.status.loadingItem = id
      this.isProcessing = true
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.post(api, cart)
        .then(() => {
          this.$bus.$emit('update-total')
          this.$bus.$emit('get-cart')
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
  },
  computed: {
    filterCategories () {
      if (this.filterCategory) {
        return this.products.filter(item => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase())
          return data
        })
      }
      return this.products
    }
  }
}
</script>
