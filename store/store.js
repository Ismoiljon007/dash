import { defineStore } from 'pinia'

export const useStore = defineStore('store', ()=> {
    const loginPage = ref(null)
    const baseUrl = 'http://95.47.127.26:50008'
    const loader = ref(true)
    return {
        loginPage,
        baseUrl,
        loader
    }
})