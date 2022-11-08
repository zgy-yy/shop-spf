import {ref} from "vue";
import {defineStore} from 'pinia'

export const useStatusBar = defineStore('status', () => {
    const StatusBar = ref(0)
    const CustomBar = ref(0)
    const setStatusBar = (val: number) => {
      StatusBar.value = val
    }
    const setCustomBar = (val: number) => {
      CustomBar.value = val
    }

    return {StatusBar, CustomBar, setStatusBar, setCustomBar}
  }
)
