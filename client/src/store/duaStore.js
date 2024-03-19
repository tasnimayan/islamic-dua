import { create } from 'zustand'
import axios from 'axios'
const baseURL = "http://localhost:5000/api/v1"

const duaStore = create((set) => ({

  language : 'en',
  setLanguage: (value) => {
    set((state) => ({
      language: value
    })
  )},

  showCategory:false,
  setShowCategory: () => set((state) => ({ showCategory: !state.showCategory })),


  
  categoryList: null,
  categoryListRequest: async()=>{
    try {
        let res = await axios.get(`${baseURL}/categories`);
        set({categoryList:res.data['data']})
    }catch (e) {
        console.log(e)
    }
  },

  subCategoryList: null,
  subCategoryListRequest: async(categoryId)=>{
    try {
        let res = await axios.get(`${baseURL}/sub_cat/${categoryId}`);
        set({subCategoryList:res.data['data']})
    }catch (e) {
        console.log(e)
    }
  },


  duaList: null,
  duaListRequest: async(categoryId)=>{
    try {
        let res = await axios.get(`${baseURL}/dua/${categoryId}`);
        set({duaList:res.data['data']})
    }catch (e) {
        console.log(e)
    }
  },

}))

export default duaStore;