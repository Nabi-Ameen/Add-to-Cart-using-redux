import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './featurs/cartSlice'
import modelReducer from './featurs/modelSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        model: modelReducer,
    }
})
