import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection
} from 'firebase/firestore'
import { db } from '../../firebase.config'

const initialState = {
  value: {
    showCarts: false,
    dataCarts: [],
    totalQty: 0,
    totalPrice: 0,
    deliveryCost: 5,
    cartExists: true,
  },
}

const addToCarts = createAsyncThunk('carts/addToCarts', async (data) => {
  const cartRef = doc(db, 'users', data.idUser, 'carts', data.data.title)
  const dataExist = await getDoc(cartRef)
  if (dataExist.exists()) {
    await updateDoc(cartRef, {
      qty: dataExist.data().qty + 1,
    })
  } else {
    await setDoc(cartRef, {
      title: data.data.title,
      category: data.data.category,
      photo: data.data.photo,
      calories: data.data.calories,
      price: data.data.price,
      qty: 1,
    })
  }
})

const removeFromCarts = createAsyncThunk(
  'carts/removeFromCarts',
  async (data) => {
    const cartRef = doc(db, 'users', data.idUser, 'carts', data.data.title)
    const dataExist = await getDoc(cartRef)
    if (dataExist.exists()) {
      if (dataExist.data().qty == 1) {
        await deleteDoc(cartRef)
      } else {
        await updateDoc(cartRef, {
          qty: dataExist.data().qty - 1,
        })
      }
    } else {
      await setDoc(cartRef, {
        title: data.data.title,
        category: data.data.category,
        photo: data.data.photo,
        calories: data.data.calories,
        price: data.data.price,
        qty: 1,
      })
    }
  }
)
const deleteAllCarts = createAsyncThunk(
  'carts/deleteAllCarts',
  async (idUser) => {
    const data = await getDocs(collection(db, 'users', idUser, 'carts'))
    data.forEach(async (doc) => {
      await deleteDoc(doc.ref)
    })
  }
)

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    showCarts: (state, { payload }) => {
      state.value.showCarts = payload
    },
    getCartsState: (state, { payload }) => {
      state.value.cartExists = payload
    },
  },
  extraReducers: {
    [addToCarts.pending]: (state) => {
    },
    [addToCarts.fulfilled]: (state, { payload }) => {
    },
    [addToCarts.rejected]: (state, { payload }) => {
    },
    [removeFromCarts.pending]: (state) => {
    },
    [removeFromCarts.fulfilled]: (state, { payload }) => {
    },
    [removeFromCarts.rejected]: (state, { payload }) => {
    },
    [deleteAllCarts.pending]: (state) => {
    },
    [deleteAllCarts.fulfilled]: (state, { payload }) => {
    },
    [deleteAllCarts.rejected]: (state, { payload }) => {
    },
  },
})

export const { showCarts, getCartsState } = cartsSlice.actions
export default cartsSlice.reducer
export { addToCarts, removeFromCarts, deleteAllCarts }
