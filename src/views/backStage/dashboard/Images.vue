<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="table-responsive">
      <table class="table table-striped mt-5" v-if="storages.length > 0">
        <thead>
          <tr>
            <th scope="col">圖片</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in storages" :key="item.id">
            <td>
              <div style="height: 100px; width: 200px; background-size: cover; background-position: center;" :style="{ backgroundImage: `url(${item.path})` }">
              </div>
            </td>
            <td>
              <button class="btn btn-outline-danger" @click.prevent="openModal(item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    <!-- 分頁 -->
    <Pagination :pages="pagination" @emit-pages="getFiles"></Pagination>

    <DelStorageFile :temp-storage="tempStorage" @update="getFiles" />
    </div>
  </div>
</template>

<script>
import Toast from '../../../utils/toast'
import Pagination from '../../../components/Pagination'
import DelStorageFile from '../../../components/DelStorageFile'
/* global $ */

export default {
  data () {
    return {
      storages: [],
      tempStorage: {},
      pagination: {},
      isLoading: true
    }
  },
  components: {
    Pagination,
    DelStorageFile
  },
  created () {
    this.getFiles()
  },
  methods: {
    getFiles (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then(res => {
          this.storages = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          Toast.fire({
            title: '資料取得失敗',
            icon: 'error'
          })
        })
    },
    openModal (item) {
      this.tempStorage = Object.assign({}, item)
      $('#delFileModal').modal('show')
    }
  }
}
</script>
