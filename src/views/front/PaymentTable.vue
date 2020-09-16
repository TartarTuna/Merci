<template>
    <section class="container my-2">
      <loading :active.sync="isLoading"></loading>
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-wrap w-100">
                    <!--productDetails -->
                    <div class="productDetailCollapse w-100 mb-3 col-12 col-md-5 order-md-2">
                        <div class="collapseHeader btn bg-light fz-2 lh-3 d-md-none d-block d-flex justify-content-between"
                            data-toggle="collapse" href="#multiCollapse" role="button" aria-expanded="false"
                            aria-controls="multiCollapseExample1">
                            <span>訂單金額</span>
                            <div class="d-flex align-items-center">
                                <span class="totalSpan mr-1">{{ (totalPrice + 80) | money }}</span>
                                <i class="returnIcon fas fa-angle-down"></i>
                            </div>
                        </div>

                        <!--productDetailContent -->
                        <div class="collapse multi-collapse p-2 bg-light d-md-block" id="multiCollapse">
                            <div class="card card-body infoBox p-0 border-0 bg-light">
                                <ul v-for="item in carts" :key="item.product.id + 1" class="pb-2 mb-2 border-bottom">
                                    <li class="mb-1 d-flex justify-content-between">
                                        <img :src="item.product.imageUrl[0]" alt="cartImg">
                                        <div class="ml-2 d-flex justify-content-between align-items-center w-100">
                                            <p class="fz-2 lh-4 fw-bold m-0 w-40">{{ item.product.title }}</p>
                                            <span class="w-30 text-center">x {{ item.quantity }}</span>
                                            <p class="fz-2 lh-4 m-0 w-30 text-right">{{ item.product.price | money }}</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="pb-2 mb-2 border-bottom">
                                    <li class="d-flex justify-content-between">
                                        <span class="fz-2 lh-4">小計</span>
                                        <span class="fz-2 lh-4">{{ totalPrice | money }}</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span class="fz-2 lh-4">運費</span>
                                        <span class="fz-2 lh-4">NT$80</span>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-between">
                                    <span class="fz-3 lh-4 fw-bold">總計</span>
                                    <span class="fz-3 lh-4 fw-bold">{{ (totalPrice + 80) | money }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 order-md-1">
                        <!--paymentProcessBar -->
                        <nav aria-label="processBreadcrumb order-md-1">
                            <ol class="breadcrumb bg-transparent p-0">
                                <li class="breadcrumb-item lightest">購物車</li>
                                <li class="breadcrumb-item textLight fw-bold">付款資訊</li>
                                <li class="breadcrumb-item primary">完成</li>
                            </ol>
                        </nav>
                        <!--customerInfo -->
                        <validation-observer v-slot="{ invalid }" class="customerInfo w-100">
                          <form @submit.prevent="createOrder()">
                            <div class="form-group">
                              <validation-provider rules="required|email" v-slot="{ errors, classes}">
                                <label class="formGroupLabel" for="Email">聯絡資訊</label>
                                <input v-model.trim="form.email" type="email" class="p-2 w-100 bd-round-4" :class="classes"
                                    id="email" name="email" aria-describedby="emailHelp" placeholder="電子信箱">
                                <span class="invalid-feedback">{{ errors[0] }}</span>
                              </validation-provider>
                            </div>
                            <div class="form-group mb-1">
                                <label class="formGroupLabel" for="orderName">寄件地址</label>
                                <div class="form-group d-flex flex-column flex-md-row justify-content-between mb-0">
                                  <div class="w-md-49">
                                    <validation-provider rules="required" v-slot="{ errors, classes}">
                                    <input v-model.trim="form.name" class="p-2 w-100 bd-round-4 mb-1" :class="classes" type="text"
                                      id="orderName" name="姓名" placeholder="姓名">
                                    <p class="invalid-feedback">{{ errors[0] }}</p>
                                    </validation-provider>
                                  </div>

                                  <div class="w-md-49">
                                    <validation-provider rules="required|min:8" v-slot="{ errors, classes}">
                                    <label for="tel"></label>
                                    <input v-model.trim="form.tel" class="p-2 w-100 bd-round-4 mb-md-1" :class="classes" type="tel"
                                      id="tel" name="電話" placeholder="電話">
                                    <p class="invalid-feedback">{{ errors[0] }}</p>
                                  </validation-provider>
                                  </div>
                                </div>
                            </div>
                            <div class="form-group d-flex flex-column flex-md-row d-block flex-wrap">
                                <div class="form-group w-100">
                                  <validation-provider rules="required" v-slot="{ errors, classes}">
                                    <label class="formGroupLabel" for="exampleInputAddress1"></label>
                                    <input v-model.trim="form.address" type="text" class="p-2 w-100 bd-round-4" :class="classes"
                                      id="address" name="地址" placeholder="地址">
                                    <span class="invalid-feedback">{{ errors[0] }}</span>
                                  </validation-provider>
                                </div>
                                <div class="form-group w-100 mb-3">
                                  <label class="formGroupLabel" for="paymentSelector">付款方式</label>
                                  <select v-model="form.payment" name="付款方式" id="paymentSelector" required="required" class="paymentSelector p-2 w-100 bd-round-4 mb-1 mr-md-1 placeHolderColor">
                                    <option disabled="disabled" selected="selected">請選擇付款方式</option>
                                    <option value="WebATM">WebATM</option>
                                    <option value="ATM">ATM</option>
                                    <option value="Credit">Credit</option>
                                    <option value="GooglePay">GooglePay</option>
                                    <option value="ApplePay">ApplePay</option>
                                  </select>
                                </div>
                                <div
                                    class="d-md-flex mb-2 flex-md-row-reverse align-items-center justify-content-md-between w-100 mb-md-1 pb-md-4">
                                        <button type="submit" :disabled="invalid" class="fillBtn w-md-40 text-center border-none px-5 py-2" :class="{ disabled: isProcessing }">
                                          <i class="fas fa-spinner fa-spin" v-if="isProcessing"></i>確認結帳
                                        </button>
                                    <router-link to="/cart" class="primary text-center d-block my-3">
                                        <i class="returnIcon fas fa-angle-left"></i>
                                        <span> 回上一步</span>
                                    </router-link>
                                </div>
                            </div>
                          </form>
                        </validation-observer>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Toast from '@/utils/toast'

export default {
  data () {
    return {
      carts: {},
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: '請選擇付款方式'
      },
      totalPrice: 0,
      isLoading: false,
      isProcessing: false
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
    createOrder () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.isProcessing = true
      const order = { ...this.form }
      this.$http.post(api, order)
        .then(res => {
          this.updateTotal()
          Toast.fire({
            text: '訂單建立成功',
            icon: 'success'
          })
          this.getCart()
          this.$router.push(`complete/${res.data.data.id}`)
          this.isProcessing = false
        })
        .catch(() => {
          Toast.fire({
            text: '訂單建立失敗',
            icon: 'error'
          })
          this.isProcessing = false
        })
    }
  }
}
</script>
