import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db, storage } from '../../firebase.config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const initialState = {
  value: {
    products: [],
    categories: [],
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
    name: data,
  })
})

const addProduct = createAsyncThunk('products/addProduct', async (data) => {
  const storageRef = ref(storage, `images/${Date.now()}-${data.photo.name}`)
  uploadBytes(storageRef, data.photo).then(async (snap) => {
    const downloadURL = await getDownloadURL(storageRef)
    await addDoc(collection(db, 'categories', data.idCategory, 'products'), {
      title: data.title,
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
    [getCategories.pending]: (state) => {},
    [getCategories.fulfilled]: (state, { payload }) => {
      state.value.categories = payload
    },
    [getCategories.rejected]: (state) => {
      console.log('rejected')
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      console.log('add category success')
    },

    // Products:
    [addProduct.fulfilled]: (state, { payload }) => {
      console.log('add product success')
    },
  },
})

export default productsSlice.reducer
export { addProduct, getCategories, addCategory }
