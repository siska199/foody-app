import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, storage } from '../../firebase.config'
import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  startAt,
  endAt,
  limitToLast,
  serverTimestamp,
  orderBy,
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
    firstVisibleFriuts: null,
    lastVisibleFriuts: null,
    prevState: false,
    nextState: true,
    prevStateFruits: false,
    nextStateFruits: true,
  },
}

const getCategories = createAsyncThunk('products/getCategories', async () => {
  const categories = []
  const data = await getDocs(collection(db, 'categories'))
  data.forEach((doc) => {
    categories.push({
      id: doc.id,
      name: doc.data().name,
      createdAt: doc.data().createdAt,
    })
  })
  return categories
})

const addCategory = createAsyncThunk('products/addCategory', async (data) => {
  await addDoc(collection(db, 'categories'), {
    name: capitalixeFirstLetter(data),
    createdAt: serverTimestamp(),
  })
})

const getSpecifiedProducts = createAsyncThunk(
  'products/getSpecifiedProducts',
  async ({ idCategory, fruits }) => {
    const resProducts = await getDocs(
      query(
        collection(db, 'categories', idCategory, 'products'),
        orderBy('createdAt'),
        limit(6)
      )
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
        createdAt: doc.data().createdAt,
      })
    })
    const nextState = products.length > 5 ? true : false
    const prevState = false

    return {
      data: products,
      fruits,
      lastVisible,
      firstVisible,
      nextState,
      prevState,
    }
  }
)

const getPrevNext = createAsyncThunk(
  'products/getPrevNext',
  async ({ idCategory, fruits, next, product }) => {
    const nextQuery = query(
      collection(db, 'categories', idCategory, 'products'),
      orderBy('createdAt'),
      startAt(product),
      limit(6)
    )

    const prevQuery = query(
      collection(db, 'categories', idCategory, 'products'),
      orderBy('createdAt'),
      endAt(product),
      limitToLast(7)
    )
    const resProducts = await getDocs(next ? nextQuery : prevQuery)

    const lastVisible = resProducts.docs[resProducts.docs.length - 1]
    const firstVisible = next ? resProducts.docs[0] : resProducts.docs[1]
    const products = []

    resProducts.forEach((doc) => {
      products.push({
        id: doc.id,
        title: doc.data().title,
        category: doc.data().category,
        photo: doc.data().photo,
        calories: doc.data().calories,
        price: doc.data().price,
        createdAt: doc.data().createdAt,
      })
    })

    const prevState = products.length == 7 || next ? true : false
    const nextState = products.length > 5 ? true : false

    return {
      data: products,
      fruits,
      lastVisible,
      firstVisible,
      nextState,
      prevState,
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
      createdAt: serverTimestamp(),
    })
  })
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    //Categories
    [getCategories.pending]: (state) => {

    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.value.categories = payload

    },
    [getCategories.rejected]: (state) => {

    },
    [addCategory.pending]: (state) => {

    },
    [addCategory.fulfilled]: (state, { payload }) => {

    },
    [addCategory.rejected]: (state, { payload }) => {

    },
    // Products:
    [addProduct.pending]: (state) => {
      state.value.loading = true

    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.value.loading = false

    },
    [addProduct.rejected]: (state, { payload }) => {
      state.value.loading = false

    },
    [getSpecifiedProducts.pending]: (state) => {
      state.value.loading = true

    },
    [getSpecifiedProducts.fulfilled]: (state, { payload }) => {
      if (payload.fruits) {
        state.value.fruits = payload.data
        state.value.firstVisibleFruits = payload.firstVisible
        state.value.lastVisibleFruits = payload.lastVisible
        state.value.nextStateFruits = payload.nextState
        state.value.prevStateFruits = payload.prevState
      } else {
        state.value.products = payload.data
        state.value.firstVisibleProduct = payload.firstVisible
        state.value.lastVisibleProduct = payload.lastVisible
        state.value.nextState = payload.nextState
        state.value.prevState = payload.prevState
      }
      state.value.loading = false

    },
    [getSpecifiedProducts.rejected]: (state, { payload }) => {
      state.value.loading = false

    },
    [getPrevNext.pending]: (state, { payload }) => {
      state.value.loading = true
    },
    [getPrevNext.fulfilled]: (state, { payload }) => {

      state.value.loading = false
      if (payload.fruits) {
        state.value.fruits = payload.data
        state.value.nextStateFruits = payload.nextState
        state.value.prevStateFruits = payload.prevState
        state.value.firstVisibleFruits = payload.firstVisible
        state.value.lastVisibleFruits = payload.lastVisible
      } else {
        state.value.products = payload.data
        state.value.firstVisibleProduct = payload.firstVisible
        state.value.lastVisibleProduct = payload.lastVisible
        state.value.nextState = payload.nextState
        state.value.prevState = payload.prevState
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
