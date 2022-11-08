<script lang="ts" setup>
import {computed} from "vue";
import {useStatusBar} from "../../store/statusBar";
import Taro from "@tarojs/taro";

const props = defineProps<{ bgColor?: string, isBack?: boolean, bgImage?: string }>()
const Bar = useStatusBar()
const StatusBar: number = Bar.StatusBar
const CustomBar: number = Bar.CustomBar
const style = computed(() => {
  let bgImage = props.bgImage;
  let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
  if (bgImage) {
    style = `${style}background-image:url(${bgImage});`;
  }
  return style
})
// /*    BackPage() {
//       if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
//         let url = '/' + __wxConfig.pages[0]
//         return uni.redirectTo({url})
//       }
//       uni.navigateBack({
//         delta: 1
//       });
//     }
// * */
function BackPage() {
  console.log(Taro.getCurrentPages().length)
}

</script>

<template>
  <view>
    <view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
      <view class="cu-bar fixed" :style="style" :class="[bgImage!=undefined?'none-bg text-white bg-img':'',bgColor]">
        <view class="action" @tap="BackPage" v-if="isBack">
          <text class="cuIcon-back"></text>
          <slot name="backText"></slot>
        </view>
        <view class="content" :style="[{top:StatusBar + 'px'}]">
          <slot name="content"></slot>
        </view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<style>

</style>
