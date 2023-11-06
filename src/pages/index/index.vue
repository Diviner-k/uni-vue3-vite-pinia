<template>
  <view class="content">
    <!-- 搜索 -->
    <uni-search-bar
      @confirm="search"
      :focus="true"
      v-model="searchValue"
      bgColor="#fff"
      @blur="blur"
      @focus="focus"
      @input="input"
      @cancel="cancel"
      @clear="clear"
    >
      <uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
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
    <view class="main_wrapper" id="mainWrapper" :class="{ fixed: isFixed }">
      <uni-section title="最新发布" type="line"></uni-section>
      <view class="list_wrapper">
        <view class="list_mian">
          <!-- <uni-card v-for="(item, index) in 20" :key="index"
            cover="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg" class="card_item"
            @click="handleClickCard">
          
            <text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
            <view slot="actions" class="card-actions">
              <view class="card-actions-item">
                <image class="cover" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"></image>
                <text class="">用户名001</text>
                <uni-icons type="heart" size="18" color="#999"></uni-icons>
              </view>
            </view>
          </uni-card> -->
          <Card></Card>
        </view>
        <uni-load-more status="more"></uni-load-more>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import MySwiper from '@/pages/components/MySwiper.vue'
import Card from '@/pages/components/Card.vue'
import { getCurrentInstance } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
import router from '@/router/index'

const searchValue = ref<string>('')
const mainWrapper = ref<any>(null)
const scrollTop = ref<number>(0)
const isFixed = ref<boolean>(false)
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
onMounted(() => {})

/**
 * 点击卡片
 */
const handleClickCard = () => {
  router.navigate('petDetails')
}
// 页面滚动
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})
// const getVm = (str: string) => {
// const instance = getCurrentInstance()
// const query = uni.createSelectorQuery().in(instance);
// console.log(query.select('#mainWrapper'))
// 获取元素到 视口的距离
// query.select('#mainWrapper').boundingClientRect((rect) => {
//   console.log('rect', rect)
// }).exec()

// }
watch(scrollTop, (newVal) => {
  // if (newVal > 355) { // 固定列表
  //   isFixed.value = true
  // }
  // if (newVal < 355) {// 取消固定列表
  //   isFixed.value = false
  // }
})
</script>

<style lang="scss" scoped>
.content {
  padding: 20rpx;

  .cover {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
  }

  .list_mian {

  }

  .fixed {
    // position: fixed;
    // top: 0;
    // right: 0;
  }
}
</style>
