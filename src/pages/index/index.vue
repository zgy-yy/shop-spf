<script lang="ts" setup>
import {reactive, ref} from 'vue'
import './index.scss'
import CuCustom from "../../colorui/components/cu-custom.vue";
import {getIndexInfo} from "../../api/apis";
import SearchBar from "../../components/SearchBar.vue";
import GoodsCard from "../../components/GoodsCard.vue";
import {Goods, IndexInfo} from "../../model";

//轮播图数据
const carousels = reactive<Array<{
  carouselUrl: string
  redirectUrl: string
}>>([])


interface DataInfo {
  title: string
  data: Goods[]
}

const goodsData = reactive<DataInfo[]>([])
//宫格 列表
const list = reactive<{ icon: string, name: string, color: string, badge: number }[]>([{
  icon: 'noticefill',
  color: 'olive',
  badge: 22,
  name: '通知'
}, {
  icon: 'upstagefill',
  color: 'cyan',
  badge: 0,
  name: '排行榜'
}, {
  icon: 'discoverfill',
  color: 'purple',
  badge: 0,
  name: '发现'
}, {
  icon: 'questionfill',
  color: 'mauve',
  badge: 0,
  name: '帮助'
}])

getIndexInfo().then(res => {
  carousels.push(...res.carousels)
  goodsData.push({title: '每日上新', data: res.newGoodses})
  goodsData.push({title: '热销商品', data: res.hotGoodses})
  goodsData.push({title: '最新推荐', data: res.recommendGoodses})
})
</script>

<template>
  <view class="index">
    <cu-custom bgColor="bg-gradual-blue">
      <template #content>
        <view class="cu-bar justify-center ">
          <view class="action sub-title">
            <text class="text-xxl text-bold text-white">Title</text>
            <text class="text-ABC text-white">title</text>
            <!-- last-child选择器-->
          </view>
        </view>
      </template>
    </cu-custom>
    <!--    轮播图-->
    <search-bar></search-bar>
    <swiper class="m-wiper screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true"
            interval="5000"
            duration="500">
      <swiper-item v-for="item in carousels" :key="item.redirectUrl">
        <image :src="item.carouselUrl" mode="aspectFill"></image>
      </swiper-item>
    </swiper>
    <!--  宫格 列表-->
    <view class="cu-list grid col-4 no-border">
      <view class="cu-item" v-for="item in list" :key="item.name">
        <view :class="`cuIcon-${item.icon} text-${item.color}`">
          <view class="cu-tag badge" v-if="item.badge!=0">
            <block>{{ item.badge > 99 ? "99+" : item.badge }}</block>
          </view>
        </view>
        <text>{{ item.name }}</text>
      </view>
    </view>

    <view class="main">
      <view v-for="item in goodsData" :key="item.title">
        <view class="cu-bar  bg-white">
          <view class="action">
            <text class="cuIcon-titles text-green"></text>
            <text class="text-xl text-bold text-green">{{ item.title }}</text>
          </view>
        </view>
        <view class="m-goods">
          <GoodsCard v-for="goods in item.data" :key="goods.goodsId" :value="goods"></GoodsCard>
        </view>
      </view>

    </view>
  </view>
</template>


<style lang="scss">
.main {
  padding-bottom: calc(100px + env(safe-area-inset-bottom) / 2);

  .m-goods {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
  }
}
</style>
