import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    showModal: false,
  },
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showHideModalAuth: (state, { payload }) => {
      state.value.showModal = payload
    },
  },
})

export default authSlice.reducer
export const { showHideModalAuth } = authSlice.actions
