<template>
  <div class="cartModal">
    <loading :active.sync="isLoading"></loading>
    <div class="container row justify-content-center">
      <div class="col-md-7 col-11 mt-md-5" v-if=" carts.length > 0">
        <h5 class="modal-title fz-3 fz-md-6 lh-4 fw-bold textColor">購物清單</h5>
          <ul v-for="item in carts" :key="item.product.id + 1" class="buylist mb-3">
            <li class="d-flex mb-1">
              <img class="buylistImg w-40" :src="item.product.imageUrl[0]" alt="buylistImg">
                <div class="buylistContent bg-light w-100 p-1 p-md-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="fz-2 lh-2 mb-3 fw-bold textColor">{{ item.product.title }}</p>
                    <a @click.prevent="delCartItem(item.product.id)" class=" textColor"><i class="fas fa-times"></i></a>
                  </div>
                  <div class="goodPriceArea">
                    <span class="goodsAcount mr-1 fz-md-2 alertTxt">{{ item.product.price | money }}</span>
                    <del class="goodsPrice smallLink">{{ item.product.origin_price | money }}</del>
                  </div>
                  <div class="quantityArea d-flex justify-content-between align-items-center">
                    <div class="bg-gray-light rounded w-30 d-flex justify-content-between align-items-center text-left">
                      <a @click.prevent="updateQuantity(item.product.id, item.quantity - 1)" :disabled="item.quantity <= 1" class="cursor-p"><i class="fas fa-minus"></i></a>
                      <input type="number" :disabled="item.quantity <= 1" class="form-control border-0 text-center my-auto shadow-none bg-light"
                      @change="updateQuantity(item.product.id, $event.target.value)" :value="item.quantity">
                      <a @click.prevent="updateQuantity(item.product.id, item.quantity + 1)" class="cursor-p"><i class="fas fa-plus"></i></a>
                    </div>
                    <div class="w-50 text-right fw-bold textColor">{{ (item.product.price * item.quantity) | money }}</div>
                  </div>
                </div>
            </li>
          </ul>

          <div class="priceDetail mb-3">
            <div class="d-flex justify-content-between">
              <p class="alertTxt">小計</p>
              <p class="alertTxt">{{ totalPrice | money }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="alertTxt">運費</p>
              <p class="alertTxt">NT $80</p>
            </div>
          </div>
          <div class="priceTotal d-flex justify-content-between mb-md-3">
            <p class="fz-3 lh-4 fw-bold textColor">總計</p>
            <p class="fz-3 lh-4 fw-bold textColor">{{ (totalPrice + 80) | money }}</p>
          </div>
          <div class="d-md-flex mb-2 flex-md-row-reverse align-items-center justify-content-md-between w-md-100 mb-md-1 pb-md-4">
              <div class="fillBtn text-center w-40">
                  <router-link to="/paymentTable" class="d-block px-5 py-2">前往結帳</router-link>
              </div>
              <router-link to="/products" class="primary text-center d-block my-3">
                  <i class="returnIcon fas fa-angle-left"></i>
                  <span> 繼續購物</span>
              </router-link>
          </div>

      </div>

      <div v-else class="col-12 d-flex justify-content-center align-items-center flex-column">
        <h3 class="my-5 lh-1 fz-3 fw-400">您的購物車是空的，<br>趕快放入喜歡的商品吧！</h3>
        <div class="fillBtn text-center mb-3 w-30">
          <router-link to="/products" class="d-block px-5 py-2">繼續購物</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/toast'

export default {
  data () {
    return {
      carts: {},
      totalPrice: 0,
      isLoading: false
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.carts = res.data.data
          this.updateTotal()
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          Toast.fire({
            title: '購物車讀取失敗',
            icon: 'error'
          })
        })
    },
    updateTotal () {
      let total = 0
      this.carts.forEach(item => {
        total += item.product.price * item.quantity
      })
      this.totalPrice = total
    },
    updateQuantity (id, quantity) {
      if (quantity <= 0) {
        return
      }
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.patch(api, cart)
        .then(() => {
          this.getCart()
          Toast.fire({
            text: '更新成功',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          Toast.fire({
            title: '更新失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    },
    delCartItem (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(api)
        .then(() => {
          this.updateTotal()
          this.getCart()
          Toast.fire({
            text: '刪除成功',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          Toast.fire({
            text: '刪除失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    }
  }
}
</script>
