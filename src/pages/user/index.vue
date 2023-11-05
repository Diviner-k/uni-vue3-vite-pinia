<template>
  <view class="content">
    <view class="bg mb32">
      <uni-group>
        <view class="top_wrapper flex-row">

          <image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"></image>
          <text>用户001</text>
        </view>
      </uni-group>

    </view>
    <!-- <uni-section type="line" class="mb-10" title="基础用法"></uni-section> -->
    <view class="list">
      <uni-list-item class="mb20" showArrow title="我的发布" />
      <uni-list-item class="mb20" showArrow title="我的收藏" />
      <uni-list-item class="mb20" showArrow title="客服服务" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.content {
  .bg {
    background: #fff;
  }

  .top_wrapper {
    padding: 0 40rpx;
    display: flex;

    image {
      width: 180rpx;
      height: 180rpx;
      border-radius: 10rpx;
      margin-right: 40rpx;
    }
  }

  .list {}
}
</style>
