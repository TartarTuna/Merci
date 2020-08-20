<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <!-- banner -->
    <section class="productsBanner mb-md-9 mb-5"></section>

    <div class="container" v-if=" products.length > 0">
      <!-- 分類按鈕 -->
      <section class="categoryBtns">
        <ul class="categories d-flex justify-content-center">
          <li class="categoryItem active" >
            <a href="#" @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }">所有商品</a>
          </li>
          <li class="categoryItem active" v-for="item in categories" :key="item">
            <a href="#" @click.prevent="filterCategory = item" :class="{ active: item === filterCategory }">{{item}}</a>
          </li>
        </ul>
      </section>

      <!-- 產品列表 -->
      <div class="productList">
        <ul class="productCards">
          <li class="productCard" v-for="item in products" :key="item.id">
            <a class="productInfo" @click="getProduct(item.id)" :disable="status.loadingItem === item.id">
              <div class="productImg" :style="{backgroundImage: `url(${item.imageUrl[0]})`}"></div>
            </a>
            <p class="productTitle">{{ item.title }}</p>
            <div class="productPrice">
              <del class="delPrice">原價 ${{ item.origin_price }}</del>
              <span class="salePrice">特價 ${{ item.price }}</span>
            </div>
            <a class="addCartBtn" @click="addToCart(item.id)">加入購物車</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import Toast from '../../utils/toast'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      products: [],
      categories: ['果醬', '餅乾', '糕點', '優惠套組'],
      filterCategory: '',
      isLoading: false
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.products = res.data.data
          const { categoryName } = this.$router.params
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
}
</script>
