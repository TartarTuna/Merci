<template>
<div class="productFilterWrap mb-5 mb-md-9 pt-3 pt-md-4">
  <div class="">
    <p class="fz-3 fz-md-4 text-primary text-center pb-md-2 pb-0 mb-3">產品分類</p>
  </div>

  <div class=" d-flex flex-column flex-md-row justify-content-center">
    <div class="photoContainer mb-3 mb-md=0 mr-md-4">
      <a href="#" @click.prevent="goCategory('果醬')">
        <img src="https://images.unsplash.com/photo-1590083359275-492f8b29a347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage">
        <div class="middle">
          <div class="photoText">果醬</div>
        </div>
      </a>
    </div>

    <div class="photoContainer mb-3 mb-md=0 mr-md-4">
      <a href="#" @click.prevent="goCategory('餅乾')">
        <img src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80" alt="filterImage" class="filterImage">
        <div class="middle">
          <div class="photoText">餅乾</div>
        </div>
        </a>
    </div>

    <div class="photoContainer">
      <a href="#" @click.prevent="goCategory('糕點')">
        <img src="https://images.unsplash.com/photo-1589218436045-ee320057f443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage" >
        <div class="middle">
          <div class="photoText">糕點</div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    goCategory (Name) {
      this.$router.push({
        name: 'Products',
        params: { categoryName: Name }
      })
      console.log(this.$route.params)
    }
  }
}
</script>
