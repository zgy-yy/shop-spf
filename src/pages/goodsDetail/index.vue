<script lang="ts" setup>
import {ref} from 'vue'
import CuCustom from "../../colorui/components/cu-custom.vue";
import {addCartItem, getGoodsDetail} from "../../api/apis";
import {useGoodsInfo} from "../../store/goodsInfo";

const goodInfo = useGoodsInfo()
function addGoods(){
  addCartItem(goodInfo.info.goodsId,1).then(res=>{
    console.log(res)
  })
}
</script>

<template>
  <view class="index">
    <cu-custom is-back bg-color="bg-white">
      <template #content>
        商品详情
      </template>
    </cu-custom>
    <swiper class="m-wiper screen-swiper" circular="true" autoplay="true"
            interval="5000"
            duration="500">
      <swiper-item v-for="item in goodInfo.info.goodsCarouselList" :key="item">
        <image :src="item" mode="widthFix"></image>
      </swiper-item>
    </swiper>
    <view class="m-goods-content  text-xl">
      {{ goodInfo.info.goodsName }}
    </view>
    <view class="m-price text-price text-red text-xxl">{{goodInfo.info.sellingPrice}}</view>

    <view class="cu-bar  bg-white">
      <view class="action border-title">
        <text class="text-xl text-bold text-blue">商品详情</text>
        <text class="bg-gradual-blue" style="width:3rem"></text>
      </view>
    </view>
    <rich-text :nodes="goodInfo.info.goodsDetailContent"></rich-text>

    <view class="m-bar cu-bar bg-white tabbar border shop">
      <button class="action" open-type="contact">
        <view class="cuIcon-service text-green">
<!--          <view class="cu-tag badge"></view>-->
        </view>
        客服
      </button>
      <view class="action">
        <view class="cuIcon-cart">
          <view class="cu-tag badge">9</view>
        </view>
        购物车
      </view>
      <view class="bg-orange submit" @tap="addGoods">加入购物车</view>
      <view class="bg-red submit">立即订购</view>
    </view>


  </view>
</template>
<style>
.index {
  padding-bottom: calc(100px + env(safe-area-inset-bottom) / 2);
}

.m-wiper {
  height: 800px;
}

.m-goods-content {
  padding: 20px;
}
.m-price{
  padding-left: 22px;
  margin-bottom: 10px;
}
.m-bar {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
