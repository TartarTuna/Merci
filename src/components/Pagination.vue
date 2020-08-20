<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled': pages.current_page === 1}">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="emitPages(pages.current_page - 1)">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li v-for="(item, index) in pages.total_pages" :key="index" class="page-item" :class="{'active': item === pages.current_page}">
            <a class="page-link" href="#" @click.prevent="emitPages(item)">{{ item }}</a>
            </li>

            <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="emitPages(pages.current_page + 1)">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: {
    pages: {}
  },
  methods: {
    // 用 emit 向外傳遞目前點到第幾頁，item為現在點擊頁面的回傳數值 ex.第一頁 = 1
    // 向外傳遞後觸發 getProducts()，並將 item 值帶入
    emitPages (item) {
      this.$emit('emit-pages', item)
    }
  }
}
</script>
