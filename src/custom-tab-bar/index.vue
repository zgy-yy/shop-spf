<script lang="ts" setup>
import Taro from '@tarojs/taro'
import {computed} from 'vue'
import {useTabBar} from "../store/tabBar";
//
const storeTabBar = useTabBar()
const selected = computed(() => storeTabBar.selected)
const color = '#000000'
const selectedColor = '#DC143C'
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: '../image/tabbar/basics_cur.png',
    iconPath: '../image/tabbar/basics.png',
    text: '首页'
  },
  {
    pagePath: '/pages/cate/index',
    selectedIconPath: '../image/tabbar/component_cur.png',
    iconPath: '../image/tabbar/component.png',
    text: '分类'
  },
  {
    pagePath: '/pages/cart/index',
    selectedIconPath: '../image/tabbar/plugin_cur.png',
    iconPath: '../image/tabbar/plugin.png',
    text: '购物车'
  },
  {
    pagePath: '/pages/my/index',
    selectedIconPath: '../image/tabbar/about_cur.png',
    iconPath: '../image/tabbar/about.png',
    text: '个人中心'
  }
]

function switchTab(index, url) {
  console.log(1)
  setSelected(index)
  Taro.switchTab({url})
}

function setSelected(index: number) {
  storeTabBar.setSelected(index)
}
</script>

<template>
  <view class="cu-bar tabbar bg-white">
    <view @tap="switchTab(index,item.pagePath)" class="action" v-for="(item,index) in list" :key="item.text">
      <view class="cuIcon-cu-image">
        <image class="img" :src="selected==index?item.selectedIconPath:item.iconPath"></image>
      </view>
      <view class="text-green">{{ item.text }}</view>
    </view>
  </view>
</template>

<style>
.cu-bar {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 100px;
  justify-content: space-between;
}
.cu-bar.tabbar {
  padding: 0;
  height: calc(100px + env(safe-area-inset-bottom) / 2);
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}
.cu-bar .action {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  max-width: 100%;
}

.cu-bar .action.border-title {
  position: relative;
  top: -10px;
}
.bg-white {
  background-color: #ffffff;
  color: #666666;
}
.cu-bar.tabbar .action {
  font-size: 22px;
  position: relative;
  flex: 1;
  text-align: center;
  padding: 0;
  display: block;
  height: auto;
  line-height: 1;
  margin: 0;
  background-color: inherit;
  overflow: initial;
}
.cu-bar .action:last-child {
  margin-right: 30px;
}
.cu-bar.tabbar .action .cuIcon-cu-image {
  margin: 0 auto;
}
.cu-bar.tabbar .action .cuIcon-cu-image .img {
  width: 50px;
  height: 50px;
  display: inline-block;
}
.text-green,
.line-green,
.lines-green {
  color: #39b54a;
}
</style>
