<script lang="ts" setup>
import {GoodsCartItem} from "../model";
import {changeCount, deleteCartId} from "../api/apis";
import {ref} from "vue";

const props = defineProps<{ value: GoodsCartItem }>()
const emits = defineEmits<{
  (e: 'changed'): void // 函数类型 当传递的值的类型不是number时会报错
}>();
const showDel = ref(false)

const isCheck=ref(false)


function add() {
  changeCount(props.value.cartItemId, props.value.goodsCount + 1).then(res => {
    emits('changed')
  })
}

function sub() {
  changeCount(props.value.cartItemId, props.value.goodsCount - 1).then(res => {
    emits('changed')
  })
}

function deleteItem() {
  deleteCartId(props.value.cartItemId).then(res=>{
    emits('changed')
  })
}

let startX = 0
let moveX = 0

function touchstart(e) {
  //开始触摸时 重置所有删除
  startX = e.changedTouches[0].clientX
}

//滑动事件处理
function touchmove(e) {
  moveX = e.changedTouches[0].clientX
  if (moveX - startX < -50) {
    showDel.value = true
  } else {
    showDel.value = false
  }
}

function changeCheck(e){
  isCheck.value = !isCheck.value
  console.log(isCheck.value)
}
</script>

<template>
  <view class="m-view">
    <view class="m-del" @tap="deleteItem" >
      delete
    </view>

    <view class="m-cart" :class="showDel?'m-anmi':'' " :style="showDel?{transform:`translateX(${-50}px)`}:{}"
          @touchstart="touchstart" @touchmove="touchmove">
      <checkbox-group class="cu-form-group" @change="changeCheck">
        <checkbox  class="round blue m-check" :value="isCheck" ></checkbox>
      </checkbox-group>
      <image :src="value.goodsCoverImg"></image>
      <view class="m-msg">
        <view class="text-lg">{{ value.goodsName }}</view>
        <view class="m-opt">
          <view> {{ value.sellingPrice }}</view>
          <view class="m-option">
            <view>-</view>
            <view>{{ value.goodsCount }}</view>
            <view @tap="add">+</view>
          </view>
        </view>
      </view>
    </view>

  </view>


</template>

<style lang="scss">
.m-view {
  position: relative;
  height: 180px;
  width: 100vw;
}

.m-cart {
  width: 100vw;
  position: absolute;
  background: white;
  display: flex;
  align-items: center;
  height: 180px;
  margin-bottom: 20px;


  .m-check {
    //border: 1px solid red;
    //margin-left: 20px;
    //width: 50px;
    //height: 50px;
  }

  image {
    width: 180px;
    height: 180px;
  }

  .m-msg {
    margin-left: 20px;
    flex-grow: 1;

    .m-opt {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .m-option {
        display: flex;

        view {
          border: 1px solid #efebeb;
          margin: 2px 20px 2px 10px;
          width: 50px;
          //height: 50px;
          vertical-align: middle;
          text-align: center;
          color: #c8c9cc;
          background-color: #f7f8fa;
        }
      }
    }
  }
}

.m-del {
  position: absolute;
  top: 0;
  right: 0;
  background: yellow;
  height: 180px;
  text-align: center;
  display: flex;
  align-items: center;
  //z-index: -1;
}

.m-anmi {
  transition-duration: 0.618s;
}
</style>
