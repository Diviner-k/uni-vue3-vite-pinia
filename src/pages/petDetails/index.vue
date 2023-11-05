<template>
    <view class="content">
        <MySwiper class="mb20"></MySwiper>
        <uni-group mode="card">
            <uni-section type="line" title="宠物详细信息"></uni-section>
            <view class="item">
                <view class="label">昵称</view>
                <view class="value">Lucky</view>
            </view>
            <view class="item">
                <view class="label">年龄</view>
                <view class="value">1</view>
            </view>
            <view class="item">
                <view class="label">性别</view>
                <view class="value">男</view>
            </view>
            <view class="item">
                <view class="label">联系电话</view>
                <view class="value">13912341231</view>
            </view>
            <view class="item">
                <view class="label">走失时间</view>
                <view class="value">2020-10-12 12：30：10</view>
            </view>
            <view class="item " style="margin-bottom: 40rpx;">
                <view class="label">描述</view>
                <view class="value">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi vitae dolorem
                    mollitia quaerat quam doloribus adipisci, voluptatum tempora non deserunt exercitationem in officia
                    dolorum molestiae placeat necessitatibus dolores odio?</view>
            </view>

            <text class="total ">共10条评论</text>
            <uni-list :border="true">
                <!-- 显示圆形头像 -->
                <uni-list-chat v-for="(item, index) in remarkList" :key="item.id" :avatar-circle="true"
                    :title="item.nickName" :avatar="item.avatar" :note="item.content" :time="item.time"></uni-list-chat>
                <view class="end">--THE END--</view>
            </uni-list>

            <!-- 评论组件 -->
            <view class="remark_action">
                <input style="height: 60rpx;padding-left: 10rpx;" class="input" placeholder="请输入评论"
                    placeholder-style="font-size:18rpx;" v-model="remark" />
                <text class="submit_btn" size="mini" @click="submit">发送</text>
            </view>
        </uni-group>
    </view>
</template>
<script setup lang="ts">
import MySwiper from '@/pages/components/MySwiper.vue'
import { reactive, ref } from 'vue';

const remarkList = reactive([{
    id: 1,
    nickName: 'Lucky',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi vitae dolorem mollitia quaerat quam doloribus adipisci, voluptatum tempora non deserunt exercitationem in officia dolorum molestiae placeat necessitatibus dolores odio?',
    time: '2020-02-02 20:20'
},
{
    id: 1,
    nickName: 'Lucky',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi vitae dolorem mollitia quaerat quam doloribus adipisci, voluptatum tempora non deserunt exercitationem in officia dolorum molestiae placeat necessitatibus dolores odio?',
    time: '2020-02-02 20:20'
},
{
    id: 1,
    nickName: 'Lucky',
    avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi vitae dolorem mollitia quaerat quam doloribus adipisci, voluptatum tempora non deserunt exercitationem in officia dolorum molestiae placeat necessitatibus dolores odio?',
    time: '2020-02-02 20:20'
}
])
const remark = ref('')
const submit = () => {
    console.log(remark.value)
}

</script>
<style lang="scss" scoped>
.content {
    font-size: 24rpx;

}

.item {
    display: grid;
    grid-template-columns: 140rpx 1fr;
    margin-bottom: 20rpx;

    .label {
        color: $bg-gray;

        &::after {
            content: "：";
        }
    }

    .value {

        color: $main;
    }
}

.total,
.end {
    display: block;
    font-size: 18rpx;
    font-weight: normal;
    margin-bottom: 10rpx;
}

.end {
    color: $bg-gray;
    text-align: center;
}

.remark_action {
    background: $white-color;
    display: grid;
    grid-template-columns: 1fr 80rpx;

    padding: 40rpx 20rpx 20rpx;


    .input {

        background-color: #eee;
        height: 40rpx;
        line-height: 40rpx;
        border-radius: 30rpx;

        font-size: 20rpx;

        &::placeholder {
            color: #fff !important;
        }
    }

    .submit_btn {
        text-align: center;
        line-height: 60rpx;
        color: #007aff;
        font-weight: bold;
        font-size: 24rpx;
    }
}
</style>
