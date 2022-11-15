<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {getCategories} from "../../api/apis";
import CuCustom from "../../colorui/components/cu-custom.vue";
import {CateData} from "../../model";
import {nav} from "@tarojs/runtime/dist/bom/navigator";
import {useStatusBar} from "../../store/statusBar";

const Bar = useStatusBar()
const CustomBar: number = Bar.CustomBar / 2

const navData = reactive({
  TabCur: 0,
  MainCur: 0,
  VerticalNavTop: 0,
})

const cat = reactive<CateData[]>([])

getCategories().then(res => {
  cat.push(...res.data)
  console.log(res)
})

function tabSelect(e) {
  navData.TabCur = e.currentTarget.dataset.id
  navData.MainCur = e.currentTarget.dataset.id,
    navData.VerticalNavTop = (e.currentTarget.dataset.id - 1) * 80
}
</script>
<template>
  <view class="index">
    <cu-custom bg-color="bg-white">
      <template #content>
        <view>分类</view>
      </template>
    </cu-custom>

    <view class="VerticalBox">
      <scroll-view class="VerticalNav nav" :scroll-y="true" :scroll-with-animation="true"
                   :scroll-top="navData.VerticalNavTop"
                   :style="`height:calc(100vh - calc(100px + env(safe-area-inset-bottom) / 2) ) `">
        <view class="m-left-cu cu-item bg-white cur" :class="navData.TabCur==index?'text-blue':''"
              v-for="(item,index) in cat" :key="index" @tap='tabSelect' :data-id="index">
          {{ item.categoryName }}
        </view>

      </scroll-view>

      <scroll-view class="VerticalMain " :scroll-y="true" :scroll-with-animation="true"
                   :style="`height:calc(100vh - calc(100px + env(safe-area-inset-bottom) / 2) ) `">
        <view class="padding-top padding-lr" v-for="(item,index) in cat[navData.TabCur]?.secondLevelCategoryVOS"
              :key="index" :id="`main-${index}`">
          <view class='cu-bar solid-bottom bg-white'>
            <view class='action'>
              <text class='cuIcon-title text-green'></text>
              {{ item.categoryName }}
            </view>
          </view>
          <view class="cu-list menu-avatar">
            <view class="cu-list grid col-3 no-border">
              <view class=" m-cu-item cu-item" v-for="cat in item.thirdLevelCategoryVOS" :key="cat.categoryId">
                <text>{{ cat.categoryName }}</text>
              </view>
            </view>
          </view>

        </view>
      </scroll-view>
    </view>

  </view>
</template>

<style lang="scss">
/* pages/component/nav/nav.wxss */
.VerticalNav.nav {
  width: 200px;
  white-space: initial;
}

.VerticalNav.nav .cu-item {
  width: 100%;
  text-align: center;
  background-color: #fff;
  margin: 0;
  border: none;
  height: 80px;
  position: relative;
}

.VerticalNav.nav .cu-item.cur {
  background-color: #f1f1f1;
}

.VerticalNav.nav .cu-item.cur::after {
  content: "";
  width: 8px;
  height: 30px;
  border-radius: 10px 0 0 10px;
  position: absolute;
  background-color: currentColor;
  top: 0;
  right: 0px;
  bottom: 0;
  margin: auto;
}

.VerticalBox {
  display: flex;
}

.VerticalMain {
  background-color: #f1f1f1;
}

.m-left-cu {
  text-overflow: ellipsis;
  overflow: hidden;

}

.m-cu-item {
  padding: 10px;
}
</style>
