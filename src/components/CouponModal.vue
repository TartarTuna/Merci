<template>
  <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"
              id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>修改優惠卷</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="title">名稱</label>
            <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入優惠券名稱" />
          </div>
          <div class="form-group">
            <label for="tempCouponCode">優惠碼</label>
            <input type="text" class="form-control" id="tempCouponCode" v-model="tempCoupon.code" placeholder="請輸入優惠碼" />
          </div>
          <div class="form-group">
            <label for="price">折扣百分比</label>
            <input type="number" class="form-control" id="price" v-model="tempCoupon.percent" placeholder="請輸入折扣百分比" />
          </div>
          <div class="form-group">
            <label for="due_date">到期日</label>
            <input id="due_date" v-model="due_date" type="date" class="form-control">
          </div>
          <div class="form-group">
            <label for="due_time">到期時間</label>
            <input id="due_time" v-model="due_time" type="time" step="1" class="form-control">
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :true-value="true" :false-value="false" v-model="tempCoupon.enabled" id="is_enabled" />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click.prevent="updateCoupon">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../utils/toast'
/* global $ */

export default {
  data () {
    return {
      tempCoupon: {
        title: '',
        code: '',
        percent: 100,
        enabled: false,
        deadline_at: ''
      },
      due_date: '',
      due_time: ''
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getCoupon (id) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`
      this.$http.get(api)
        .then(res => {
          this.tempCoupon = res.data.data
          const timeLimit = this.tempCoupon.deadline.datetime.split(' ');
          [this.due_date, this.due_time] = [timeLimit[0], timeLimit[1]]
          $('#couponModal').modal('show')
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料',
            icon: 'error'
          })
        })
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`
      let httpMethod = 'post'
      let message = '新增'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        httpMethod = 'patch'
        message = '修改'
      }
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[httpMethod](api, this.tempCoupon)
        .then(() => {
          $('#couponModal').modal('hide')
          this.$emit('update')
          this.due_date = ''
          this.due_time = ''
          Toast.fire({
            title: `${message}優惠卷成功`,
            icon: 'success'
          })
        })
        .catch(() => {
          $('#couponModal').modal('hide')
          Toast.fire({
            title: `${message}優惠卷失敗`,
            icon: 'error'
          })
        })
    }
  }
}
</script>
