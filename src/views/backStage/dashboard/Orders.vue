<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="table-responsive" v-if="orders.length > 0">
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th width="140">購買時間</th>
            <th>購買項目</th>
            <th width="140">付款金額</th>
            <th width="140">付款方式</th>
            <th width="140">是否付款</th>
            <th width="100">客戶資料</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortOrder" :key="item.id">
            <td>{{ item.created.timestamp | date}}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.quantity}} {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-center">{{ item.amount | money}}</td>
            <td class="text-center">{{ item.payment}}</td>
            <td>
              <div class="custom-control custom-switch">
                <input :id="item.id" v-model="item.paid" type="checkbox" class="custom-control-input" @change="updatePayment(item)">
                <label class="custom-control-label" :for="item.id">
                  <strong v-if="item.paid" class="text-success">已付款</strong>
                  <span v-else class="text-muted">尚未付款</span>
                </label>
              </div>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm mr-1" @click.prevent="openModal(item)">
                查看
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁 -->
      <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>

      <!-- Order Modal -->
      <OrderModal ref="orderModal"/>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/toast'
import Pagination from '@/components/Pagination'
import OrderModal from '@/components/backed/OrderModal'

export default {
  data () {
    return {
      orders: [],
      isLoading: true,
      pagination: {},
      order: {
        user: {}
      },
      isProcessing: false
    }
  },
  components: {
    Pagination,
    OrderModal
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.orders = res.data.data
          this.pagination = res.data.meta.pagination
        })
        .catch(() => {
          this.isLoading = false
          Toast.fire({
            title: '無法取得資料',
            icon: 'error'
          })
        })
    },
    updatePayment (item) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`
      this.isLoading = true
      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
      }
      this.$http.patch(api, item.id)
        .then(() => {
          this.isLoading = false
          Toast.fire({
            title: '修改成功',
            icon: 'success'
          })
          this.getOrders()
        })
        .catch(() => {
          this.isLoading = false
          Toast.fire({
            title: '修改失敗',
            icon: 'error'
          })
        })
    },
    openModal (item) {
      this.$refs.orderModal.getOrder(item.id)
    }
  },
  computed: {
    sortOrder () {
      const vm = this
      let newOrder = []
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0
          const bIsPaid = b.is_paid ? 1 : 0
          return bIsPaid - aIsPaid
        })
      }
      return newOrder
    }
  }
}
</script>
