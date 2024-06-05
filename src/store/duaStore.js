import { create } from 'zustand'
import axios from 'axios'

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
      let res = await axios.get(`/api/categories`);
      set({categoryList:res.data['data']})
    }catch (e) {
      console.log(e)
    }
  },

  subCategoryList: null,
  subCategoryListRequest: async(categoryId)=>{
    try {
      let res = await axios.get(`/api/sub_cat/${categoryId}`);
      set({subCategoryList:res.data['data']})
    }catch (e) {
      console.log(e)
    }
  },


  duaList: null,
  duaListRequest: async(categoryId)=>{
    try {
      let res = await axios.get(`/api/dua/${categoryId}`);
      set({duaList:res.data['data']})
    }catch (e) {
      console.log(e)
    }
  },

}))

export default duaStore;