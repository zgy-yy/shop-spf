export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/cate/index',
    'pages/cart/index',
    'pages/my/index',
    'pages/login/index',
    'pages/goodsDetail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle:'custom'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'image/tabbar/basics_cur.png',
        iconPath: 'image/tabbar/basics.png',
        text: '首页'
      },
      {
        pagePath: 'pages/cate/index',
        selectedIconPath: 'image/tabbar/component_cur.png',
        iconPath: 'image/tabbar/component.png',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        selectedIconPath: 'image/tabbar/plugin_cur.png',
        iconPath: 'image/tabbar/plugin.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'image/tabbar/about_cur.png',
        iconPath: 'image/tabbar/about.png',
        text: '个人中心'
      }
    ]
  },
})
