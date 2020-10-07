<template>
  <div class="cartModal">
    <loading :active.sync="isLoading"></loading>
    <div class="container d-flex justify-content-center">
      <div class="col-md-7 col-12 mt-5" v-if=" carts.length > 0">
        <h5 class="modal-title fz-3 fz-md-6 lh-4 fw-bold textColor">購物清單</h5>
          <ul v-for="item in carts" :key="item.product.id + 1" class="buylist mb-3">
            <li class="d-flex flex-column mb-1">
              <div class="cartMain d-flex p-2 bg-light align-items-center rounded-top">
                <img class="buylistImg w-40 rounded" :src="item.product.imageUrl[0]" alt="buylistImg">
                <div class="buylistContent bg-light w-100 p-md-2 py-2 pl-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="cartTxt">
                      <p class="fz-2 fz-md-3-1 mb-0 pl-md-2 fw-bold textColor">{{ item.product.title }}</p>
                      <p class="fz-1-1 fz-md-2 mb-0 pl-md-2 text-dark">{{ item.product.origin_price | money }} / {{ item.product.unit }}</p>
                    </div>
                    <a @click.prevent="delCartItem(item.product.id)" class=" textColor"><i class="fas fa-times"></i></a>
                  </div>
                </div>
              </div>
              <div class="quantityArea d-flex justify-content-between align-items-center bg-light p-md-2 px-2 pb-2 rounded-bottom">
                <div class="bg-gray-light rounded w-50 d-flex justify-content-between align-items-center text-left border border-smallLink rounded-pill">
                  <a @click.prevent="updateQuantity(item.product.id, item.quantity - 1)" :disabled="item.quantity <= 1" class="cursor-p p-1"><i class="fas fa-minus"></i></a>
                  <input type="number" :disabled="item.quantity <= 1" class="form-control border-0 text-center my-auto shadow-none bg-light"
                  @change="updateQuantity(item.product.id, $event.target.value)" :value="item.quantity">
                  <a @click.prevent="updateQuantity(item.product.id, item.quantity + 1)" class="cursor-p p-1"><i class="fas fa-plus"></i></a>
                </div>
                <p class="w-50 fz-2 fz-md-3-1 mb-0 text-right fw-bold textColor">金額 {{ (item.product.price * item.quantity) | money }}</p>
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

      <div v-else class="col-12 my-5 my-md-1">
        <div class="d-flex justify-content-center align-items-center flex-column v-100">
          <img class="ideaImg" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/fParBbJ6JQm3SeEg3PBISE9OL4CSnibrVJRSzdx2uAnIIyAdPs0eg0q8bL7KIZBDOa8ziHusck7sGNMQmFlWkYtGai4OrHU5gRte8CKOAxyyN3T6Yy8yop0JZn1dN44Q.svg" alt="ideaImg">
          <h3 class="my-5 lh-1 fz-3 fw-400 text-center">您的購物車是空的，<br>趕快放入喜歡的商品吧！</h3>
          <div class="fillBtn text-center mb-3 w-30">
            <router-link to="/products" class="d-block px-5 py-2">繼續購物</router-link>
          </div>
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
          this.$bus.$emit('get-cart')
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
