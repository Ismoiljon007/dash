import { defineStore } from 'pinia'

export const useStore = defineStore('store', ()=> {
    const loginPage = ref(null)
    const baseUrl = 'https://www.api.yomon-emas.uz/api'
    const loader = ref(false)
    return {
        loginPage,
        baseUrl,
        loader
    }
})