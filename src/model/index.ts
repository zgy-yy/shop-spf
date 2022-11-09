export interface Good {
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
  hotGoodses: Good[],
  newGoodses: Good[],
  recommendGoodses: Good[]
}
