<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {getCartGoods, getCategories} from "../../api/apis";
import CuCustom from "../../colorui/components/cu-custom.vue";
import GoodsCard from "../../components/GoodsCard.vue";
import CardItem from "../../components/CardItem.vue";
import {GoodsCartItem} from "../../model";

const checkValue = reactive({
  value: 'yuche',
  text: 'yuche',
  checked: false
})

const carts = reactive<GoodsCartItem[]>([])

function update() {
  getCartGoods().then(res => {
    carts.splice(0, carts.length)
    carts.push(...res)
    console.log(res)
  })
}

update()


function onChange(e) {
  console.log(e.detail)
}
</script>
<template>
  <view class="index">
    <cu-custom bg-color="bg-white">
      <template #content>
        <view>购物车</view>
      </template>
    </cu-custom>

    <view class="m-main">
      <card-item @changed="update" v-for="item in carts" :value="item" :key="item.goodsId"></card-item>
    </view>

    <view class="m-total">
      <radio-group @change="onChange">
        <checkbox-group class="cu-form-group" @change="changeCheck">
          <checkbox  class="round blue m-check" :value="isCheck" ></checkbox>
        </checkbox-group>
        <checkbox class="m-radio " :value="checkValue.value" :checked="checkValue.checked">
          <text>全选</text>
        </checkbox>
      </radio-group>
      <view>
        <text>合计：</text>
        <text>21678.0</text>
      </view>
      <button class="cu-btn cu-btn round bg-cyan">结算</button>
    </view>
  </view>
</template>

<style lang="scss">
.m-total {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding-bottom: 10px;
  background: white;
  height: 130px;
  margin-bottom: calc(100px + env(safe-area-inset-bottom) / 2);

  .m-radio {
  }

  .cu-btn {
    width: 230px;
  }
}

.m-main{
  overflow: scroll;
  height: calc(100vh - 60px - calc(100px + env(safe-area-inset-bottom)/2) -  calc(100px + env(safe-area-inset-bottom)) - calc(100px + env(safe-area-inset-bottom)) ) ;
}
</style>
