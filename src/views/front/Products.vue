<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <!-- banner -->
    <section class="productsBanner mb-md-9 mb-5"></section>

    <div class="container" v-if=" products.length > 0">
      <!-- 分類按鈕 -->
      <section class="categoryBtns">
        <ul class="categories d-flex flex-column flex-md-row justify-content-center align-items-center text-center">
          <li class="categoryItem mb-2" >
            <a href="#" @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }">所有商品</a>
          </li>
          <li class="categoryItem mb-2" v-for="item in categories" :key="item">
            <a href="#" @click.prevent="filterCategory = item" :class="{ active: item === filterCategory }">{{item}}</a>
          </li>
        </ul>
      </section>

      <!-- 產品列表 -->
      <div class="productList">
        <ul class="productCards flex-md-row flex-column">
          <li class="productCard" v-for="item in filterCategories" :key="item.id">
            <router-link :to="`/product/${item.id}`" class="productInfo">
              <div class="productImg" :style="{backgroundImage: `url(${item.imageUrl[0]})`}"></div>
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

    <!-- 分頁 -->
      <div class="d-flex justify-content-center">
        <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../../utils/toast'
import Pagination from '../../components/Pagination'

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
      pagination: {}
    }
  },
  components: {
    Pagination
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
          this.pagination = res.data.meta.pagination
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
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
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
