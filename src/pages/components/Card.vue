<template>
  <view class="card_wrapper">
    <view class="card_item" v-for="(item, index) in 20" :key="index">
      <navigator
        url="/pages/petDetails/index?id=0"
        hover-class="none"
        
      >
      <view class="main">
        <image
          src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
          class="image"
        ></image>
        <view class="content">是否会乱收费的客户的反馈省略号</view>

      </view>
      </navigator>
      <view class="footer">
        <view class="cover">
          <image
          
          src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
          >
        </image>
      </view>
        <text  class="useName">用户名001</text>
        <uni-icons type="heart" color="#666" size="24" />
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup></script>
<style lang="scss" >
.card_wrapper {
  font-size: $font-size !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16rpx;
  // display: flex;
  // flex-wrap:wrap;
  width: 100%;
  .card_item {
    background-color: $white-color;
    border: 1px solid #eee;
    border-radius: 10rpx;
    box-shadow: 2rpx 2rpx 0rpx #eee;
    padding-bottom: 20rpx;
    overflow: hidden;
    width: 100%;
    .main {
      // display: flex;
      
      // flex-wrap:wrap;
      margin-bottom: 12rpx;
      image {
        width: 100%;
        height: 200rpx;
      }
      .content {
        width: 100%;
        padding: 10rpx 20rpx;
      }
    }
    .footer {
      display: grid;
      grid-template-columns: 80rpx 1fr 40rpx;
      height:60rpx;
      line-height: 60rpx;
      padding:0 20rpx;
 
      .useName {
        color:#999;
        font-size: 24rpx;
      }
      .cover {
        overflow: hidden;
        image {
        border-radius: 50%;
        width:60rpx;
      height:60rpx;
      }
      }
    }
  }
}
</style>
