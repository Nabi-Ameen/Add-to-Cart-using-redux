import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './featurs/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
