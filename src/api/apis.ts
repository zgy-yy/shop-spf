import http from "./index";
import {CateData, GoodsCartItem, GoodsDetail, IndexInfo} from "../model";
import {useGoodsInfo} from "../store/goodsInfo";


interface ResponseData<T> {
  message: string
  resultCode: number
  data: T
}

export function getIndexInfo() {
  return http.get<ResponseData<IndexInfo>>('index-infos').then(res => {
    return res.data
  })
}

export function getGoodsDetail(id: number) {
  return new Promise((resolve, reject) => {
    http.get<ResponseData<GoodsDetail>>('goods/detail/' + id).then(res => {
      if (res.resultCode == 416) {
        reject('message: "未登录！"')
      }
      const goodsInfo = useGoodsInfo()
      goodsInfo.setInfo(res.data)
      resolve(res.data)
    })
  });
}

export function userLogin(name: string, password: string) {
  return new Promise((resolve, reject) => {
    return http.post<ResponseData<string>>('user/login', {
      loginName: name,
      passwordMd5: password
    }).then(res => {
      if (res.resultCode == 200) {
        resolve(res.data)
      }
      reject('登录失败！')
    })
  });

}

export function userRegister(name: string, password: string) {
  return new Promise((resolve, reject) => {
    return http.post<ResponseData<string>>('user/register', {
      loginName: name,
      password: password
    }).then(res => {
      if (res.resultCode == 200) {
        resolve(res.data)
      }
      if (res.resultCode == 500) {
        reject('用户名已存在！')
      }
    })
  });
}

export function getCategories() {
  return http.get<ResponseData<CateData[]>>('categories')
}

export function addCartItem(id: number, count: number) {
  return http.post('shop-cart', {
    goodsCount: count,
    goodsId: id
  })
}

export function getCartGoods(){
  return http.get<ResponseData<GoodsCartItem[]>>('shop-cart').then(res=>{
    return res.data
  })
}

export function changeCount(id: number, count: number){
  return http.put('shop-cart', {
    cartItemId: id,
    goodsCount: count
  })
}

export function deleteCartId(id:number){
  return http.delete<ResponseData<any>>('shop-cart/'+id).then(res=>{
    return res.data
  })
}
