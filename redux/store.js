import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import cartsReducer from './features/cartsSlice'
import authReducer from './features/authSlice'
import productsReducer from './features/productsSlice'
const store = configureStore({
  reducer: {
    theme: themeReducer,
    carts: cartsReducer,
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
