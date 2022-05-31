import { createSlice } from '@reduxjs/toolkit'
import { themeLight } from '../../helper/constanta'

const initialState = themeLight

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialState,
  },
  reducers: {
    changeTheme: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
