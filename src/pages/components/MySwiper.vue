<template>
  <uni-swiper-dot
    class="uni-swiper-dot-box"
    @clickItem="clickItem"
    :current="current"
    :info="info"
    :mode="mode"
    :dots-styles="dotsStyles"
    field="content"
  >
    <swiper
      class="swiper-box"
      @change="change"
      :current="swiperDotIndex"
      :circular="true"
      :autoplay="true"
    >
      <swiper-item v-for="(item, index) in info" :key="index">
        <view class="swiper-item" :class="'swiper-item' + index">
          <image
            style="width: 100%; height: 200px; background-color: #eeeeee"
            :src="item.url"
          ></image>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

defineProps({
  dotsStyles: {
    type: Object,
    default: () => ({
      backgroundColor: 'rgba(83, 200, 249,0.3)',
      border: '1px rgba(83, 200, 249,0.3) solid',
      color: '#fff',
      selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
      selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
    }),
  },
  mode: {
    type: String,
    default: 'default',
  },
})

const current = ref<Number>(0)
const swiperDotIndex = ref<Number>(0)
let info = reactive<any[]>([])

info = [
  {
    colorClass: 'uni-bg-red',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    // content: '内容 A',
  },
  {
    colorClass: 'uni-bg-green',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    // content: '内容 B',
  },
  {
    colorClass: 'uni-bg-blue',
    url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
    // content: '内容 C',
  },
]

const change = (e) => {
  current.value = e.detail.current
}

const clickItem = (e) => {
  swiperDotIndex.value = e
}
const onBanner = (index) => {
  console.log(22222, index)
}
</script>
