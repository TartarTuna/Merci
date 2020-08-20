<template>
  <div class="cartModal">
    <div class="container row justify-content-center">
      <div class="col-7 mt-md-5">
        <h5 class="modal-title fz-3 fz-md-6 lh-4 fw-bold textColor">購物清單</h5>
        <div class="">
          <ul class="buylist mb-3">
            <li class="d-flex mb-1">
              <img class="buylistImg w-40" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/jamBanner.jpg" alt="buylistImg">
                <div class="buylistContent bg-light w-100 p-1 p-md-2">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="fz-2 lh-2 mb-15 fw-bold textColor">果醬禮盒</p>
                    <a href="#" class=" textColor"><i class="fas fa-times"></i></a>
                  </div>
                  <div class="goodPriceArea">
                    <span class="goodsAcount mr-1 fz-md-2 alertTxt">NT$1,080</span>
                    <del class="goodsPrice smallLink">NT$1,200</del>
                  </div>
                  <div class="quantityArea d-flex justify-content-between align-items-center">
                    <div class="bg-gray-light rounded w-30 d-flex justify-content-between align-items-center text-left">
                      <a href="#"><i class="fas fa-minus"></i></a>
                      <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                      <a href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div class="w-50 text-right fw-bold textColor">NT$1,080</div>
                  </div>
                </div>
            </li>
          </ul>

          <div class="priceDetail mb-3">
            <div class="d-flex justify-content-between">
              <p class="alertTxt">小計</p>
              <p class="alertTxt">NT$4,680</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="alertTxt">運費</p>
              <p class="alertTxt">NT$80</p>
            </div>
          </div>
          <div class="priceTotal d-flex justify-content-between mb-md-3">
            <p class="fz-3 lh-4 fw-bold textColor">總計</p>
            <p class="fz-3 lh-4 fw-bold textColor">NT$4,760</p>
          </div>
          <div class="d-md-flex border-bottom mb-2 flex-md-row-reverse align-items-center justify-content-md-between w-md-100 mb-md-1 pb-md-4">
              <div class="fillBtn text-center w-40 w-md-auto">
                  <router-link to="/paymentTable" class="d-block px-5 py-2">前往結帳</router-link>
              </div>
              <router-link to="/products" class="primary text-center d-block my-3">
                  <i class="returnIcon fas fa-angle-left"></i>
                  <span> 繼續購物</span>
              </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
