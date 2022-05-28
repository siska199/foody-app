import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDocs, collection, doc, addDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

const signUpUser = createAsyncThunk('auth/signUpUser', async (session) => {

  return usersData
})

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
  extraReducers: {
    [signUpUser.pending]: (state, { payload }) => {},
    [signUpUser.fulfilled]: () => {},
    [signUpUser.rejected]: () => {},
  },
})

export default authSlice.reducer
export const { showHideModalAuth } = authSlice.actions
export { signUpUser }
