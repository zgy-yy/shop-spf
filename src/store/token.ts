import {ref} from "vue";
import { defineStore } from 'pinia'
export const useToken = defineStore('token', () => {
  const token = ref('')
  const setToken =(val:string)=>{
    token.value = val
  }
  return {token,setToken}
  }
)
