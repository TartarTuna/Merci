<template>
  <div>
    <loading :active.sync="isLoading"> </loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click.prevent="openModal('new')">
        建立優惠券
      </button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4" v-if="coupons.length > 0">
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">折扣碼</th>
            <th scope="col">折扣百分比</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td class="text-center">{{ item.percent }}%</td>
            <td>{{ item.deadline.datetime }}</td>
            <td class="text-center">
              <strong class="text-success" v-if="item.enabled">啟用</strong>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm mr-1" @click.prevent="openModal('edit', item)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm" @click.prevent="openModal('del',item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 分頁 -->
    <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>

    <!-- Coupon Modal -->
    <CouponModal ref="couponModal" :isNew="isNew" @update="getCoupons" />
    <!-- 刪除 -->
    <DelCouponModal :temp-coupon="tempCoupon" @update="getCoupons" />
  </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import CouponModal from '../../../components/CouponModal'
import DelCouponModal from '../../../components/DelCouponModal'
/* global $ */

export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {
        title: '',
        code: '',
        percent: 100,
        enabled: false,
        deadline_at: ''
      },
      isNew: false,
      isLoading: false
    }
  },
  created () {
    this.getCoupons()
  },
  components: {
    Pagination,
    CouponModal,
    DelCouponModal
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.coupons = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
    },
    openModal (mode, item) {
      switch (mode) {
        case 'new':
          this.isNew = true
          this.$refs.tempCoupon = {}
          $('#couponModal').modal('show')
          break
        case 'edit':
          this.isNew = false
          this.$refs.couponModal.getCoupon(item.id) // 用取得單一優惠券資訊的函式取得此優惠券資料
          break
        case 'del':
          this.tempCoupon = Object.assign({}, item) // 用淺拷貝拷貝item
          $('#delCouponModal').modal('show')
          break
        default:
          break
      }
    }
  }
}
</script>
