<template>
  <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <loading :active.sync="isLoading"></loading>
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>{{ isNew?"新增產品":"編輯產品" }}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div v-for="i in 5" :key="i + 'img'" class="form-group">
                  <label :for="'img' + i">請輸入圖片網址</label>
                  <input :id="'img' + i" v-model="tempProduct.imageUrl[i - 1]" type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i v-if="status.fileUploading" class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input id="customFile" ref="file" type="file" class="form-control" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題"
                    required>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" v-model="tempProduct.category" type="text" class="form-control"
                      placeholder="請輸入分類" required>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control" placeholder="請輸入單位">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control"
                      placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品說明</label>
                  <vue-editor id="description" v-model="tempProduct.description" />
                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <vue-editor id="content" v-model="tempProduct.content" />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="saveProduct">
              確認
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Toast from '@/utils/toast'
/* global $ */

export default {
  data () {
    return {
      tempProduct: {
        imageUrl: []
      },
      status: {
        fileUpLoading: false
      },
      isLoading: false
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    // 取得單一產品資料，id為item.id的那個id
    getSingleProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http.get(api).then(res => {
        this.tempProduct = res.data.data // 取到後寫進tempProduct
        $('#productModal').modal('show')
        this.isLoading = false
      }).catch(() => {
        this.isLoading = false
        Toast.fire({
          title: '資料取得失敗',
          icon: 'error'
        })
      })
    },
    // 新增為「post」編輯則是「patch」，patch 必須傳入產品 ID
    saveProduct () {
      // 彈窗為新增產品時
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
      let httpMethod = 'post'

      // 彈窗為修改產品時
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
        httpMethod = 'patch'
      }

      this.$http[httpMethod](api, this.tempProduct)
        .then(() => {
          this.$emit('update')
          Toast.fire({
            title: '資料更新成功',
            icon: 'success'
          })
        }).catch(() => {
          Toast.fire({
            title: '資料更新失敗',
            icon: 'error'
          })
        })
      $('#productModal').modal('hide')
    },
    uploadFile () {
      this.isLoading = true
      const uploadedFile = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.status.fileUploading = true
      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        this.status.fileUploading = false
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path)
        }
        this.isLoading = false
        Toast.fire({
          title: '上傳成功',
          icon: 'success'
        })
      }).catch(() => {
        this.isLoading = false
        Toast.fire({
          title: '上傳不可超過 2 MB',
          icon: 'warning'
        })
        this.status.fileUploading = false
      })
    }
  }
}
</script>
