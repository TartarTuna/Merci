<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('newProduct')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price }}
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('editProduct', item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('deleteProduct', item)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁按鈕 -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>

    <!-- 新增和修改彈窗 -->
    <ProductModal ref="productModal" :isNew="isNew" @update="getProducts" />

    <!--刪除彈窗 -->
    <DelProductModal :temp-product="tempProduct" @update="getProducts" />
  </div>
</template>

<script>
import Toast from '@/utils/toast'
import Pagination from '@/components/Pagination'
import ProductModal from '@/components/backed/ProductModal'
import DelProductModal from '@/components/backed/DelProductModal'
/* global $ */

export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imageUrl: []
      },
      pagination: {},
      isNew: true,
      status: {
        fileUploading: false
      },
      isLoading: false
    }
  },
  components: {
    Pagination,
    ProductModal,
    DelProductModal
  },
  created () {
    this.getProducts()
  },
  methods: {
    // 頁碼預設為第一頁
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        this.isLoading = false
        this.products = res.data.data
        this.pagination = res.data.meta.pagination // 取得分頁資訊
      })
        .catch(() => {
          this.isLoading = false
          Toast.fire({
            title: '無法取得資料',
            icon: 'error'
          })
        })
    },
    openModal (mode, item) {
      switch (mode) {
        case 'newProduct':
          this.isNew = true // 變換modal標題
          // 清空內容
          this.$refs.productModal.tempProduct = {
            imageUrl: []
          }
          $('#productModal').modal('show')
          break
        case 'editProduct':
          this.isNew = false // 變換modal標題
          this.$refs.productModal.getSingleProduct(item.id) // 用取得單一產品資訊的函式取得資料
          break
        case 'deleteProduct':
          this.tempProduct = { ...item } // 用淺拷貝拷貝item
          $('#delModal').modal('show')
          break
        default:
          break
      }
    }
  }
}
</script>
