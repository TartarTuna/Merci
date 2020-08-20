<template>
  <div class="my-5">
      <!-- <div class="col-md-2 col-sm-6 mb-3 mb-4" v-for="item in related.slice(0, 4)" :key="item.id"> -->
      <div class="mb-3 mb-4 d-flex flex-column flex-md-row justify-content-center">
        <div class="mr-md-3 mb-4 mb-md-0">
          <div class="mb-md-2 mb-3">
          <!-- <div :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }" @click.prevent="getDetail(item.id)"> -->
            <img class="relatedImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/storySmall.jpg" alt="">
          </div>
          <div class="relatedContent text-center">
            <p class="fz-md-2 fz-3 mb-0 fw-bold primary">
              <!-- {{ item.title }} -->
              產品標題
            </p>
            <p class="fz-2 mb-0 smallLink">
              <!-- {{ item.price | money }} 元 -->
              售價
            </p>
          </div>
        </div>
        <div class="mr-md-3 mb-4 mb-md-0">
          <div class="mb-md-2 mb-3">
          <!-- <div :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }" @click.prevent="getDetail(item.id)"> -->
            <img class="relatedImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/storySmall.jpg" alt="">
          </div>
          <div class="relatedContent text-center">
            <p class="fz-md-2 fz-3 mb-0 fw-bold primary">
              <!-- {{ item.title }} -->
              產品標題
            </p>
            <p class="fz-2 mb-0 smallLink">
              <!-- {{ item.price | money }} 元 -->
              售價
            </p>
          </div>
        </div>
        <div class="mr-md-3 mb-4 mb-md-0">
          <div class="mb-md-2 mb-3">
          <!-- <div :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }" @click.prevent="getDetail(item.id)"> -->
            <img class="relatedImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/storySmall.jpg" alt="">
          </div>
          <div class="relatedContent text-center">
            <p class="fz-md-2 fz-3 mb-0 fw-bold primary">
              <!-- {{ item.title }} -->
              產品標題
            </p>
            <p class="fz-2 mb-0 smallLink">
              <!-- {{ item.price | money }} 元 -->
              售價
            </p>
          </div>
        </div>
        <div class="mr-md-3 mb-4 mb-md-0">
          <div class="mb-md-2 mb-3">
          <!-- <div :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }" @click.prevent="getDetail(item.id)"> -->
            <img class="relatedImg" src="https://raw.githubusercontent.com/TartarTuna/EC_images/master/storySmall.jpg" alt="">
          </div>
          <div class="relatedContent text-center">
            <p class="fz-md-2 fz-3 mb-0 fw-bold primary">
              <!-- {{ item.title }} -->
              產品標題
            </p>
            <p class="fz-2 mb-0 smallLink">
              <!-- {{ item.price | money }} 元 -->
              售價
            </p>
          </div>
        </div>
      </div>
  </div>
</template>
