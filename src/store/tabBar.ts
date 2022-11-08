import {ref} from "vue";
import {defineStore} from 'pinia'

export const useTabBar = defineStore('tarBar', () => {
    const selected = ref(0)
    const setSelected = (val: number) => {
      selected.value = val
    }
    return {selected, setSelected}
  }
)
