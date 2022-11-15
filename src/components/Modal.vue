<script lang="ts" setup>
import {ref} from "vue";

const isShow = ref(true)

function hideModal() {
  isShow.value = false
}
</script>

<template>
  <view class="cu-modal" :class="isShow?'show':''">
    <view class="cu-dialog">
      <view class="cu-bar bg-white justify-end">
        <view class="content">Modal标题</view>
        <view class="action" @tap="hideModal">
          <text class="cuIcon-close text-red"></text>
        </view>
      </view>
      <view class="padding-xl">
        Modal 内容。
      </view>
    </view>
  </view>
</template>

<style>

</style>
