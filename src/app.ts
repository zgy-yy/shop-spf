import {createApp} from 'vue'
import './app.scss'
import {createPinia} from 'pinia'
import Taro from "@tarojs/taro";
import {useStatusBar} from "./store/statusBar";

const App = createApp({
  onLaunch() {
    const Bar = useStatusBar()
    Taro.getSystemInfoAsync({
      success(res) {

        let statusBar: number = res.statusBarHeight as number;
        Bar.setStatusBar(statusBar)
        let capsule = Taro.getMenuButtonBoundingClientRect();
        if (capsule) {
          Bar.setCustomBar(capsule.bottom + capsule.top - statusBar)
        } else {
          Bar.setCustomBar(statusBar + 1)
        }
      }
    })
  },
  onShow() {
    // console.log(options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(createPinia())
// 引用全部组件

export default App
