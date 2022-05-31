import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, storage } from '../../firebase.config'
import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  endBefore,

} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { capitalixeFirstLetter } from '../../helper/function'
const initialState = {
  value: {
    products: [],
    categories: [],
    fruits: [],
    loading: false,
    firstVisibleProduct: null,
    lastVisibleProduct: null,
  },
}

const getCategories = createAsyncThunk('products/getCategories', async () => {
  const categories = []
  const data = await getDocs(collection(db, 'categories'))
  data.forEach((doc) => {
    categories.push({ id: doc.id, name: doc.data().name })
  })
  return categories
})

const addCategory = createAsyncThunk('products/addCategory', async (data) => {
  await addDoc(collection(db, 'categories'), {
    name: capitalixeFirstLetter(data),
  })
})

const getSpecifiedProducts = createAsyncThunk(
  'products/getSpecifiedProducts',
  async ({ idCategory, fruits }) => {

    const resProducts = await getDocs(
      query(collection(db, 'categories', idCategory, 'products'), limit(5))
    )
    const lastVisible = resProducts.docs[resProducts.docs.length - 1]
    const firstVisible = resProducts.docs[0]

    const products = []
    resProducts.forEach((doc) => {
      products.push({
        id: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        photo: doc.data().photo,
        calories: doc.data().calories,
        price: doc.data().price,
      })
    })
    return {
      data: products,
      fruits,
      lastVisible,
      firstVisible,
    }
  }
)

const getPrevNext = createAsyncThunk(
  'products/getPrevNext',
  async ({ idCategory, fruits, next, product }) => {

    const nextQuery = query(
      collection(db, 'categories', idCategory, 'products'),
      startAfter(product),
      limit(5)
    )
    const prevQuery = query(
      collection(db, 'categories', idCategory, 'products'),
      endBefore(product),
      limit(5)
    )
    const resProducts = await getDocs(next ? nextQuery : prevQuery)
    const lastVisible = resProducts.docs[resProducts.docs.length - 1]
    const firstVisible = resProducts.docs[0]
    const products = []
    resProducts.forEach((doc) => {
      products.push({
        id: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        photo: doc.data().photo,
        calories: doc.data().calories,
        price: doc.data().price,
      })
    })
    return {
      data: products,
      fruits,
      lastVisible,
      firstVisible,
    }
  }
)

const addProduct = createAsyncThunk('products/addProduct', async (data) => {
  const storageRef = ref(storage, `images/${Date.now()}-${data.photo.name}`)
  uploadBytes(storageRef, data.photo).then(async (snap) => {
    const downloadURL = await getDownloadURL(storageRef)
    await addDoc(collection(db, 'categories', data.idCategory, 'products'), {
      title: capitalixeFirstLetter(data.title),
      category: data.category,
      photo: downloadURL,
      calories: data.calories,
      price: data.price,
    })
  })
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    //Categories
    [getCategories.pending]: (state) => {
      console.log('get categories pending')
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.value.categories = payload
      console.log('get categories fullfilled')
    },
    [getCategories.rejected]: (state) => {
      console.log('get categories rejected')
    },
    [addCategory.pending]: (state) => {
      console.log('add category pending')
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      console.log('add category fullfilled')
    },
    [addCategory.rejected]: (state, { payload }) => {
      console.log('add category rejected')
    },
    // Products:
    [addProduct.pending]: (state) => {
      state.value.loading = true
      console.log('add product pending')
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.value.loading = false
      console.log('add product fullfilled')
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.value.loading = false
      console.log('add product rejected')
    },
    [getSpecifiedProducts.pending]: (state) => {
      state.value.loading = true
      console.log('get products pending')
    },
    [getSpecifiedProducts.fulfilled]: (state, { payload }) => {
      state.value.products = payload.data
      state.value.firstVisibleProduct = payload.firstVisible
      state.value.lastVisibleProduct = payload.lastVisible

      if (payload.fruits) {
        state.value.fruits = payload.data
      }
    },
    [getSpecifiedProducts.rejected]: (state, { payload }) => {
      state.value.loading = false
      console.log('get products rejected')
    },
    [getPrevNext.pending]: (state, { payload }) => {
      state.value.loading = true
    },
    [getPrevNext.fulfilled]: (state, { payload }) => {
      state.value.loading = false
      state.value.products = payload.data
      state.value.firstVisibleProduct = payload.firstVisible
      state.value.lastVisibleProduct = payload.lastVisible

      if (payload.fruits) {
        state.value.fruits = payload.data
      }
    },
  },
})

export default productsSlice.reducer
export {
  addProduct,
  getCategories,
  addCategory,
  getSpecifiedProducts,
  getPrevNext,
}
