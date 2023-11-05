<template>
    <view class="content">
        <uni-card :is-shadow="false" is-full>
            <view class="uni-padding-wrap uni-common-mt mb20">
                <uni-segmented-control :current="current" :values="items" style-type="text" active-color="#007aff"
                    @clickItem="onClickItem" />
            </view>
            <view class="main">
                <view v-if="current === 0">
                    <uni-section type="line" title="填写宠物信息"></uni-section>
                    <uni-forms ref="valiForm" class="pad20" label-width="100rpx">
                        <uni-forms-item label="昵称" required>
                            <uni-easyinput v-model="baseFormData.name" placeholder="请输入昵称" />
                        </uni-forms-item>
                        <uni-forms-item label="年龄" required>
                            <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
                        </uni-forms-item>
                        <uni-forms-item label="性别" required>
                            <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
                        </uni-forms-item>
                        <uni-forms-item label="走失时间">
                            <uni-datetime-picker type="datetime" return-type="timestamp"
                                v-model="baseFormData.datetimesingle" />
                        </uni-forms-item>
                        <uni-forms-item label="联系电话">
                            <uni-easyinput v-model="baseFormData.phone" placeholder="请输入联系电话" />
                        </uni-forms-item>
                        <uni-forms-item label="描述">
                            <uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入描述" />
                        </uni-forms-item>

                        <view class="photo_wrapper">
                            <uni-file-picker limit="9" title="请上传图片，最多选择9张图片" :imageStyles="{
                                    width: 100,
                                    height: 100,
                                    border: {
                                        radius: '10rpx'
                                    }
                                }"></uni-file-picker>
                        </view>

                    </uni-forms>
                </view>
                <view v-if="current === 1">

                    <uni-section type="line" title="填写宠物信息"></uni-section>
                    <uni-forms ref="valiForm" class="pad20" label-width="100rpx">
                        <uni-forms-item label="昵称" required>
                            <uni-easyinput v-model="baseFormData.name" placeholder="请输入昵称" />
                        </uni-forms-item>
                        <uni-forms-item label="年龄" required>
                            <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
                        </uni-forms-item>
                        <uni-forms-item label="性别" required>
                            <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
                        </uni-forms-item>
                        <uni-forms-item label="联系电话">
                            <uni-easyinput v-model="baseFormData.phone" placeholder="请输入联系电话" />
                        </uni-forms-item>
                        <uni-forms-item label="描述">
                            <uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入描述" />
                        </uni-forms-item>

                        <view class="photo_wrapper">
                            <uni-file-picker limit="9" title="请上传图片，最多选择9张图片" :imageStyles="{
                                    width: 100,
                                    height: 100,
                                    border: {
                                        radius: '10rpx'
                                    }
                                }"></uni-file-picker>
                        </view>

                    </uni-forms>

                </view>
                <button class="primary-btn" style="width: 200rpx;" type="button" @click="submit('valiForm')">发布</button>
            </view>
        </uni-card>
    </view>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const items = ref<string[]>(['宠物走失', '宠物领养',])
const current = ref<number>(0)

const baseFormData = reactive({
    name: '',
    age: '',
    phone: null,
    introduction: '',
    sex: 0,
    hobby: [5],
    datetimesingle: 1627529992399
})
const sexs = reactive([{
    text: '男',
    value: 0
}, {
    text: '女',
    value: 1
},])
const rules = reactive({
    name: {
        rules: [{
            required: true,
            errorMessage: '姓名不能为空'
        }]
    },
    phone: {
        rules: [{
            required: true,
            errorMessage: '联系电话不能为空'
        }, {
            format: 'number',
            errorMessage: '联系电话只能输入数字'
        }]
    },
    age: {
        rules: [{
            required: true,
            errorMessage: '年龄不能为空'
        }, {
            format: 'number',
            errorMessage: '年龄只能输入数字'
        }]
    }
})

const submit = (str: string) => {

}
const onClickItem = (e: { currentIndex: number }) => {
    console.log('e', e)
    if (current.value !== e.currentIndex) {
        current.value = e.currentIndex
    }
}


</script>
<style lang="scss" scoped>
.content {
    height: 100vh;
    background-color: $white-color;

    .main {
        border-top: 1px solid #ccc;
    }
}
</style>