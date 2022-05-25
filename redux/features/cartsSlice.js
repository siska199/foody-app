import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    showCarts: false,
    dataCarts: [],
    totalQty: 0,
    totalPrice: 0,
    deliveryCost: 5,
  },
}
const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    showCarts: (state, { payload }) => {
      state.value.showCarts = payload
    },
    addToCarts: (state, { payload }) => {
      state.value.totalPrice += payload.price
      state.value.totalQty += 1

      const indexData = state.value.dataCarts.findIndex(
        (data) => data.id == payload.id
      )
      console.log(indexData)
      if (indexData != -1) {
        state.value.dataCarts[indexData].qty += 1
      } else {
        state.value.dataCarts.push({
          ...payload,
          qty: 1,
        })
      }
    },
    removeFromCarts: (state, { payload }) => {
      state.value.totalPrice -= payload.price
      state.value.totalQty -= 1

      const indexData = state.value.dataCarts.findIndex(
        (data) => data.id == payload.id
      )
      if (state.value.dataCarts[indexData].qty == 1) {
        state.value.dataCarts = state.value.dataCarts.filter(
          (data) => data.id != payload.id
        )
        return
      }
      if (indexData != -1) {
        state.value.dataCarts[indexData].qty -= 1
      }
    },
    deleteAllCharts: (state) => {
      state.value.dataCarts = []
      state.value.totalQty = 0
      state.value.totalPrice = 0
    },
  },
})

export const { showCarts, addToCarts, removeFromCarts, deleteAllCharts } =
  cartsSlice.actions
export default cartsSlice.reducer