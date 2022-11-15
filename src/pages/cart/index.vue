<script lang="ts" setup>
import {ref} from 'vue'
import {getCategories} from "../../api/apis";
import CuCustom from "../../colorui/components/cu-custom.vue";

const msg = ref('hello-page')

</script>
<template>
  <view class="index">
   <cu-custom bg-color="bg-white">
     <template #content>
       <view>购物车</view>
     </template>
   </cu-custom>
  </view>
</template>

<style lang="scss" scoped>

</style>
