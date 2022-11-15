<script lang="ts" setup>
import {reactive, ref} from 'vue'
import CuCustom from "../../colorui/components/cu-custom.vue";
import {userLogin, userRegister} from "../../api/apis";
import Modal from "../../components/Modal.vue";
import Taro from "@tarojs/taro";


type modeType = "login" | "register"

const mode = ref<modeType>('login')

const user = reactive({
  loginName: "15515659385",
  passwordMd5: "e10adc3949ba59abbe56e057f20f883e"
})

function login() {
  userLogin(user.loginName, user.passwordMd5).then(res => {
    console.log('token:', res)
    Taro.setStorageSync('token', res)
    Taro.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    Taro.navigateBack()
  }).catch((e) => {
    Taro.showToast({
      title: '登录失败',
      icon: 'error',
      duration: 2000
    })
  })
}

function register(){
  userRegister('15515659385',"123456").then(res=>{
    Taro.showToast({
      title: '成功注册',
      icon: 'success',
      duration: 2000
    })
  }).catch(()=>{
    Taro.showToast({
      title: '用户名已存在',
      icon: 'error',
      duration: 2000
    })
  })
}

function handleClick(){
  if (mode.value=='login'){
    login()
  }else {
    register()
  }
}
function changeMode() {
  if (mode.value == 'login') {
    mode.value = 'register'
  } else {
    mode.value = "login"
  }
}
</script>


<template>
  <view class="index">
    <cu-custom is-back>
      <template #content>
        <view>{{ mode == 'login' ? '登录' : "注册"}}</view>
      </template>
    </cu-custom>

    <view class="m-form">
      <view class="cu-form-group">
        <view class="title">手机号码</view>
        <input placeholder="输入正确手机号"/>
        <view class="cu-capsule radius">
          <view class="cu-tag bg-blue">
            +86
          </view>
          <view class="cu-tag line-blue">
            中国大陆
          </view>
        </view>
      </view>

      <view class="cu-form-group">
        <view class="title">密码</view>
        <input placeholder=""/>
      </view>
      <view class="padding flex flex-direction">
        <button @tap="handleClick" :class="mode=='login'?'bg-green':'bg-blue'" class="cu-btn bg-green margin-tb-sm lg">{{ mode == 'login' ? '登录' : "注册" }}</button>
      </view>

      <view class="m-padding">
        <view @tap="changeMode" :class="mode=='login'?'bg-blue':'bg-green'" class="cu-tag ">{{mode=='login'?'还没账号，点我注册':'已有账号，登录'}}</view>
      </view>
    </view>
  </view>
</template>

<style>
.m-form {
  width: 80%;
  margin: 0 auto;
}

.m-padding {
  padding: 10px 0 0 30px;
}
</style>
