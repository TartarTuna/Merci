<template>
  <div class="modal fade" id="delFileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>刪除圖片</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div style="height: 100px; width: 200px; background-size: cover; background-position: center;" :style="{ backgroundImage: `url(${tempStorage.path})` }"></div>
          是否刪除圖片(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click.prevent="delFile">
            確認刪除
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
  props: {
    tempStorage: {
      type: Object,
      required: true
    }
  },
  methods: {
    delFile () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.tempStorage.id}`
      this.$http
        .delete(url)
        .then(() => {
          $('#delFileModal').modal('hide')
          this.$emit('update')
          Toast.fire({
            title: '刪除成功',
            icon: 'success'
          })
        })
        .catch(() => {
          $('#delFileModal').modal('hide')
          Toast.fire({
            title: '刪除失敗',
            icon: 'error'
          })
        })
    }
  }
}
</script>
