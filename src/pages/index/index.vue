<template>
  <view class="content">
    <!-- 搜索 -->
    <uni-search-bar
      @confirm="search"
      :focus="true"
      v-model="searchValue"
      @blur="blur"
      @focus="focus"
      @input="input"
      @cancel="cancel"
      @clear="clear"
    >
    </uni-search-bar>
    <!-- banner -->
    <MySwiper></MySwiper>
    <!-- 活动 -->
    <view class="activity_wrapper">
      <uni-section title="活动公告" type="line"></uni-section>
      <uni-list style="height: 108rpx; overflow: hidden">
        <swiper :vertical="true" :circular="true" :autoplay="true">
          <swiper-item v-for="(item, index) in 2" :key="index">
            <uni-list-item
              :title="`活动标题${index}`"
              note="活动介绍"
              thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
              thumb-size="lg"
              rightText="活动时间：2022-02-02 12:10:10"
            ></uni-list-item>
            <uni-list-item
              :title="`活动标题${index}`"
              note="活动介绍"
              thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
              thumb-size="lg"
              rightText="活动时间：2022-02-02 12:10:10"
            ></uni-list-item>
          </swiper-item>
        </swiper>
      </uni-list>
    </view>
    <!-- 最新发布 -->
    <view class="main_wrapper">
      <uni-section title="最新发布" type="line"></uni-section>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MySwiper from '@/pages/components/MySwiper.vue'

const searchValue = ref<string>('')
const search = () => {
  console.log('search')
}
const blur = () => {
  console.log('blur')
}
const focus = () => {
  console.log('focus')
}
const input = () => {
  console.log('input')
}
const cancel = () => {
  console.log('cancel')
}
const clear = () => {
  console.log('clear')
  searchValue.value = ''
}
</script>

<style lang="scss">
.content {
  padding: 20rpx;
}
</style>
