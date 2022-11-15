export interface Goods {
  goodsCoverImg: string
  goodsId: number
  goodsIntro: string
  goodsName: string
  sellingPrice: number
  tag: string
}


export interface IndexInfo {
  carousels: Array<{
    carouselUrl: string
    redirectUrl: string
  }>,
  hotGoodses: Goods[],
  newGoodses: Goods[],
  recommendGoodses: Goods[]
}

export interface GoodsDetail {
  goodsId: number
  goodsName: string
  goodsIntro: string
  goodsCoverImg: string
  sellingPrice: number
  tag: string
  goodsCarouselList: string[]
  originalPrice: number
  goodsDetailContent: string
}

export interface Cat {
  categoryId: 0,
  categoryLevel: string,
  categoryName: string,
}

export interface CateData {
  categoryId: number,
  categoryLevel: string,
  categoryName: string,
  secondLevelCategoryVOS: {
    categoryId: number,
    categoryLevel: string,
    categoryName: string,
    parentId: number,
    thirdLevelCategoryVOS: Cat[]
  }[]
}
