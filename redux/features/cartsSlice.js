import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
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
  console.log('data: ', data)
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

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    showCarts: (state, { payload }) => {
      state.value.showCarts = payload
    },
    getCartsState: (state, { payload }) => {
      console.log("getCarts: ", payload)
      state.value.cartExists = payload
    },
  },
  extraReducers: {
    [addToCarts.pending]: (state) => {
      console.log('add to charts pending')
    },
    [addToCarts.fulfilled]: (state, { payload }) => {
      console.log('add to carts fulfilled', payload)
    },
    [addToCarts.rejected]: (state, { payload }) => {
      console.log('add to carts rejected', payload)
    },
    [removeFromCarts.pending]: (state) => {
      console.log('remove from carts pending')
    },
    [removeFromCarts.fulfilled]: (state, { payload }) => {
      console.log('remove from carts fulfilled', payload)
    },
    [removeFromCarts.rejected]: (state, { payload }) => {
      console.log('remove from carts rejected', payload)
    },
  },
})

export const { showCarts, getCartsState } = cartsSlice.actions
export default cartsSlice.reducer
export { addToCarts, removeFromCarts }
