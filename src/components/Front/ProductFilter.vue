<template>
<div class="productFilterWrap mb-5 mb-md-9 pt-3 pt-md-4">
  <p class="fz-3 fz-md-4 fw-bold text-primary text-center mb-0 letter-space-3">產品分類</p>
  <p class="fz-2 fw-300 text-primary text-center pb-md-2 pb-0 mb-3 letter-space-3">天然美味陪伴您每個美好時刻</p>

  <div class=" d-flex flex-column flex-md-row justify-content-center">
    <div class="filterCard mb-3 mr-md-4">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('果醬')">
          <img src="https://images.unsplash.com/photo-1590083359275-492f8b29a347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage rounded">
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">手工果醬</div>
          </div>
        </a>
      </div>
      <div class="filterItemContent">
        <p class="fz-2 lh-3 fw-300 text-primary text-center mb-0">滿滿的天然果實，無添加人工香料</p>
      </div>
    </div>

    <div class="filterCard mb-3 mr-md-4">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('餅乾')">
          <img src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80" alt="filterImage" class="filterImage rounded">
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">高纖餅乾</div>
          </div>
        </a>
      </div>
      <div class="filterItemContent">
        <p class="fz-2 lh-3 fw-300 text-primary text-center mb-0">天然全穀原料，吃進自然高纖</p>
      </div>
    </div>

    <div class="filterCard">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('糕點')">
          <img src="https://images.unsplash.com/photo-1589218436045-ee320057f443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage rounded" >
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">低糖糕點</div>
          </div>
        </a>
      </div>
      <div class="filterItemContent">
        <p class="fz-2 lh-3 fw-300 text-primary text-center mb-0">減糖依舊香甜，鬆軟濃郁撫慰你心</p>
      </div>
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
