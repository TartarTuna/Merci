<template>
  <div class="parallax position-relative mb-3 mb-md-0">
    <div class="row justify-content-center">
      <div class="col-8 col-md-5 position-absolute callActive">
          <p class="fz-md-4 fz-3 lh-6 text mb-md-3 fw-bold">訂閱我們<br>獲得最新消息及優惠</p>

          <form class="form-inline flex-nowrap w-100">
              <label class=" sr-only" for="subscribeEmail">Name</label>
              <input type="email" class="form-control fz-2 lh-3 flex-md-fill w-70 mr-1"
                  id="subscribeEmail" placeholder="請輸入您的電子信箱">
              <button type="submit" class="subscribeBtn btn btn-primary">訂閱</button>
          </form>
      </div>
    </div>
  </div>
</template>
