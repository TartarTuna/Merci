<template>
  <div class="my-5">
      <div class="relatedCards row">
        <div v-for="item in relatedFilter.slice(0, 4)" :key="item.id" class="mb-4 mb-md-0 col-md-3 col-sm-6 col-12">
          <div class="mb-md-2 mb-3 relatedImgWrap">
            <a @click.prevent="getSingleProduct(item.id)" class="relatedImgLink">
              <img class="relatedImg" :src="item.imageUrl[0]" alt="productImg">
            </a>
          </div>
          <div class="relatedContent text-center">
            <p class="fz-md-2 fz-3 mb-0 fw-bold primary">
              {{ item.title }}
            </p>
            <p class="fz-2 mb-0 smallLink">
              {{ item.price | money }} 元
            </p>
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
      products: []
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api)
        .then(res => {
          this.products = res.data.data
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料',
            icon: 'error'
          })
        })
    },
    getSingleProduct (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    relatedFilter () {
      return this.products.filter((item) =>
        item.id !== this.product.id && item.category === this.product.category)
    }
  }
}
</script>
