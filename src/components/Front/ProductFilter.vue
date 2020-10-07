<template>
<div class="productFilterWrap mb-5 mb-md-9 pt-3 pt-md-4">
  <div class=" d-flex flex-column flex-md-row justify-content-center AOSCards">
    <div class="filterCard mb-3 mr-md-4" ata-aos="flip-right">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('果醬')">
          <img src="https://images.unsplash.com/photo-1590083359275-492f8b29a347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage rounded">
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">前往選購</div>
          </div>
        </a>
        <div class="filterItemContent">
          <p class="fz-3 lh-3 text-text text-right mb-0 pr-1">手工果醬</p>
          <p class="fz-2 lh-3 fw-300 text-text text-right mb-0 pr-1">滿滿的天然果實，無添加人工香料</p>
        </div>
      </div>
    </div>

    <div class="filterCard mb-3 mr-md-4" data-aos="flip-right">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('餅乾')">
          <img src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80" alt="filterImage" class="filterImage rounded">
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">前往選購</div>
          </div>
        </a>
        <div class="filterItemContent">
          <p class="fz-3 lh-3 text-text text-right mb-0 pr-1">高纖餅乾</p>
          <p class="fz-2 lh-3 fw-300 text-text text-right mb-0 pr-1">天然全穀原料，吃進自然高纖</p>
        </div>
      </div>
    </div>

    <div class="filterCard">
      <div class="photoContainer ovrlyFilter mb-2">
        <a href="#" @click.prevent="goCategory('糕點')">
          <img src="https://images.unsplash.com/photo-1589218436045-ee320057f443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" alt="filterImage" class="filterImage rounded" >
          <div class="ovrlyT"></div>
          <div class="ovrlyB"></div>
          <div class="photoTextWrap">
            <div class="photoText letter-space-3">前往選購</div>
          </div>
        </a>
        <div class="filterItemContent">
          <p class="fz-3 lh-3 text-text text-right mb-0 pr-1">低糖糕點</p>
          <p class="fz-2 lh-3 fw-300 text-text text-right mb-0 pr-1">減糖依舊香甜，鬆軟濃郁撫慰你心</p>
        </div>
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
    }
  }
}
</script>
