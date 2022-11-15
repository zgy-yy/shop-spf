import {defineStore} from "pinia";
import {reactive,} from "vue";
import {GoodsDetail} from "../model";

export const useGoodsInfo = defineStore('goodsInfo', () => {
  const info = reactive<GoodsDetail>({
    goodsId: 0,
    goodsName: '',
    goodsIntro: '',
    goodsCoverImg: '',
    sellingPrice: 0,
    tag: '',
    goodsCarouselList: [],
    originalPrice: 0,
    goodsDetailContent: '',
  });
  const setInfo = (val: GoodsDetail) => {
    info.goodsId = val.goodsId
    info.goodsName = val.goodsName
    info.goodsIntro = val.goodsIntro
    info.goodsCoverImg = val.goodsCoverImg
    info.sellingPrice = val.sellingPrice
    info.tag = val.tag
    info.goodsCarouselList = val.goodsCarouselList
    info.originalPrice = val.originalPrice
    info.goodsDetailContent = val.goodsDetailContent
  }

  return {info, setInfo}
})
