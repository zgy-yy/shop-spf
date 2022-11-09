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
import {getIndexInfo} from "../../api/apis";


const msg = ref('Hello world')

getIndexInfo().then(res => {
  console.log(res)
})
</script>
