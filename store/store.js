import { defineStore } from 'pinia'

export const useStore = defineStore('store', ()=> {
    const loginPage = ref(null)
    return {
        loginPage
    }
})