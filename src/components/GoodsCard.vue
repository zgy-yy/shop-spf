<script lang="ts" setup>

import {Goods} from "../model";
import {getGoodsDetail} from "../api/apis";
import Taro from "@tarojs/taro";

const props = defineProps<{ value: Goods }>()

function toDetailPage() {
  getGoodsDetail(props.value.goodsId).then(res => {
    Taro.navigateTo({
      url:'/pages/goodsDetail/index'
    })
  }).catch((e)=>{
    console.log(e)
    Taro.navigateTo({
      url:'/pages/login/index'
    })
  })
}

</script>

<template>
  <view class="m-card  bg-white" @tap="toDetailPage">
    <!--    图片-->
    <image :src="value.goodsCoverImg" model="widthFix"></image>
    <!--    -->
    <view class="text-sm">{{ value.goodsName }}</view>
    <view class="text-df text-price text-red">{{ value.sellingPrice }}</view>
  </view>
</template>

<style lang="scss">
.m-card {
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  padding: 6px;
  margin: 10px 5px 20px 5px;
  border: 2px solid #ece7e7;
  box-shadow: 15px 15px 25px rgba(110, 40, 40, .2), -15px -15px 25px rgba(243, 236, 236, 0.5);

  image {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 20px 30px 20px;
    height: 360px;
  }

  view {
    text-align: start;
    padding: 5px 10px 5px 10px;
    width: 300px;
  }
}
</style>
