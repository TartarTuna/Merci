<template>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <!-- 商品圖片輪播 -->
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <!-- 麵包屑 -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0">
              <li class="breadcrumb-item"><router-link to="/index" class="text-muted">首頁</router-link></li>
              <li class="breadcrumb-item"><router-link to="/products" class="text-muted">產品一覽</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">產品說明</li>
            </ol>
          </nav>
          <!-- 商品資料 -->
          <h2 class="font-weight-bold h1 mb-1">商品名稱</h2>
          <p class="mb-0 text-muted text-right"><del>原價</del></p>
          <p class="h4 font-weight-bold text-right">特價</p>
          <div class="d-flex align-items-center mb-md-9 mb-6">
            <div class="input-group my-3 mr-2 bg-light rounded-50">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary border-0 py-2 rounded-50" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
              <div class="input-group-append">
                <button class="btn btn-outline-primary border-0 py-2 rounded-50" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <a href="#" class="btn btn-primary btn-block py-2 rounded-50">加入購物車</a>
          </div>
          <div class="">
            <p class="fz-2 pb-1 mb-0">消費滿 NT $1,500，享有免運費優惠</p>
            <p class="fz-2 pb-1 mb-0"><span class="fw-bold">[付款]</span> 信用卡(一次付清)、貨到付款、ATM 轉帳</p>
            <p class="fz-2 pb-1 mb-0"><span class="fw-bold">[運送]</span> 黑貓低溫宅配、工作室自取</p>
          </div>
        </div>

        <!-- more products -->
        <div class="moreProducts col-12 mt-5 mt-md-9">
          <div class="moreProductsTitle position-relative">
            <p class="mb-1 fz-3 text-primary fw-bold pb-md-0 mb-md-5 text-center">您可能也會喜歡</p>
          </div>
          <RelatedProducts />
        </div>
      </div>
    </div>
</template>

<script>
import RelatedProducts from '../../components/Front/RelatedProducts'

export default {
  data () {
    return {

    }
  },
  components: {
    RelatedProducts
  }
}
</script>
