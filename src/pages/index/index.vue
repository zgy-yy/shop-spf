<template>

  <view class="index">
    <cu-custom></cu-custom>
    <view>hello</view>
  </view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import './index.scss'
import CuCustom from "../../colorui/components/cu-custom.vue";


const msg = ref('Hello world')
// const token=Taro.getStorageSync('token')
// login('admin', '123456').then(res => {
//   Taro.setStorageSync('token',res.token)
// })
</script>
