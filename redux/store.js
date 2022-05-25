import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import cartsReducer from './features/cartsSlice'
import authReducer from './features/authSlice'

const store = configureStore({
  reducer: { theme: themeReducer, carts: cartsReducer, auth: authReducer },
})

export default store
