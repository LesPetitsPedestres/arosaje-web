export const useStoreCategory = defineStore('storeCategory', {
  // a function that returns a fresh state

  state: () => {
    return {
      data: null,
    }
  },
  actions: {
    async getAllCategoriesController() {
      const { data } = await useFetch('http://localhost:1779/api/v1/lab/category')
      this.data = data
    },
  },
})

// async addCategoryController(body) {
//   const response = await useFetch('http://localhost:1779/api/v1/lab/category/add', {
//     method: 'POST',
//     body: body,
//   })

//   return response
// },
// async deleteCategoryController(body) {
//   this.categories = await useFetch('http://localhost:1779/api/v1/lab/category/delete', {
//     method: 'POST',
//     body: body,
//   })
// },

// async modifyCategoryController(body) {
//   this.categories = await useFetch('http://localhost:1779/api/v1/lab/category/modify', {
//     method: 'POST',
//     body: body,
//   })
// },
