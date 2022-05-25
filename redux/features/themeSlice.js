import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  bg: 'bg-[#f5f3f3]',
  textMainColor: 'text-[#515151]',
  primaryText: 'text-orange-600',
  primaryCard: 'bg-orange-600',
  cardColor: 'bg-white',
}

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
