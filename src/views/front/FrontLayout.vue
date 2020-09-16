<template>
  <div class="home">
    <FrontNavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import FrontNavBar from '@/components/Front/FrontNavBar.vue'
import Footer from '@/components/Front/Footer'

export default {
  data () {
    return {}
  },
  components: {
    FrontNavBar,
    Footer
  }
}
</script>
