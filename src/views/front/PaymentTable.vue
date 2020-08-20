<template>
      <section class="container my-2">
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-wrap w-100">
                    <!--productDetails -->
                    <div class="productDetailCollapse w-100 mb-3 col-12 col-md-5 order-md-2">
                        <div class="collapseHeader btn bg-light fz-2 lh-3 d-md-none d-block d-flex justify-content-between"
                            data-toggle="collapse" href="#multiCollapse" role="button" aria-expanded="false"
                            aria-controls="multiCollapseExample1">
                            <span>訂單金額</span>
                            <div class="d-flex align-items-center">
                                <span class="totalSpan mr-1">NT$4,760</span>
                                <i class="returnIcon fas fa-angle-down"></i>
                            </div>
                        </div>

                        <!--productDetailContent -->
                        <div class="collapse multi-collapse p-2 bg-light d-md-block" id="multiCollapse">
                            <div class="card card-body infoBox p-0 border-0 bg-light">
                                <ul class="pb-2 mb-2 border-bottom">
                                    <li class="mb-1 d-flex justify-content-between">
                                        <img src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/jamBanner.jpg"
                                            alt="cartImg">
                                        <div class="ml-2 d-flex justify-content-between align-items-center w-100">
                                            <p class="fz-2 lh-4 fw-bold m-0 w-40">果醬禮盒</p>
                                            <span class="w-30 text-center">x 1</span>
                                            <p class="fz-2 lh-4 m-0 w-30 text-right">NT$1,080</p>
                                        </div>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <img src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/jamBanner.jpg"
                                            alt="cartImg">
                                        <div class="ml-2 d-flex justify-content-between align-items-center w-100">
                                            <p class="fz-2 lh-4 fw-bold m-0 w-40">布朗尼</p>
                                            <span class="w-30 text-center">x 2</span>
                                            <p class="fz-2 lh-4 m-0 w-30 text-right">NT$3,600</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="pb-2 mb-2 border-bottom">
                                    <li class="d-flex justify-content-between">
                                        <span class="fz-2 lh-4">小計</span>
                                        <span class="fz-2 lh-4">NT$4,680</span>
                                    </li>
                                    <li class="d-flex justify-content-between">
                                        <span class="fz-2 lh-4">運費</span>
                                        <span class="fz-2 lh-4">NT$80</span>
                                    </li>
                                </ul>
                                <div class="d-flex justify-content-between">
                                    <span class="fz-3 lh-4 fw-bold">總計</span>
                                    <span class="fz-3 lh-4 fw-bold">NT$4,760</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 order-md-1">
                        <!--paymentProcessBar -->
                        <nav aria-label="processBreadcrumb order-md-1">
                            <ol class="breadcrumb bg-transparent p-0">
                                <li class="breadcrumb-item lightest">購物車</li>
                                <li class="breadcrumb-item textLight fw-bold">付款資訊</li>
                                <li class="breadcrumb-item primary">完成</li>
                            </ol>
                        </nav>
                        <!--customerInfo -->
                        <div class="customerInfo w-100">
                            <div class="form-group">
                                <label class="formGroupLabel" for="exampleInputEmail1">聯絡資訊</label>
                                <input type="password" class="p-2 w-100 bd-round-4"
                                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="電子信箱">
                            </div>
                            <!-- <div class="form-group form-check pl-0">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Keep me up to date on news and
                                    special offers</label>
                            </div> -->
                            <label class="formGroupLabel" for="exampleInputPassword1">寄件地址</label>
                            <div class="form-group d-flex flex-column flex-md-row mb-0">
                                <input class="p-2 w-100 bd-round-4 mb-1 mr-md-1" type="password"
                                    id="exampleInputPassword1" placeholder="姓名">
                                <input class="p-2 w-100 bd-round-4 mb-1" type="password"
                                    id="exampleInputPassword1" placeholder="電話">
                            </div>
                            <div class="form-group d-flex flex-column flex-md-row d-block flex-wrap">
                                <div class="d-flex flex-column flex-md-row w-100">
                                    <select class="conturySelector p-2 w-100 bd-round-4 mb-1 mr-md-1 placeHolderColor"
                                        id="conturySelector">
                                        <option disabled selected>國家</option>
                                        <option>臺灣</option>
                                        <option>法國</option>
                                        <option>日本</option>
                                    </select>
                                    <select class="conturySelector p-2 w-100 bd-round-4 mb-1 placeHolderColor"
                                        id="conturySelector">
                                        <option disabled selected>城市</option>
                                        <option>台北</option>
                                        <option>巴黎</option>
                                        <option>東京</option>
                                    </select>
                                </div>
                                <div class="form-group w-100">
                                  <label class="formGroupLabel" for="exampleInputAddress1"></label>
                                  <input type="password" class="p-2 w-100 bd-round-4"
                                    id="exampleInputPassword1" placeholder="地址">
                                </div>
                                <div class="form-group w-100 mb-3">
                                  <label class="formGroupLabel" for="exampleInputPayment1">付款方式</label>
                                  <select name="payment" id="paymentSelector" required="required" class="paymentSelector p-2 w-100 bd-round-4 mb-1 mr-md-1 placeHolderColor">
                                    <option disabled="disabled" selected="selected">請選擇付款方式</option>
                                    <option value="WebATM">WebATM</option>
                                    <option value="ATM">ATM</option>
                                    <option value="Credit">Credit</option>
                                    <option value="GooglePay">GooglePay</option>
                                    <option value="ApplePay">ApplePay</option>
                                  </select>
                                </div>
                                <div
                                    class="d-md-flex mb-2 flex-md-row-reverse align-items-center justify-content-md-between w-100 mb-md-1 pb-md-4">
                                    <div class="fillBtn text-center w-40 w-md-auto">
                                        <router-link to="/complete" class="d-block px-5 py-2">確認結帳</router-link>
                                    </div>
                                    <router-link to="/cart" class="primary text-center d-block my-3">
                                        <i class="returnIcon fas fa-angle-left"></i>
                                        <span> 回上一步</span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
