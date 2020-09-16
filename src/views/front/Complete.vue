<template>
<div class="complete">
  <div class="donePageImg bg-cover"></div>
  <div class="container">
    <div class="d-flex flex-column align-items-center text-primary py-5 pt-md-9 pb-md-6 bd-bottom">
        <h1 class="fz-md-6 fz-4 lh-8 fw-bold mb-3 text-primary text-center">結帳完成 ヽ(ﾟ▽ﾟ)ノ</h1>
        <div class="downContent">
          <p class="fz-2 lh-3 text-text mb-2 fw-300 text-left">我們已收到您的訂單，感謝您的支持，手工果醬及點心皆為下單後新鮮現做，請放心享用。</p>
          <p class="fz-2 lh-3 text-text mb-0 fw-300 text-left">您可以繼續逛逛我們的精選分類，讓玫希陪伴您度過每個美好的美味時刻，從此幸福的感覺源源不絕。</p>
        </div>
    </div>
  </div>

  <!--category -->
  <div class="container">
    <ProductFilter />
  </div>
</div>
</template>

<script>
import ProductFilter from '@/components/Front/ProductFilter'

export default {
  data () {
    return {}
  },
  components: {
    ProductFilter
  }
}
</script>
