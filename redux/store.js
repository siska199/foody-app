import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import cartsReducer from './features/cartsSlice'

const store = configureStore({
  reducer: { theme: themeReducer, carts: cartsReducer },
})

export default store
